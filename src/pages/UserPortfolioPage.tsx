import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Github, Phone, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  fetchRemotePortfolio,
  RemoteProfileNotFoundError,
  type RemotePortfolio,
} from "@/lib/portfolioApi";

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

  const { profile, skills, education, certifications, internships, projects } = state.data;
  const skillsByCategory = new Map<string, typeof skills>();
  for (const skill of skills) {
    const bucket = skillsByCategory.get(skill.category) ?? [];
    bucket.push(skill);
    skillsByCategory.set(skill.category, bucket);
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-16">
        <section className="text-center space-y-3">
          <Avatar className="mx-auto h-24 w-24">
            <AvatarImage src={profile.avatar_url ?? undefined} alt={profile.name} />
            <AvatarFallback className="text-2xl">{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
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

        {skills.length > 0 && (
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
        )}

        {internships.length > 0 && (
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
        )}

        {projects.length > 0 && (
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
        )}

        {education.length > 0 && (
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
        )}

        {certifications.length > 0 && (
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
        )}
      </div>
    </main>
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
