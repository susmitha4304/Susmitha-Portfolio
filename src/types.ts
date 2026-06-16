export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  category: 'ai' | 'web' | 'data';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  grade?: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'technical' | 'hackathon' | 'workshop' | 'coding';
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
