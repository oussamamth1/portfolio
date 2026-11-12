import { useEffect, useState, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Phone, FileText, Mail, BarChart3 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import MatrixBackground from "@/components/portfolio/MatrixBackground";
import useMouseTilt from "@/hooks/useMouseTilt";
import {
  fetchRemotePortfolio,
  resolveAnimation,
  resolveAvatarSize,
  resolveSectionConfig,
  resolveTextSize,
  resolveTheme,
  RemoteProfileNotFoundError,
  type RemotePortfolio,
  type SectionKey,
} from "@/lib/portfolioApi";

const AVATAR_SIZE_CLASSES: Record<string, string> = {
  small: "h-16 w-16",
  medium: "h-24 w-24",
  large: "h-32 w-32",
};

const TEXT_ZOOM: Record<string, number> = {
  small: 0.9,
  medium: 1,
  large: 1.15,
};

type LoadState =
  | { status: "loading" }
  | { status: "notFound" }
  | { status: "error"; message: string }
  | { status: "ready"; data: RemotePortfolio };

/**
 * Public portfolio page for any signed-up user, reachable at /u/:username.
 * This is the dynamic, multi-tenant counterpart to the static home page (/) —
 * it has its own layout and does not reuse or modify the existing
 * PortfolioLayout/section components, which stay untouched.
 */
export default function UserPortfolioPage() {
  const { username } = useParams<{ username: string }>();
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const prefersReduced = useReducedMotion();
  const animation = state.status === "ready" ? resolveAnimation(state.data.profile) : "none";
  const fadeEnabled = animation === "fade";
  const tiltEnabled = animation === "tilt";
  const avatarSize =
    state.status === "ready" ? resolveAvatarSize(state.data.profile) : "medium";
  const textZoom =
    state.status === "ready" ? TEXT_ZOOM[resolveTextSize(state.data.profile)] : 1;

  useEffect(() => {
    if (!username) return;
    setState({ status: "loading" });
    fetchRemotePortfolio(username)
      .then((data) => {
        document.title = `${data.profile.name} | ${data.profile.title}`;
        setState({ status: "ready", data });
      })
      .catch((err) => {
        if (err instanceof RemoteProfileNotFoundError) {
          setState({ status: "notFound" });
        } else {
          setState({ status: "error", message: String(err) });
        }
      });
  }, [username]);

  if (state.status === "loading") {
    return <CenteredMessage>Loading…</CenteredMessage>;
  }
  if (state.status === "notFound") {
    return <CenteredMessage>No portfolio found for "{username}".</CenteredMessage>;
  }
  if (state.status === "error") {
    return <CenteredMessage>Something went wrong: {state.message}</CenteredMessage>;
  }

  const { profile, skills, education, certifications, internships, projects, languages } =
    state.data;
  const skillsByCategory = new Map<string, typeof skills>();
  for (const skill of skills) {
    const bucket = skillsByCategory.get(skill.category) ?? [];
    bucket.push(skill);
    skillsByCategory.set(skill.category, bucket);
  }

  const sectionRenderers: Partial<Record<SectionKey, React.ReactNode>> = {
    skills: skills.length > 0 && (
      <FadeIn key="skills" enabled={fadeEnabled} prefersReduced={prefersReduced}>
      <Section title="Skills">
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from(skillsByCategory.entries()).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground">{category}</h3>
              {items.map((skill) => (
                <div key={skill.id} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{skill.subject}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>
      </FadeIn>
    ),
    internships: internships.length > 0 && (
      <FadeIn key="internships" enabled={fadeEnabled} prefersReduced={prefersReduced}>
      <Section title="Experience">
        <div className="space-y-4">
          {internships.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex items-baseline justify-between gap-4">
                  <CardTitle className="text-base">
                    {job.role} · {job.company}
                  </CardTitle>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {job.description && <p className="text-sm">{job.description}</p>}
                {job.highlights.length > 0 && (
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                {job.techs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {job.techs.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      </FadeIn>
    ),
    projects: projects.length > 0 && (
      <FadeIn key="projects" enabled={fadeEnabled} prefersReduced={prefersReduced}>
      <Section title="Projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id}>
              {project.image_url && (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="h-40 w-full rounded-t-lg object-cover"
                />
              )}
              <CardHeader>
                <CardTitle className="text-base">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.description && <p className="text-sm">{project.description}</p>}
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 pt-1">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      </FadeIn>
    ),
    education: education.length > 0 && (
      <FadeIn key="education" enabled={fadeEnabled} prefersReduced={prefersReduced}>
      <Section title="Education">
        <div className="space-y-4">
          {education.map((entry) => (
            <Card key={entry.id}>
              <CardHeader>
                <div className="flex items-baseline justify-between gap-4">
                  <CardTitle className="text-base">{entry.institution}</CardTitle>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {entry.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{entry.degree}</p>
                {entry.description && (
                  <p className="text-sm text-muted-foreground mt-1">{entry.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      </FadeIn>
    ),
    certifications: certifications.length > 0 && (
      <FadeIn key="certifications" enabled={fadeEnabled} prefersReduced={prefersReduced}>
      <Section title="Certifications">
        <div className="space-y-4">
          {certifications.map((cert) => (
            <Card key={cert.id}>
              <CardHeader>
                <div className="flex items-baseline justify-between gap-4">
                  <CardTitle className="text-base">{cert.name}</CardTitle>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary"
                  >
                    View credential
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      </FadeIn>
    ),
    languages: languages.length > 0 && (
      <FadeIn key="languages" enabled={fadeEnabled} prefersReduced={prefersReduced}>
      <Section title="Languages">
        <div className="grid gap-4 sm:grid-cols-2">
          {languages.map((lang) => (
            <div key={lang.id} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{lang.language}</span>
                <span className="text-muted-foreground">{lang.level}%</span>
              </div>
              <Progress value={lang.level} className="h-2" />
            </div>
          ))}
        </div>
      </Section>
      </FadeIn>
    ),
    stats: (
      <FadeIn key="stats" enabled={fadeEnabled} prefersReduced={prefersReduced}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Projects", value: projects.length },
            { label: "Skills", value: skills.length },
            { label: "Certifications", value: certifications.length },
            { label: "Experience", value: internships.length },
          ]
            .filter((stat) => stat.value > 0)
            .map((stat) => (
              <Card key={stat.label}>
                <CardContent className="flex flex-col items-center justify-center gap-1 p-4 text-center">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="font-display text-2xl font-bold">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
        </div>
      </FadeIn>
    ),
    contact: (profile.email || profile.phone) && (
      <FadeIn key="contact" enabled={fadeEnabled} prefersReduced={prefersReduced}>
      <Section title="Contact">
        <div className="flex flex-wrap items-center gap-4">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
          )}
          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <Phone className="h-4 w-4" /> {profile.phone}
            </a>
          )}
        </div>
      </Section>
      </FadeIn>
    ),
  };

  const orderedSections = resolveSectionConfig(profile)
    .filter((entry) => entry.visible)
    .map((entry) => sectionRenderers[entry.key])
    .filter(Boolean);

  return (
    <main
      className={`theme-${resolveTheme(profile)} relative min-h-screen overflow-hidden bg-background text-foreground px-4 py-16`}
      style={{ zoom: textZoom }}
    >
      {animation === "particles" && <ParticleBackground />}
      {animation === "matrix" && <MatrixBackground />}

      <div className="relative z-10 mx-auto max-w-3xl space-y-16">
        {profile.cover_enabled && profile.cover_url && (
          <img
            src={profile.cover_url}
            alt=""
            aria-hidden="true"
            className="h-40 w-full rounded-xl object-cover sm:h-56"
          />
        )}

        <FadeIn enabled={fadeEnabled} prefersReduced={prefersReduced}>
          <section className="text-center space-y-3">
            <TiltWrapper enabled={tiltEnabled}>
              <Avatar className={`mx-auto ${AVATAR_SIZE_CLASSES[avatarSize]}`}>
                <AvatarImage src={profile.avatar_url ?? undefined} alt={profile.name} />
                <AvatarFallback className="text-2xl">{profile.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </TiltWrapper>
            <h1 className="font-display text-4xl font-bold">{profile.name}</h1>
            <p className="text-lg text-primary font-medium">{profile.title}</p>
            {profile.tagline && <p className="text-muted-foreground">{profile.tagline}</p>}
            {profile.bio && (
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
                {profile.bio}
              </p>
            )}
            <div className="flex items-center justify-center gap-4 pt-2">
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" /> {profile.phone}
                </a>
              )}
              {profile.resume_url && (
                <a
                  href={profile.resume_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
              )}
            </div>
          </section>
        </FadeIn>

        {orderedSections}
      </div>
    </main>
  );
}

function FadeIn({
  enabled,
  prefersReduced,
  children,
}: {
  enabled: boolean;
  prefersReduced: boolean | null;
  children: ReactNode;
}) {
  if (!enabled) return <>{children}</>;

  const variants = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

function TiltWrapper({ enabled, children }: { enabled: boolean; children: ReactNode }) {
  const { ref, tilt, onMouseMove, onMouseLeave } = useMouseTilt(12);

  if (!enabled) return <>{children}</>;

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-block [transform-style:preserve-3d]"
      style={{
        transform: `perspective(600px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-display text-xl font-semibold">{title}</h2>
        <Separator />
      </div>
      {children}
    </section>
  );
}

function CenteredMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}
