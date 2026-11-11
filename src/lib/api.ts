const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export interface ProfileContent {
  name: string;
  title: string;
  tagline: string | null;
  bio: string | null;
  phone: string | null;
  avatar_url: string | null;
  resume_url: string | null;
}

export interface SkillContent {
  id: string;
  category: string;
  icon_key: string | null;
  subject: string;
  level: number;
  sort_order: number;
}

export interface EducationContent {
  id: string;
  institution: string;
  degree: string;
  location: string | null;
  period: string | null;
  status: string | null;
  description: string | null;
  coursework: string[];
  achievements: string[];
  sort_order: number;
}

export interface CertificationContent {
  id: string;
  name: string;
  issuer: string;
  date: string | null;
  status: string | null;
  credential_id: string | null;
  description: string | null;
  skills: string[];
  url: string | null;
  sort_order: number;
}

export interface InternshipContent {
  id: string;
  company: string;
  role: string;
  period: string | null;
  location: string | null;
  type: string | null;
  is_current: boolean;
  description: string | null;
  highlights: string[];
  techs: string[];
  logo_url: string | null;
  demo_url: string | null;
  video_id: string | null;
  sort_order: number;
}

export interface ProjectContent {
  id: string;
  title: string;
  company: string | null;
  period: string | null;
  location: string | null;
  description: string | null;
  icon_key: string | null;
  category: string | null;
  technologies: string[];
  highlights: string[];
  status: string | null;
  github_url: string | null;
  app_store_url: string | null;
  play_store_url: string | null;
  video_id: string | null;
  image_url: string | null;
  portrait: boolean;
  sort_order: number;
}

export const getProfile = () => getJson<ProfileContent>("/profile");
export const getSkills = () => getJson<SkillContent[]>("/skills");
export const getEducation = () => getJson<EducationContent[]>("/education");
export const getCertifications = () => getJson<CertificationContent[]>("/certifications");
export const getInternships = () => getJson<InternshipContent[]>("/internships");
export const getProjects = () => getJson<ProjectContent[]>("/projects");
