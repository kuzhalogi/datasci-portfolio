export type Category = 'All' | 'Machine Learning' | 'Computer Vision' | 'Data Analytics' | 'Data Engineering';

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
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}