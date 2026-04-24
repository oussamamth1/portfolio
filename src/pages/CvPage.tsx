import { useEffect } from "react";
import {
  Mail, Phone, MapPin, Github, Linkedin, Globe,
  Briefcase, GraduationCap, Code2, Printer, ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const skills = {
  "Mobile": ["Flutter", "Dart", "iOS", "Android", "Widget Dev"],
  "State Mgmt": ["BLoC", "Riverpod", "Provider"],
  "Backend": ["NestJS", "REST APIs", "Node.js"],
  "Firebase": ["FCM", "Firestore", "Auth", "Crashlytics", "Analytics", "App Distribution"],
  "DevOps": ["GitHub Actions", "GitLab CI", "CI/CD Pipelines"],
  "Tools": ["Git", "Postman", "Figma", "VS Code"],
};

const experience = [
  {
    role: "Mobile Developer",
    company: "Continuous Net",
    period: "2022 — 2026",
    location: "Tunisia",
    bullets: [
      "Designed and developed high-performance Android/iOS apps with Flutter, from architecture to App Store deployment.",
      "Built and maintained RESTful APIs with NestJS ensuring security and scalability.",
      "Set up automated CI/CD pipelines (GitHub Actions / GitLab CI) with Firebase App Distribution for rapid tester delivery.",
      "Integrated Firebase Cloud Messaging (FCM) for advanced push notification management (topics, individual tokens).",
      "Leveraged Firebase Auth, Firestore, Crashlytics and Analytics to enrich UX and ensure quality.",
      "Collaborated with cross-functional teams (product, design, QA) to ship innovative solutions.",
    ],
  },
];

const education = [
  {
    degree: "Master — Software Engineering & Rapid Application Development",
    school: "Université ISET",
    period: "2017 — 2022",
  },
  {
    degree: "Licence en Technologie",
    school: "Salem Ben Hmida Université",
    period: "2012 — 2016",
  },
];

const projects = [
  { name: "Sunshine", tech: "Flutter · Firebase · NestJS", desc: "Production mobile app — published on Google Play & App Store." },
  { name: "Zenify Trip", tech: "Flutter · Firebase", desc: "Travel mobile application with real-time features." },
  { name: "BITin", tech: "Flutter · REST API", desc: "Mobile app with complex state management using BLoC." },
];

const languages = [
  { lang: "Arabic", level: "Native" },
  { lang: "French", level: "Professional" },
  { lang: "English", level: "Professional" },
];

const CvPage = () => {
  useEffect(() => {
    document.title = "CV — Oussama Methnani";
  }, []);

  return (
    <>
      {/* ── Print / nav toolbar — hidden on print ── */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-surface-card border-b border-border/50 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet text-white text-sm font-semibold hover:bg-violet-bright transition-all shadow-glow"
        >
          <Printer className="h-4 w-4" />
          Save as PDF
        </button>
      </div>

      {/* ── CV Sheet ── */}
      <div className="cv-page min-h-screen pt-16 pb-12 px-4 bg-background no-print-padding">
        <div className="cv-sheet max-w-[860px] mx-auto bg-white text-gray-900 shadow-2xl rounded-2xl overflow-hidden print:rounded-none print:shadow-none">

          {/* ══ Header ══ */}
          <div className="cv-header relative px-10 py-10 overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(240 25% 10%) 0%, hsl(262 50% 18%) 100%)" }}>
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />

            <div className="relative flex flex-col md:flex-row md:items-center gap-6">
              {/* Photo */}
              <img
                src="/oussama-hero.png"
                alt="Oussama Methnani"
                className="w-24 h-24 rounded-2xl object-cover border-2 shrink-0"
                style={{ borderColor: "hsl(262 83% 68% / 0.5)" }}
              />

              <div className="flex-1">
                <h1 className="text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Oussama Methnani
                </h1>
                <p className="text-lg font-medium mt-0.5" style={{ color: "hsl(262 83% 78%)" }}>
                  Mobile Developer — Flutter & NestJS
                </p>
                <p className="text-sm text-gray-300 mt-2 max-w-lg leading-relaxed">
                  Passionate mobile developer with 4+ years shipping production apps to Google Play and App Store.
                  Expert in Flutter architecture, Firebase ecosystem, and CI/CD automation.
                </p>
              </div>

              {/* Contact chips */}
              <div className="flex flex-col gap-2 shrink-0 text-sm">
                {[
                  { icon: Phone, text: "+216 20-640-783", href: "tel:+21620640783" },
                  { icon: Mail, text: "oussamamethnani321@gmail.com", href: "mailto:oussamamethnani321@gmail.com" },
                  { icon: MapPin, text: "Akouda, Sousse, Tunisia", href: null },
                  { icon: Github, text: "github.com/oussamamth1", href: "https://github.com/oussamamth1" },
                  { icon: Linkedin, text: "linkedin.com/in/oussama-methnani", href: "https://linkedin.com/in/oussama-methnani-bb4145206" },
                  { icon: Globe, text: "oussamamth1.github.io", href: "https://oussamamth1.github.io/oussama-methnani.github.io/" },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-2 text-gray-300">
                    <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: "hsl(262 83% 78%)" }} />
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors truncate" style={{ fontSize: "0.75rem" }}>{text}</a>
                    ) : (
                      <span style={{ fontSize: "0.75rem" }}>{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ Body ══ */}
          <div className="cv-body grid md:grid-cols-[1fr_260px] gap-0">

            {/* ── Left column ── */}
            <div className="px-10 py-8 space-y-8 border-r border-gray-100">

              {/* Experience */}
              <section>
                <SectionTitle icon={<Briefcase className="h-4 w-4" />} title="Experience" />
                {experience.map((job) => (
                  <div key={job.role} className="mt-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{job.role}</h3>
                        <p className="text-sm font-medium" style={{ color: "hsl(262 60% 50%)" }}>{job.company} · {job.location}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-400 shrink-0 mt-0.5 bg-gray-50 px-2 py-1 rounded-md">{job.period}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(262 83% 68%)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Projects */}
              <section>
                <SectionTitle icon={<Code2 className="h-4 w-4" />} title="Projects" />
                <div className="mt-4 grid gap-3">
                  {projects.map((p) => (
                    <div key={p.name} className="p-3 rounded-xl border border-gray-100 bg-gray-50/60">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full text-white" style={{ background: "hsl(262 60% 55%)" }}>{p.tech}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 leading-snug">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <SectionTitle icon={<GraduationCap className="h-4 w-4" />} title="Education" />
                <div className="mt-4 space-y-4">
                  {education.map((e) => (
                    <div key={e.degree} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900 leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{e.degree}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{e.school}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-400 shrink-0 bg-gray-50 px-2 py-1 rounded-md">{e.period}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ── Right sidebar ── */}
            <div className="px-7 py-8 space-y-8 bg-gray-50/60">

              {/* Skills */}
              <section>
                <SectionTitle icon={<Code2 className="h-4 w-4" />} title="Skills" />
                <div className="mt-4 space-y-4">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-gray-400 mb-1.5">{category}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-0.5 rounded-md font-medium"
                            style={{ background: "hsl(262 60% 96%)", color: "hsl(262 60% 45%)", border: "1px solid hsl(262 60% 88%)" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section>
                <SectionTitle icon={<Globe className="h-4 w-4" />} title="Languages" />
                <div className="mt-4 space-y-2">
                  {languages.map(({ lang, level }) => (
                    <div key={lang} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{lang}</span>
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                        style={{ background: "hsl(262 60% 96%)", color: "hsl(262 60% 45%)" }}
                      >
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reference */}
              <section>
                <SectionTitle icon={<Briefcase className="h-4 w-4" />} title="Reference" />
                <div className="mt-4 p-3 rounded-xl border border-gray-100 bg-white">
                  <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ihsen Mhathbi</p>
                  <p className="text-xs text-gray-500 mt-0.5">Continuous Net</p>
                  <a href="mailto:ihsen-Mhathbi@gmail.com" className="text-xs mt-1 block" style={{ color: "hsl(262 60% 50%)" }}>
                    ihsen-Mhathbi@gmail.com
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">+216 29-380-781</p>
                </div>
              </section>
            </div>
          </div>

          {/* ══ Footer ══ */}
          <div className="px-10 py-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] font-mono text-gray-300">oussamamth1.github.io/oussama-methnani.github.io</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(262 83% 68%)" }} />
              <span className="text-[10px] font-mono text-gray-300">Oussama Methnani · 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Print styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .cv-sheet * { font-family: 'Inter', sans-serif; }

        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          .cv-page { padding: 0 !important; background: white !important; }
          .cv-sheet {
            max-width: 100% !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
          }
          @page { size: A4; margin: 0; }

          /* ── Header ── */
          .cv-header { padding: 10px 22px !important; }
          .cv-header > div { gap: 10px !important; align-items: center !important; }
          .cv-header img { width: 44px !important; height: 44px !important; min-width: 44px !important; }
          .cv-header h1 { font-size: 16px !important; line-height: 1.2 !important; }
          .cv-header p { font-size: 10px !important; margin-top: 1px !important; }
          .cv-header > div > div:last-child { gap: 2px !important; }
          .cv-header svg { width: 9px !important; height: 9px !important; }

          /* ── Body columns ── */
          .cv-body > div:first-child { padding: 7px 14px !important; }
          .cv-body > div:last-child  { padding: 7px 10px !important; }

          /* space-y overrides */
          .cv-body .space-y-8 > * + * { margin-top: 9px !important; }
          .cv-body .space-y-4 > * + * { margin-top: 6px !important; }
          .cv-body .space-y-3 > * + * { margin-top: 5px !important; }
          .cv-body .space-y-2 > * + * { margin-top: 3px !important; }
          .cv-body .space-y-1\\.5 > * + * { margin-top: 2px !important; }

          /* gap / mt / p overrides */
          .cv-body .gap-3   { gap: 4px !important; }
          .cv-body .gap-2   { gap: 3px !important; }
          .cv-body .gap-2\\.5 { gap: 3px !important; }
          .cv-body .mt-4    { margin-top: 5px !important; }
          .cv-body .mt-3    { margin-top: 4px !important; }
          .cv-body .mt-2    { margin-top: 2px !important; }
          .cv-body .mt-1    { margin-top: 1px !important; }
          .cv-body .mt-0\\.5 { margin-top: 1px !important; }
          .cv-body .mt-1\\.5 { margin-top: 2px !important; }
          .cv-body .p-3     { padding: 4px 6px !important; }
          .cv-body .pb-2    { padding-bottom: 3px !important; }
          .cv-body .mb-1\\.5 { margin-bottom: 2px !important; }

          /* Text sizes */
          .cv-body .text-sm  { font-size: 9.5px !important; line-height: 1.3 !important; }
          .cv-body .text-xs  { font-size: 8.5px !important; line-height: 1.3 !important; }
          .cv-body h2 { font-size: 8.5px !important; }
          .cv-body h3 { font-size: 9.5px !important; }
          .cv-body li { line-height: 1.25 !important; }

          /* Footer */
          .cv-sheet > div:last-child { padding: 3px 14px !important; }
        }
      `}</style>
    </>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
    <span style={{ color: "hsl(262 60% 55%)" }}>{icon}</span>
    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {title}
    </h2>
  </div>
);

export default CvPage;
