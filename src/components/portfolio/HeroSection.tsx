import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Phone, ChevronDown } from "lucide-react";
import ContactForm from "./ContactForm";
import CvDownloadModal from "./CvDownloadModal";
import ParticleBackground from "./ParticleBackground";
import AnimatedCounter from "./AnimatedCounter";

const TYPING_WORDS = ["Mobile Developer", "Flutter Expert", "NestJS Engineer", "CI/CD Architect"];

const HeroSection = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [isCvModalOpen, setCvModalOpen] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReduced = useReducedMotion();

  // Typing animation
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } },
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Three.js particle background */}
        <ParticleBackground />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, hsl(262 83% 68% / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

            {/* ── Left: Text ── */}
            <motion.div
              className="space-y-8 order-2 lg:order-1"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="space-y-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-[0.2em] uppercase text-violet px-3 py-1.5 rounded-full border border-violet/20 bg-violet/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-3">
                <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  <span className="text-foreground">Oussama</span>
                  <br />
                  <span className="text-gradient">Methnani</span>
                </h1>

                <div className="flex items-center gap-2 h-10">
                  <span className="font-display text-xl lg:text-2xl text-muted-foreground font-medium">
                    {displayed}
                  </span>
                  <span className="w-0.5 h-7 bg-violet animate-pulse rounded-full" />
                </div>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-base text-muted-foreground max-w-md leading-relaxed"
              >
                4+ years shipping production Flutter apps to Google Play & App Store.
                Expert in Firebase, NestJS, CI/CD pipelines, and state management (BLoC, Riverpod, Provider).
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-violet hover:bg-violet-bright text-white font-semibold shadow-glow animate-pulse-glow px-7 transition-all duration-normal"
                  onClick={() => setCvModalOpen(true)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet/40 text-violet hover:bg-violet/10 hover:border-violet font-semibold px-7 transition-all duration-normal"
                  onClick={() => setContactFormOpen(true)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </motion.div>

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
              {/* Glow ring behind image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, hsl(262 83% 68%) 0%, transparent 70%)" }}
              />
              <motion.img
                src="/oussama-hero.png"
                alt="Oussama Methnani — Mobile Developer"
                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-glow-lg"
                style={{ border: "2px solid hsl(262 83% 68% / 0.3)" }}
                animate={prefersReduced ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-8 -left-4 lg:-left-8 glass rounded-2xl px-4 py-3 shadow-elevated"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="text-xs text-muted-foreground font-mono">Experience</p>
                <p className="text-lg font-display font-bold text-gradient">4+ Years</p>
              </motion.div>

              <motion.div
                className="absolute top-8 -right-4 lg:-right-8 glass rounded-2xl px-4 py-3 shadow-elevated"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-xs text-muted-foreground font-mono">Apps Shipped</p>
                <p className="text-lg font-display font-bold text-gradient">10+</p>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Stats Bar ── */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <AnimatedCounter value={4} suffix="+" label="Years Experience" />
            <AnimatedCounter value={10} suffix="+" label="Apps Shipped" />
            <AnimatedCounter value={15} suffix="+" label="Technologies" />
            <AnimatedCounter value={3} suffix="" label="Production Projects" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </section>

      {isContactFormOpen && <ContactForm onClose={() => setContactFormOpen(false)} />}
      {isCvModalOpen && <CvDownloadModal onClose={() => setCvModalOpen(false)} />}
    </>
  );
};

export default HeroSection;
