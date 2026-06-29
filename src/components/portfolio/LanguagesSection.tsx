import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Server, GitBranch, Database, Cpu, Figma, Wrench, BookOpen, Shield, ChevronRight } from "lucide-react";
import SkillsMatrixModal from "./SkillsMatrixModal";

const SKILL_GROUPS = [
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    techs: ["Flutter", "Dart", "Bloc", "Riverpod", "Provider", "Android Studio", "Xcode"],
    span: "col-span-2 row-span-1",
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    techs: ["NestJS", "TypeScript", "REST APIs", "Node.js"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "firebase",
    label: "Firebase",
    icon: Cpu,
    techs: ["Firestore", "Realtime DB", "FCM", "Crashlytics", "Analytics", "App Distribution"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "devops",
    label: "DevOps / CI-CD",
    icon: GitBranch,
    techs: ["GitHub Actions", "GitLab CI", "Docker", "Firebase App Distribution"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    techs: ["Firestore", "Realtime Database", "SQLite", "PostgreSQL"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "web",
    label: "Frontend / Web",
    icon: Globe,
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "design",
    label: "Design & Tools",
    icon: Figma,
    techs: ["Figma", "Mobile UI/UX", "Git"],
    span: "col-span-1 row-span-1",
  },
];

const STATS = [
  { value: "25+", label: "Technologies" },
  { value: "7",   label: "Skill domains" },
  { value: "4+",  label: "Years building" },
];

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const LanguagesSection = () => {
  const [isSkillsMatrixOpen, setSkillsMatrixOpen] = useState(false);

  return (
    <>
      <section id="languages" className="relative py-24 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 55% 40% at 50% 0%, hsl(38 92% 50% / 0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative container mx-auto px-6">
          {/* Section header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">
              <Wrench className="h-4 w-4" />
              Toolkit
            </span>
            <h2 className="font-display text-4xl font-bold mt-3 tracking-tight">Technical Skills</h2>
            <div className="section-heading-line" />
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              My core toolkit for building and shipping production mobile apps.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex items-center justify-center gap-8 mb-8 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-bold text-gradient">{stat.value}</span>
                <span className="text-xs text-muted-foreground font-mono tracking-wide">{stat.label}</span>
              </div>
            ))}
            <div className="hidden sm:block w-px h-5 bg-border/50" />
            <motion.button
              onClick={() => setSkillsMatrixOpen(true)}
              className="flex items-center gap-1.5 text-xs font-mono text-violet hover:text-violet-bright transition-colors duration-200"
              whileHover={{ x: 2 }}
            >
              Open skills matrix <ChevronRight className="h-3.5 w-3.5" />
            </motion.button>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto">
            {SKILL_GROUPS.map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.id}
                  custom={i}
                  variants={tileVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(20 28% 3% / 0.6), 0 0 20px hsl(38 92% 50% / 0.1)" }}
                  className={`group relative rounded-2xl border border-border/50 p-4 overflow-hidden transition-all duration-300 ${group.span}`}
                  style={{ background: "linear-gradient(135deg, hsl(243 22% 10%) 0%, hsl(245 20% 8%) 100%)" }}
                >
                  {/* Accent gradient bar on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "var(--gradient-violet)" }}
                  />

                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="p-1.5 rounded-lg border border-violet/20 group-hover:border-violet/40 transition-colors duration-300"
                      style={{ background: "hsl(38 92% 50% / 0.08)" }}
                    >
                      <Icon className="h-3.5 w-3.5 text-violet group-hover:text-violet-bright transition-colors" />
                    </div>
                    <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">{group.label}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono border border-border/50 text-muted-foreground group-hover:border-violet/20 group-hover:text-muted-foreground/90 transition-colors duration-200"
                        style={{ background: "hsl(245 20% 12%)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Currently Growing */}
          <motion.div
            className="mt-6 grid sm:grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              {
                icon: Shield,
                label: "Delivery Track",
                desc: "Faster, safer releases with automation.",
                techs: ["CI/CD", "App Distribution", "Testing pipelines", "Release management"],
              },
              {
                icon: BookOpen,
                label: "Mobile Architecture",
                desc: "Building scalable, maintainable apps.",
                techs: ["Clean Architecture", "State management", "Performance", "Offline & realtime"],
              },
            ].map((track) => {
              const TrackIcon = track.icon;
              return (
                <div
                  key={track.label}
                  className="group rounded-2xl border border-violet/20 p-4 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, hsl(38 92% 50% / 0.06) 0%, hsl(27 96% 61% / 0.04) 100%)" }}
                >
                  <div className="card-top-accent" />
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-violet/15 border border-violet/25">
                      <TrackIcon className="h-3.5 w-3.5 text-violet" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet">{track.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2.5">{track.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {track.techs.map((t) => (
                      <span key={t} className="badge-tech">{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {isSkillsMatrixOpen && <SkillsMatrixModal onClose={() => setSkillsMatrixOpen(false)} />}
    </>
  );
};

export default LanguagesSection;
