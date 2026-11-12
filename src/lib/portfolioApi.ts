export type ProfileTheme = "amber" | "violet" | "emerald" | "crimson" | "azure";

export type ProfileAnimation = "none" | "fade" | "particles" | "matrix";

export type SectionKey =
  | "skills"
  | "internships"
  | "projects"
  | "education"
  | "certifications";

export interface SectionConfigItem {
  key: SectionKey;
  visible: boolean;
}

const DEFAULT_SECTION_CONFIG: SectionConfigItem[] = [
  { key: "skills", visible: true },
  { key: "internships", visible: true },
  { key: "projects", visible: true },
  { key: "education", visible: true },
  { key: "certifications", visible: true },
];

export interface RemoteProfile {
  name: string;
  title: string;
  tagline: string | null;
  bio: string | null;
  phone: string | null;
  avatar_url: string | null;
  resume_url: string | null;
  theme?: ProfileTheme;
  section_config?: SectionConfigItem[];
  animation?: ProfileAnimation;
}

export interface RemoteSkill {
  id: string;
  category: string;
  subject: string;
  level: number;
}

export interface RemoteEducation {
  id: string;
  institution: string;
  degree: string;
  period: string | null;
  description: string | null;
}

export interface RemoteCertification {
  id: string;
  name: string;
  issuer: string;
  date: string | null;
  url: string | null;
}

export interface RemoteInternship {
  id: string;
  company: string;
  role: string;
  period: string | null;
  description: string | null;
  highlights: string[];
  techs: string[];
}

export interface RemoteProject {
  id: string;
  title: string;
  description: string | null;
  technologies: string[];
  status: string | null;
  github_url: string | null;
  app_store_url: string | null;
  play_store_url: string | null;
  image_url: string | null;
}

export interface RemotePortfolio {
  profile: RemoteProfile;
  skills: RemoteSkill[];
  education: RemoteEducation[];
  certifications: RemoteCertification[];
  internships: RemoteInternship[];
  projects: RemoteProject[];
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://portfolio-api-l4on.onrender.com";

export function resolveTheme(profile: RemoteProfile): ProfileTheme {
  return profile.theme ?? "amber";
}

export function resolveSectionConfig(profile: RemoteProfile): SectionConfigItem[] {
  return profile.section_config && profile.section_config.length > 0
    ? profile.section_config
    : DEFAULT_SECTION_CONFIG;
}

export function resolveAnimation(profile: RemoteProfile): ProfileAnimation {
  return profile.animation ?? "none";
}

export class RemoteProfileNotFoundError extends Error {
  constructor(username: string) {
    super(`No profile found for username "${username}"`);
  }
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) throw new Error(`Request to ${path} failed with ${response.status}`);
  return response.json() as Promise<T>;
}

/** Fetches everything needed to render one user's public portfolio page (the
 * /u/:username route). Unrelated to this site's own static home page. */
export async function fetchRemotePortfolio(username: string): Promise<RemotePortfolio> {
  let profile: RemoteProfile;
  try {
    profile = await getJson<RemoteProfile>(`/u/${username}/profile`);
  } catch {
    throw new RemoteProfileNotFoundError(username);
  }

  const [skills, education, certifications, internships, projects] = await Promise.all([
    getJson<RemoteSkill[]>(`/u/${username}/skills`),
    getJson<RemoteEducation[]>(`/u/${username}/education`),
    getJson<RemoteCertification[]>(`/u/${username}/certifications`),
    getJson<RemoteInternship[]>(`/u/${username}/internships`),
    getJson<RemoteProject[]>(`/u/${username}/projects`),
  ]);

  return { profile, skills, education, certifications, internships, projects };
}
