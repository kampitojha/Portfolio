export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // For detail page
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  color?: string;
  stats?: { label: string; value: string }[];
}

export interface Skill {
  subject: string;
  A: number;
  fullMark: number;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string; // Dummy markdown/html content
}