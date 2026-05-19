import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, Star } from "lucide-react";

const education = [
  {
    degree: "Master's Degree in Software Engineering",
    institution: "Université ISET",
    location: "Tunisia",
    period: "2017 – 2022",
    status: "Graduated",
    description: "Specialized in software engineering principles and rapid application development.",
    coursework: ["Software Engineering", "Mobile Development", "Web Development", "Databases", "Software Architecture"],
    achievements: [
      "Built multiple cross-platform applications with Flutter",
      "Strong foundation in software architecture and delivery",
    ],
  },
  {
    degree: "Bachelor's Degree in Technology",
    institution: "Université Salem Ben Hmida",
    location: "Tunisia",
    period: "2012 – 2016",
    status: "Graduated",
    description: "Foundation in technology and computer science.",
    coursework: ["Computer Science Fundamentals", "Mathematics", "Problem Solving", "Algorithms", "Networks"],
    achievements: [
      "Solid base in computing and engineering fundamentals",
    ],
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -48 : 48,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const EducationSection = () => (
  <section id="education" className="relative py-24 overflow-hidden">
    {/* Background effects */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: [
          "radial-gradient(ellipse 60% 40% at 80% 20%, hsl(262 83% 68% / 0.07) 0%, transparent 70%)",
          "radial-gradient(ellipse 50% 35% at 10% 85%, hsl(230 68% 62% / 0.06) 0%, transparent 65%)",
        ].join(", "),
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(262 83% 68% / 0.1) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 100%)",
        opacity: 0.35,
      }}
    />

    <div className="relative container mx-auto px-6">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">
          <GraduationCap className="h-4 w-4" />
          Academic Background
        </span>
        <h2 className="font-display text-4xl font-bold mt-3 tracking-tight">Education</h2>
        <div className="section-heading-line" />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Academic background supporting mobile and backend engineering.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6, boxShadow: "0 24px 60px hsl(240 25% 2% / 0.7), 0 0 30px hsl(262 83% 68% / 0.1)" }}
            className="group relative rounded-2xl border border-border/60 overflow-hidden transition-shadow duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(243 22% 10%) 0%, hsl(245 20% 8%) 100%)",
            }}
          >
            {/* Top accent */}
            <div className="card-top-accent" />

            {/* Left accent spine */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "var(--gradient-violet)" }}
            />

            {/* Watermark index */}
            <span
              className="absolute top-4 right-5 font-display font-bold text-7xl leading-none select-none pointer-events-none"
              style={{ color: "hsl(262 83% 68% / 0.06)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative p-6 space-y-5">
              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 p-2.5 rounded-xl border border-violet/20 shrink-0"
                    style={{ background: "hsl(262 83% 68% / 0.08)" }}
                  >
                    <GraduationCap className="h-5 w-5 text-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground/60 tracking-wider">{edu.period}</p>
                    <h3 className="font-display font-semibold text-foreground leading-snug mt-0.5">{edu.degree}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground/50 shrink-0" />
                      <span className="text-sm text-muted-foreground/70">{edu.institution} — {edu.location}</span>
                    </div>
                  </div>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide text-emerald-400 border border-emerald-400/30 bg-emerald-400/8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {edu.status}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: "var(--gradient-violet)", opacity: 0.15 }} />

              <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

              {/* Key Focus */}
              <div>
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Key Focus</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium border border-border/60 text-muted-foreground"
                      style={{ background: "hsl(245 20% 12%)" }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-violet/70" />
                  Highlights
                </p>
                <ul className="space-y-1.5">
                  {edu.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span
                        className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: "hsl(45 80% 55% / 0.12)", border: "1px solid hsl(45 80% 55% / 0.25)" }}
                      >
                        <Star className="h-2.5 w-2.5" style={{ color: "hsl(45 80% 60%)" }} />
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
