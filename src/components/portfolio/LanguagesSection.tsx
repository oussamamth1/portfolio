import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Languages,
  Globe,
  BookOpen,
  ArrowUpNarrowWideIcon,
  Shield,
} from "lucide-react";

const LanguagesSection = () => {
  const skills = [
    "Flutter",
    "Dart",
    "TypeScript",
    "NestJS",
    "REST APIs",
    "Firebase",
    "Firestore",
    "Realtime Database",
    "Firebase Cloud Messaging (FCM)",
    "Crashlytics",
    "Analytics",
    "Firebase App Distribution",
    "Bloc",
    "Riverpod",
    "Provider",
    "Git",
    "CI/CD",
    "GitHub Actions",
    "GitLab CI",
    "Docker",
    "Mobile UI/UX Design",
    "Figma",
    "Android Studio",
    "Xcode",
  ];

  return (
    <section id="languages" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <ArrowUpNarrowWideIcon className="h-6 w-6" />
            <span className="text-sm uppercase tracking-wide">Skills</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Technical Skills & Growth</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My core toolkit for building and shipping production mobile apps.
          </p>
        </div>

        {/* Main layout: skills cloud + growth card */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          {/* Core skills */}
          <Card className="bg-card border-border/70">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg md:text-xl">
                    Core technical toolkit
                  </CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Languages, frameworks and tools I use daily to build
                    production-ready systems.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs md:text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ongoing learning / skills growth */}
          <Card className="bg-gradient-to-br from-primary/10 via-card to-secondary/20 border-primary/30 shadow-lg shadow-primary/10">
            <CardContent className="py-6 px-5 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-primary/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-primary mb-1">
                    Currently growing
                  </p>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">
                    Continuous improvement
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    I keep improving my engineering practices around performance,
                    clean architecture, and delivery automation to ship reliable
                    applications end-to-end.
                  </p>
                </div>
              </div>

              {/* Two mini tracks: DevSecOps & AI */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Delivery track */}
                <div className="rounded-lg border border-primary/30 bg-background/40 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-primary/15">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Delivery track
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Faster, safer releases with automation.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      CI/CD
                    </Badge>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      App Distribution
                    </Badge>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      Testing pipelines
                    </Badge>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      Release management
                    </Badge>
                  </div>
                </div>

                {/* Mobile architecture track */}
                <div className="rounded-lg border border-primary/30 bg-background/40 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-primary/15">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Mobile architecture
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Building scalable, maintainable apps.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      Clean Architecture
                    </Badge>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      State management
                    </Badge>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      Performance
                    </Badge>
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      Offline & realtime
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Small footer line */}
              <p className="text-[11px] text-muted-foreground mt-1">
                This directly reinforces my work on production-ready mobile apps.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
