import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Briefcase,
  Github,
  ExternalLink,
  Shield,
  PlayCircle,
  Smartphone,
} from "lucide-react";

// Apple logo SVG
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// Google Play logo SVG
const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
    <path d="M3.18 23.76c.3.17.64.22.99.14l12.45-7.2-2.73-2.73-10.71 9.79zM.75 1.5C.28 1.84 0 2.4 0 3.09v17.82c0 .69.28 1.25.75 1.59l.09.08 9.99-9.99v-.23L.84 1.42l-.09.08zM21.75 10.5l-2.7-1.56-3.03 3.03 3.03 3.03 2.73-1.59c.78-.45.78-1.47-.03-1.91zM3.18.24L15.63 7.44l-2.73 2.73L.75.38C1.05.21 1.47.14 3.18.24z"/>
  </svg>
);

const ProjectsSection = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const projects = [
    {
      title: "Sunshine Vacances",
      company: "Zenify",
      period: "2024–2025",
      location: "Tunisia",
      description:
        "Full travel app for booking holidays, excursions, transfers and hotel packages. Cross-platform Flutter app with Firebase backend, real-time features and CI/CD delivery.",
      icon: Briefcase,
      category: "Mobile (Flutter)",
      technologies: ["Flutter", "Dart", "Firebase", "Socket.IO", "REST API", "FCM", "CI/CD"],
      highlights: [
        "Published on both App Store (iOS) and Google Play (Android)",
        "Real-time communication and booking confirmation flows",
        "Cross-platform: Android, iOS, Web",
        "Push notifications with Firebase Cloud Messaging",
      ],
      status: "Published",
      github: "",
      appStore: "https://apps.apple.com/il/app/sunshine-vacances/id6761716491",
      playStore: "https://play.google.com/store/apps/details?id=com.zenifytrip.sunshinevacances.app",
      imageUrl: "/sunshine_with_qr_code.png",
      portrait: true,
    },
    {
      title: "Tunisie Promo: Deals & Voyage",
      company: "Zenify",
      period: "2025–2026",
      location: "Tunisia",
      description:
        "All-in-one travel deals app to book hotels, trips, excursions, transfers and car rentals at the best prices. Built with Flutter and integrated with Firebase services and REST APIs.",
      icon: Briefcase,
      category: "Mobile (Flutter)",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "FCM", "Bloc", "Riverpod"],
      highlights: [
        "Published on both App Store (iOS) and Google Play (Android)",
        "Push notifications with Firebase Cloud Messaging",
        "Booking flows with discounts, passengers counts, and statuses",
        "State management with Bloc/Riverpod",
      ],
      status: "Published",
      github: "",
      appStore: "https://apps.apple.com/us/app/tunisie-promo-deals-voyage/id6758765132",
      playStore: "https://play.google.com/store/apps/details?id=com.zenifytrip.tunisiepromo.app",
      imageUrl: "/tunisiepromo_with_qr_code.png",
      portrait: true,
    },
    {
      title: "Zenify Client App",
      company: "Zenify",
      period: "2024–2025",
      location: "Tunisia",
      description:
        "Customer-facing booking app for promotions and travel packages. Focused on smooth UX, scalable state management and reliable NestJS backend integration.",
      icon: Shield,
      category: "Mobile (Flutter)",
      technologies: ["Flutter", "Bloc", "Riverpod", "Provider", "NestJS", "Firebase"],
      highlights: [
        "Published on Google Play Store",
        "State management with Bloc/Riverpod/Provider",
        "NestJS backend API integration",
        "Real-time booking status updates",
      ],
      status: "Published",
      github: "",
      appStore: "",
      playStore: "https://play.google.com/store/apps/details?id=com.zenifytrip.client",
      imageUrl: "/tunisiepromo.jpg",
      portrait: false,
    },
    {
      title: "Zenify Guide",
      company: "Zenify",
      period: "2024–2025",
      location: "Tunisia",
      description:
        "Travel guide companion app for Zenify trips. Provides itinerary details, destination info, and real-time updates for travellers on tour.",
      icon: Smartphone,
      category: "Mobile (Flutter)",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "FCM"],
      highlights: [
        "Published on Google Play Store",
        "Real-time itinerary and trip updates",
        "Push notifications for trip alerts",
      ],
      status: "Published",
      github: "",
      appStore: "",
      playStore: "https://play.google.com/store/apps/details?id=com.zenifytrip.guide.android",
      imageUrl: "",
      portrait: false,
    },
    {
      title: "Facturation — Invoicing App",
      company: "Personal / Freelance",
      period: "2025",
      location: "Tunisia",
      description:
        "Full-stack invoicing and job-tracking mobile app for small service businesses (HVAC, etc.), built entirely with Flutter and Firebase. Developed end-to-end using Claude Code (AI-assisted workflow) — from architecture to release APK.",
      icon: Briefcase,
      category: "Mobile (Flutter)",
      technologies: ["Flutter", "Dart", "Firebase", "Riverpod", "Claude Code (AI)", "PDF Generation"],
      highlights: [
        "Built end-to-end with AI-assisted development (Claude Code)",
        "PDF invoice generation with company logo embedding",
        "Firestore real-time sync, auth, and multi-user data isolation",
        "Signed release APK with Gradle & dependency management",
      ],
      status: "In Progress",
      github: "",
      appStore: "",
      playStore: "",
      imageUrl: "",
      portrait: false,
    },
  ];

  const statusVariant = (status: string) => {
    if (status === "Completed") return "default" as const;
    if (status === "In Progress") return "secondary" as const;
    return "outline" as const;
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Briefcase className="h-6 w-6" />
            <span className="text-sm uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of mobile projects delivered with Flutter, NestJS, Firebase and CI/CD.
          </p>
        </div>

        {/* Grid – one project per row */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border/70 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden"
            >
              {/* subtle top gradient */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary/0 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Card body — side-by-side for portrait images, stacked otherwise */}
              <div className={`flex ${project.imageUrl && project.portrait ? "flex-col md:flex-row" : "flex-col"}`}>

                {/* ── Content column ── */}
                <div className="flex-1 min-w-0">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{project.category}</Badge>
                            <Badge variant={statusVariant(project.status)} className="text-[11px]">{project.status}</Badge>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs md:text-sm text-muted-foreground">
                          {project.company && <p>{project.company}</p>}
                          {project.period && (<><span className="h-1 w-1 rounded-full bg-muted-foreground/60" /><p>{project.period}</p></>)}
                          {project.location && (<><span className="h-1 w-1 rounded-full bg-muted-foreground/60" /><p>{project.location}</p></>)}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5 pt-0">
                    {/* Landscape image — full width above description */}
                    {project.imageUrl && !project.portrait && (
                      <div className="relative rounded-xl overflow-hidden border border-border/60 bg-muted/40">
                        <img
                          src={project.imageUrl}
                          alt={`${project.title} preview`}
                          className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Preview</span>
                        </div>
                      </div>
                    )}

                    <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {project.highlights.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground text-sm">Key highlights</h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-xs md:text-sm text-muted-foreground flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.technologies.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground text-sm">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-[11px] px-2 py-0.5">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    {(project.github || project.appStore || project.playStore || project.videoId) && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60 mt-1">
                    {project.appStore && project.appStore.trim() !== "" && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2 border-border/70 hover:border-violet/40 hover:text-violet hover:bg-violet/5"
                      >
                        <a href={project.appStore} target="_blank" rel="noreferrer">
                          <AppleIcon />
                          <span>App Store</span>
                        </a>
                      </Button>
                    )}

                    {project.playStore && project.playStore.trim() !== "" && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="gap-2 border-border/70 hover:border-violet/40 hover:text-violet hover:bg-violet/5"
                      >
                        <a href={project.playStore} target="_blank" rel="noreferrer">
                          <PlayStoreIcon />
                          <span>Play Store</span>
                        </a>
                      </Button>
                    )}

                    {project.github && project.github.trim() !== "" && (
                      <Button variant="outline" size="sm" asChild className="gap-2">
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                          <span>Source Code</span>
                        </a>
                      </Button>
                    )}

                    {project.videoId && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-2"
                        onClick={() => setActiveVideoId(project.videoId as string)}
                      >
                        <PlayCircle className="h-4 w-4" />
                        <span>Watch Demo</span>
                      </Button>
                    )}
                      </div>
                    )}
                  </CardContent>
                </div>

                {/* ── Portrait image side panel ── */}
                {project.imageUrl && project.portrait && (
                  <div className="md:w-56 shrink-0 flex items-center justify-center p-4 border-t md:border-t-0 md:border-l border-border/40 bg-surface-elevated/20 relative">
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] text-white backdrop-blur-sm z-10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Preview</span>
                    </div>
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                      className="w-full h-auto max-h-80 object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500 drop-shadow-xl"
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Video modal (same behavior as internships, click outside to close) */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute -top-10 right-0 text-sm text-white/80 hover:text-white px-3 py-1 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm"
            >
              Close
            </button>

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Project demo video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;