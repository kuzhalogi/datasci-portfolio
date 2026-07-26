export type Category = 'All' | 'Machine Learning' | 'Computer Vision' | 'Data Analytics' | 'Data Engineering' | 'Cloud & MLOps';

export interface Project {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  features?: string[];
  challenges?: string;
  myRole?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export interface Language {
  name: string;
  level: string;
}
