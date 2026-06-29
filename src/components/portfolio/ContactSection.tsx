import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "oussamamethnani321@gmail.com",
    href: "mailto:oussamamethnani321@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 20 640 783",
    href: "tel:+21620640783",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Akouda, Sousse, Tunisia",
    href: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const ContactSection = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 70% 55% at 50% 100%, hsl(262 83% 68% / 0.1) 0%, transparent 70%)",
            "radial-gradient(ellipse 45% 35% at 15% 20%, hsl(230 68% 62% / 0.06) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* Header + CTA */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">
            <Send className="h-4 w-4" />
            Get in Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Let's build something <span className="text-gradient">great</span>
          </h2>
          <div className="section-heading-line" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Open to full-time roles and freelance projects. If you need a Flutter app
            shipped to both stores — or a NestJS backend behind it — let's talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* Primary — open contact form */}
            <motion.button
              onClick={() => setContactFormOpen(true)}
              className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(262 83% 64%) 0%, hsl(230 68% 58%) 100%)",
                boxShadow: "0 0 22px hsl(262 83% 68% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.12)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 36px hsl(262 83% 68% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.15)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <Send className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-px" />
              <span className="relative">Send a Message</span>
            </motion.button>

            {/* Secondary — LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/oussama-methnani-bb4145206"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-violet overflow-hidden"
              style={{
                background: "hsl(240 25% 7%)",
                boxShadow: "0 0 0 1.5px hsl(262 83% 68% / 0.35)",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 0 1.5px hsl(262 83% 68% / 0.7), 0 0 24px hsl(262 83% 68% / 0.2)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              <Linkedin className="relative h-4 w-4" />
              <span className="relative">Connect on LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className="p-3 rounded-xl border border-violet/20 bg-violet/8 group-hover:bg-violet/14 group-hover:border-violet/35 transition-all duration-300 shrink-0">
                  <Icon className="h-5 w-5 text-violet" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-foreground/90 group-hover:text-violet transition-colors duration-200 truncate">
                    {item.value}
                  </p>
                </div>
              </>
            );
            const cardClass =
              "group flex items-center gap-4 rounded-2xl border border-border/60 p-4 transition-all duration-300 hover:border-violet/40";
            const cardStyle = { background: "linear-gradient(135deg, hsl(243 22% 10%) 0%, hsl(245 20% 8%) 100%)" };

            return (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {item.href ? (
                  <a href={item.href} className={cardClass} style={cardStyle}>
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass} style={cardStyle}>
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Socials + footer */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-1">
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
              <a href="mailto:oussamamethnani321@gmail.com" aria-label="Send email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground/50 font-mono tracking-wide">
            © 2026 Oussama Methnani — Built with React, Tailwind & Framer Motion
          </p>
        </motion.div>
      </div>

      {isContactFormOpen && <ContactForm onClose={() => setContactFormOpen(false)} />}
    </section>
  );
};

export default ContactSection;
