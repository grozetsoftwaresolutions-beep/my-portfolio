export interface SystemArchitecture {
  overview: string;
  marketNeed?: string;
  operatingModel?: {
    title: string;
    details: string[];
  };
  modules?: {
    name: string;
    description: string;
  }[];
  techSpecs?: {
    layer: string;
    details: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  is3dShowcase?: boolean;
  coDeveloped?: boolean;
  image?: string;
  systemArchitecture?: SystemArchitecture;
  howITestedIt: {
    scenarios: string[];
    summary: string;
  };
}

export interface SkillCategory {
  title: string;
  id: string;
  description: string;
  skills: string[];
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  badge?: string;
  stack?: string;
  liveUrl?: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  highlights?: string;
}

export interface Course {
  title: string;
  instructor: string;
  platform: string;
  url: string;
  period?: string;
  description: string;
  topics: string[];
}

