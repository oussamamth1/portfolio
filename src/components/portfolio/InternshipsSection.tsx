import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, PlayCircle, X, Rocket, Users, Server } from "lucide-react";

const experiences = [
  {
    company: "Continuous Net",
    role: "Flutter & NestJS Developer",
    period: "2022 – Present",
    location: "Sousse, Tunisia",
    type: "Full-time",
    isCurrent: true,
    logoUrl: "/continuousnet.png",
    description:
      "Developed and maintained production Flutter apps (Android, iOS, Web) with scalable architecture and advanced state management (Bloc, Riverpod, Provider). Built and integrated REST APIs with NestJS, implemented CI/CD pipelines with Firebase App Distribution, and delivered features using Firebase services (FCM, Realtime Database, Firestore, Crashlytics, Analytics). Shipped multiple apps to Google Play Store and App Store.",
    highlights: [
      "Shipped 10+ production apps to Google Play & App Store",
      "Designed CI/CD pipelines reducing release time by 60%",
      "Integrated Firebase suite: FCM, Crashlytics, Analytics, App Distribution",
      "Built scalable NestJS REST APIs consumed by mobile clients",
    ],
    metrics: [
      { icon: Rocket,  label: "Apps shipped", value: "10+" },
      { icon: Users,   label: "Active users",  value: "500+" },
      { icon: Server,  label: "APIs built",    value: "15+" },
    ],
    techs: ["Flutter", "Dart", "NestJS", "TypeScript", "Firebase", "Bloc", "Riverpod", "CI/CD", "Docker", "Git"],
    demo: "https://play.google.com/store/apps/details?id=com.zenifytrip.tunisiepromo.app",
    videoId: null as string | null,
  },
];

const MotionCard = motion.div;

const InternshipsSection = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section id="internships" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 55% 40% at 20% 30%, hsl(38 92% 50% / 0.07) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 35% at 85% 75%, hsl(27 96% 61% / 0.06) 0%, transparent 65%)",
          ].join(", "),
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
            <Briefcase className="h-4 w-4" />
            Professional Experience
          </span>
          <h2 className="font-display text-4xl font-bold mt-3 tracking-tight">Experience</h2>
          <div className="section-heading-line" />
        </motion.div>

        {/* Experience entries */}
        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, hsl(38 92% 50% / 0.6), hsl(38 92% 50% / 0.05))" }} />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-16"
              >
                {/* Timeline node */}
                <div className="absolute left-4 top-6 hidden md:flex items-center justify-center w-4 h-4 rounded-full border-2 border-violet bg-background -translate-x-1/2 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet" />
                  {exp.isCurrent && (
                    <span className="absolute -inset-1 rounded-full bg-violet/20 animate-ping" />
                  )}
                </div>

                <MotionCard
                  whileHover={{ y: -4, boxShadow: "0 24px 60px hsl(20 28% 3% / 0.7), 0 0 30px hsl(38 92% 50% / 0.1)" }}
                  className="group relative rounded-2xl border border-border/60 overflow-hidden transition-shadow duration-300"
                  style={{ background: "linear-gradient(135deg, hsl(243 22% 10%) 0%, hsl(245 20% 8%) 100%)" }}
                >
                  <div className="card-top-accent" />

                  {/* Left accent spine */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "var(--gradient-violet)" }}
                  />

                  <div className="p-6 space-y-5">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Logo */}
                      <div
                        className="shrink-0 w-14 h-14 rounded-xl border border-border/60 flex items-center justify-center overflow-hidden"
                        style={{ background: "hsl(245 20% 12%)" }}
                      >
                        <img
                          src={exp.logoUrl}
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 object-contain"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h3 className="font-display font-semibold text-lg text-foreground">{exp.company}</h3>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold text-emerald-400 border border-emerald-400/30 bg-emerald-400/8">
                              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-violet font-semibold text-sm">{exp.role}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="font-mono">{exp.period}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                          <span className="px-2 py-0.5 rounded-md border border-border/60 font-mono" style={{ background: "hsl(245 20% 12%)" }}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        {exp.videoId && (
                          <button
                            onClick={() => setActiveVideoId(exp.videoId)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground border border-border/50 hover:text-violet hover:border-violet/40 hover:bg-violet/5 transition-all duration-200"
                          >
                            <PlayCircle className="h-3.5 w-3.5" />
                            Demo
                          </button>
                        )}
                        {exp.demo && (
                          <a
                            href={exp.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-violet border border-violet/30 hover:bg-violet/10 hover:border-violet/50 transition-all duration-200"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            View App
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px" style={{ background: "var(--gradient-violet)", opacity: 0.12 }} />

                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                    {/* Highlights */}
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Key highlights</p>
                      <ul className="grid sm:grid-cols-2 gap-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-violet/70" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {exp.metrics.map((m) => {
                        const MetricIcon = m.icon;
                        return (
                          <div
                            key={m.label}
                            className="rounded-xl border border-border/50 p-3 text-center"
                            style={{ background: "hsl(245 20% 12%)" }}
                          >
                            <MetricIcon className="h-4 w-4 text-violet/70 mx-auto mb-1" />
                            <p className="font-display font-bold text-lg text-gradient leading-none">{m.value}</p>
                            <p className="text-[10px] text-muted-foreground/70 mt-0.5 font-mono tracking-wide">{m.label}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech chips */}
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Tech stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techs.map((tech) => (
                          <span key={tech} className="badge-tech">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-3 right-3 z-10 p-1.5 text-white/70 hover:text-white bg-black/50 rounded-lg backdrop-blur-sm transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Demo video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default InternshipsSection;
