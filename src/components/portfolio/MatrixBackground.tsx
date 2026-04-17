import { useEffect, useRef } from "react";
import * as THREE from "three";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";

const MatrixBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const COLS = isMobile ? 18 : 36;
    const CHAR_SIZE = 18;
    const TEX_W = CHAR_SIZE;
    const TEX_H = CHAR_SIZE;
    const ROWS = 28;
    const Z_LAYERS = isMobile ? 2 : 4;

    // ── Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.setAttribute("aria-label", "3D matrix animation background");
    renderer.domElement.style.cssText = "position:absolute;inset:0;pointer-events:none;";
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 200);
    camera.position.set(0, 0, 22);
    camera.lookAt(0, 0, 0);

    // ── Per-column state
    interface Column {
      x: number;
      z: number;
      drops: number[];       // y index of each active char
      bright: number[];      // which row is the "head" (brightest)
      speeds: number;
      mesh: THREE.Mesh;
      texture: THREE.CanvasTexture;
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;
      timer: number;
    }

    const columns: Column[] = [];

    // Spread columns across X and multiple Z layers
    const totalW = COLS * 0.9;
    const layerZ = [0, -5, -10, -16];

    for (let layer = 0; layer < Z_LAYERS; layer++) {
      const colsInLayer = Math.ceil(COLS / Z_LAYERS) + (layer === 0 ? 2 : 0);
      const alpha = 1 - layer * 0.22;

      for (let c = 0; c < colsInLayer; c++) {
        const x = -totalW / 2 + (c / (colsInLayer - 1)) * totalW + (layer % 2) * 0.45;
        const z = layerZ[layer] ?? -layer * 5;

        // Canvas texture per column
        const canvas = document.createElement("canvas");
        canvas.width = TEX_W;
        canvas.height = TEX_H * ROWS;
        const ctx = canvas.getContext("2d")!;

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const geo = new THREE.PlaneGeometry(0.7, 0.7 * ROWS);
        const mat = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: alpha,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, 0, z);
        scene.add(mesh);

        // Init drops
        const drops = Array.from({ length: ROWS }, (_, i) => i);
        const bright = [Math.floor(Math.random() * ROWS)];

        columns.push({
          x, z,
          drops,
          bright,
          speeds: 0.04 + Math.random() * 0.06,
          mesh,
          texture,
          canvas,
          ctx,
          timer: Math.random() * 60,
        });
      }
    }

    // Draw a column's characters onto its canvas
    const drawColumn = (col: Column) => {
      const { ctx, canvas, bright } = col;
      ctx.clearRect(0, 0, TEX_W, canvas.height);
      ctx.font = `bold ${CHAR_SIZE - 2}px monospace`;
      ctx.textAlign = "center";

      for (let row = 0; row < ROWS; row++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = row * TEX_H + TEX_H * 0.8;

        const distFromHead = (bright[0] - row + ROWS) % ROWS;
        const trail = ROWS * 0.45;

        if (distFromHead === 0) {
          // Head: bright white
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "hsl(262,83%,90%)";
          ctx.shadowBlur = 12;
        } else if (distFromHead < trail) {
          // Trail: fading violet
          const fade = 1 - distFromHead / trail;
          const l = Math.round(68 * fade + 20);
          ctx.fillStyle = `hsl(262,83%,${l}%)`;
          ctx.shadowColor = `hsl(262,83%,${l}%)`;
          ctx.shadowBlur = fade * 8;
        } else {
          // Dim background chars
          ctx.fillStyle = "hsl(262,40%,18%)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, TEX_W / 2, y);
      }

      col.texture.needsUpdate = true;
    };

    // Initial draw
    columns.forEach(drawColumn);

    // ── Mouse parallax
    const mouse = { x: 0, y: 0 };
    const targetCam = { x: 0, y: 0 };
    const handleMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5);
      mouse.y = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouse);

    // ── Animation
    const clock = new THREE.Clock();
    let animId: number;
    let frameCount = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = clock.getDelta(); // called ONCE
      frameCount++;

      if (!mq.matches) {
        // Advance heads every ~6 frames
        if (frameCount % 6 === 0) {
          columns.forEach((col) => {
            col.bright[0] = (col.bright[0] + 1) % ROWS;
            drawColumn(col);
          });
        }

        // Slow camera parallax
        targetCam.x += (mouse.x * 2.5 - targetCam.x) * 0.04 * (dt * 60);
        targetCam.y += (-mouse.y * 1.2 - targetCam.y) * 0.04 * (dt * 60);
        camera.position.x += (targetCam.x - camera.position.x) * 0.06;
        camera.position.y += (targetCam.y - camera.position.y) * 0.06;
        camera.lookAt(0, 0, 0);

        // Slight Z rotation on whole scene
        scene.rotation.z += 0.0003 * (dt * 60);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Pause on hidden tab
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animId);
      else animate();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // ResizeObserver
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handleMouse);
      ro.disconnect();
      columns.forEach(({ mesh, texture, canvas }) => {
        (mesh.material as THREE.MeshBasicMaterial).dispose();
        mesh.geometry.dispose();
        texture.dispose();
        canvas.remove();
        scene.remove(mesh);
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 overflow-hidden"
      style={{ background: "hsl(240 25% 4%)" }}
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
