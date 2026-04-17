import { useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
}

const useMouseTilt = (maxTilt = 15) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [tilt, setTilt] = useState<TiltValues>({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;

    // skip on touch-capable devices
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0–1
    const y = (e.clientY - rect.top) / rect.height;   // 0–1

    setTilt({
      rotateX: (0.5 - y) * maxTilt * 2,
      rotateY: (x - 0.5) * maxTilt * 2,
      glowX: x * 100,
      glowY: y * 100,
    });
  }, [prefersReduced, maxTilt]);

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  }, []);

  return { ref, tilt, onMouseMove, onMouseLeave };
};

export default useMouseTilt;
