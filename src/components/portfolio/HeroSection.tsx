import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Phone, Code2, Rocket, Layers, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import CvDownloadModal from "./CvDownloadModal";
import SkillsMatrixModal from "./SkillsMatrixModal";
import ParticleBackground from "./ParticleBackground";
import AnimatedCounter from "./AnimatedCounter";

const TYPING_WORDS = ["Mobile Developer", "Flutter Expert", "NestJS Engineer", "CI/CD Architect", "AI-Powered Developer"];
const TECH_STACK = ["Flutter", "NestJS"];

const HeroSection = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [isCvModalOpen, setCvModalOpen] = useState(false);
  const [isSkillsMatrixOpen, setSkillsMatrixOpen] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) { setDisplayed(TYPING_WORDS[0]); return; }
    const word = TYPING_WORDS[typingIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTypingIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, typingIndex, prefersReduced]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const fadeUp = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
  };

  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <ParticleBackground />

        {/* Multi-angle radial gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 65% 35%, hsl(38 92% 50% / 0.17) 0%, transparent 70%)",
              "radial-gradient(ellipse 55% 45% at 10% 80%, hsl(27 96% 61% / 0.12) 0%, transparent 65%)",
              "radial-gradient(ellipse 35% 28% at 22% 10%, hsl(38 92% 50% / 0.08) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(38 92% 50% / 0.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 15%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 15%, transparent 100%)",
            opacity: 0.55,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-14 sm:pt-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[75vh] lg:min-h-[85vh]">

            {/* ── Left: Text ── */}
            <motion.div
              className="space-y-5 sm:space-y-8 order-2 lg:order-1"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {/* Available badge — emerald with glow */}
              <motion.div variants={fadeUp}>
                <motion.span
                  className="inline-flex items-center gap-2.5 text-xs font-mono font-semibold tracking-[0.18em] uppercase text-emerald-400 px-4 py-2 rounded-full border border-emerald-400/30 relative overflow-hidden cursor-default select-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(152 76% 50% / 0.08) 0%, hsl(160 60% 45% / 0.06) 100%)",
                    boxShadow: "0 0 18px hsl(152 76% 50% / 0.12), inset 0 1px 0 hsl(152 76% 50% / 0.15)",
                  }}
                  whileHover={{ scale: 1.04, boxShadow: "0 0 28px hsl(152 76% 50% / 0.25), inset 0 1px 0 hsl(152 76% 50% / 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 animate-ping" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_hsl(152_76%_50%/0.8)]" />
                  </span>
                  Available for opportunities
                </motion.span>
              </motion.div>

              {/* Name + typing */}
              <motion.div variants={fadeUp} className="space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  <span className="text-foreground">Oussama</span>
                  <br />
                  <span className="text-gradient">Methnani</span>
                </h1>
                <div className="flex items-center gap-2 h-10">
                  <span className="font-display text-base sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                    {displayed}
                  </span>
                  <span className="w-0.5 h-7 bg-violet animate-pulse rounded-full" />
                </div>
              </motion.div>

              {/* Bio */}
              <motion.p variants={fadeUp} className="text-base text-muted-foreground max-w-md leading-relaxed">
                4+ years shipping production Flutter apps to Google Play & App Store.
                Expert in Firebase, NestJS, CI/CD pipelines, and state management.
                Proficient in AI-assisted development — leveraging AI to architect, build, and ship full products faster.
              </motion.p>

              {/* Current position */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
                <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 animate-ping" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs text-muted-foreground/50 font-mono tracking-wide">Currently at</span>
                <span className="text-sm font-semibold text-foreground/90">Continuous Net</span>
                <span className="text-muted-foreground/25 select-none text-sm leading-none">—</span>
                <span className="text-sm text-muted-foreground/65 font-medium">Flutter & NestJS Developer</span>
                <span className="flex items-center gap-1.5">
                  {TECH_STACK.map((tech) => (
                    <span key={tech} className="badge-tech">{tech}</span>
                  ))}
                </span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Primary — Download CV */}
                <motion.button
                  onClick={() => setCvModalOpen(true)}
                  className="group relative flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-background overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(38 92% 48%) 0%, hsl(27 96% 58%) 100%)",
                    boxShadow: "0 0 22px hsl(38 92% 50% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.12)",
                  }}
                  whileHover={{ scale: 1.04, boxShadow: "0 0 36px hsl(38 92% 50% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.15)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <Download className="relative h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-px" />
                  <span className="relative">Download CV</span>
                </motion.button>

                {/* Secondary — Get in Touch */}
                <motion.button
                  onClick={() => setContactFormOpen(true)}
                  className="group relative flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-violet overflow-hidden"
                  style={{
                    background: "hsl(24 14% 7%)",
                    boxShadow: "0 0 0 1.5px hsl(38 92% 50% / 0.35)",
                  }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 0 1.5px hsl(38 92% 50% / 0.7), 0 0 24px hsl(38 92% 50% / 0.2)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(38 92% 50% / 0.1) 0%, transparent 70%)" }}
                  />
                  <Mail className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-px" />
                  <span className="relative">Get in Touch</span>
                </motion.button>

                {/* Tertiary — Skills Matrix (terminal style) */}
                <motion.button
                  onClick={() => setSkillsMatrixOpen(true)}
                  className="group relative flex items-center gap-1.5 px-4 py-3.5 text-sm font-mono text-muted-foreground/70 hover:text-emerald-400 transition-colors duration-200"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-emerald-400/50 group-hover:text-emerald-400 transition-colors duration-200 select-none">$</span>
                  <span>view skills</span>
                  <span className="w-px h-3.5 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-100 animate-pulse" />
                </motion.button>
              </motion.div>

              {/* Social links */}
              <motion.div variants={fadeUp} className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-violet hover:bg-violet/10 rounded-xl" asChild>
                  <a href="https://github.com/oussamamth1" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-violet hover:bg-violet/10 rounded-xl" asChild>
                  <a href="https://www.linkedin.com/in/oussama-methnani-bb4145206" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-violet hover:bg-violet/10 rounded-xl" asChild>
                  <a href="tel:+21620640783" aria-label="Call Oussama">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-violet hover:bg-violet/10 rounded-xl" onClick={() => setContactFormOpen(true)} aria-label="Send email">
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* ── Right: Photo ── */}
            <motion.div
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            >
              {/* Orbital rings */}
              {!prefersReduced && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg viewBox="0 0 440 440" className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] opacity-60">
                    <circle cx="220" cy="220" r="213" fill="none" stroke="hsl(38 92% 50% / 0.12)" strokeWidth="1" strokeDasharray="5 8" />
                    <circle cx="220" cy="220" r="178" fill="none" stroke="hsl(27 96% 61% / 0.07)" strokeWidth="1" />
                    <circle
                      cx="220" cy="220" r="213"
                      fill="none"
                      stroke="hsl(38 92% 50% / 0.55)"
                      strokeWidth="1.5"
                      strokeDasharray="68 348"
                      className="animate-spin-slow"
                      style={{ transformOrigin: "220px 220px" }}
                    />
                    <circle
                      cx="220" cy="220" r="178"
                      fill="none"
                      stroke="hsl(27 96% 61% / 0.45)"
                      strokeWidth="1"
                      strokeDasharray="40 278"
                      style={{ transformOrigin: "220px 220px", animation: "spin-slow 15s linear infinite reverse" }}
                    />
                  </svg>
                </div>
              )}

              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-25"
                style={{ background: "radial-gradient(circle, hsl(38 92% 50%) 0%, transparent 65%)" }}
              />

              <motion.img
                src="/oussama-hero.png"
                alt="Oussama Methnani — Mobile Developer"
                className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-[22rem] lg:h-[22rem] rounded-full object-cover shadow-glow-lg"
                style={{ border: "2.5px solid hsl(38 92% 50% / 0.4)" }}
                animate={prefersReduced ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating card: Apps Shipped */}
              <motion.div
                className="hidden sm:block absolute bottom-8 -left-4 lg:-left-12 glass rounded-2xl px-4 py-3 shadow-elevated border border-violet/20"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 24px hsl(38 92% 50% / 0.2)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Rocket className="h-3 w-3 text-violet/80" />
                  <span className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Apps Shipped</span>
                </div>
                <AnimatedCounter
                  value={10}
                  suffix="+"
                  label="Apps Shipped"
                  labelClassName="sr-only"
                  numberClassName="text-xl font-display font-bold text-gradient leading-none"
                  className="block items-start"
                />
              </motion.div>

              {/* Floating card: Years Experience */}
              <motion.div
                className="hidden sm:block absolute top-8 -right-4 lg:-right-12 glass rounded-2xl px-4 py-3 shadow-elevated border border-violet/20"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 24px hsl(38 92% 50% / 0.2)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock className="h-3 w-3 text-violet/80" />
                  <span className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Years Exp.</span>
                </div>
                <AnimatedCounter
                  value={4}
                  suffix="+"
                  label="Years Experience"
                  labelClassName="sr-only"
                  numberClassName="text-xl font-display font-bold text-gradient leading-none"
                  className="block items-start"
                />
              </motion.div>

              {/* Floating card: Technologies (lg only) */}
              <motion.div
                className="absolute top-8 -left-4 lg:-left-12 glass rounded-2xl px-4 py-3 shadow-elevated border border-violet/20 hidden lg:block"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 24px hsl(38 92% 50% / 0.2)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Layers className="h-3 w-3 text-violet/80" />
                  <span className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Technologies</span>
                </div>
                <AnimatedCounter
                  value={15}
                  suffix="+"
                  label="Technologies"
                  labelClassName="sr-only"
                  numberClassName="text-xl font-display font-bold text-gradient leading-none"
                  className="block items-start"
                />
              </motion.div>

              {/* Floating card: Projects (lg only) */}
              <motion.div
                className="absolute bottom-8 -right-4 lg:-right-12 glass rounded-2xl px-4 py-3 shadow-elevated border border-violet/20 hidden lg:block"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 24px hsl(38 92% 50% / 0.2)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Code2 className="h-3 w-3 text-violet/80" />
                  <span className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Projects</span>
                </div>
                <AnimatedCounter
                  value={3}
                  label="Production Projects"
                  labelClassName="sr-only"
                  numberClassName="text-xl font-display font-bold text-gradient leading-none"
                  className="block items-start"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(240 25% 4%))" }}
        />

        {/* Scroll indicator — mouse icon */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <div className="relative w-5 h-[30px] rounded-full border border-muted-foreground/30 flex items-start justify-center pt-1">
            <motion.div
              className="w-px h-[9px] rounded-full bg-muted-foreground/55"
              animate={prefersReduced ? {} : { y: [0, 7, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-muted-foreground/35 select-none">
            scroll
          </span>
        </motion.div>
      </section>

      {isContactFormOpen && <ContactForm onClose={() => setContactFormOpen(false)} />}
      {isCvModalOpen && <CvDownloadModal onClose={() => setCvModalOpen(false)} />}
      {isSkillsMatrixOpen && <SkillsMatrixModal onClose={() => setSkillsMatrixOpen(false)} />}
    </>
  );
};

export default HeroSection;
