export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
  image?: string;
  longDescription?: string;
  keyFeatures?: string[];
  metrics?: { label: string; value: string }[];
  architectureOverview?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  detail: string;
}

export interface Extracurricular {
  category: string;
  description: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

