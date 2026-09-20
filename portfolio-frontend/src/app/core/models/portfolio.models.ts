export interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string;
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
  createdAt?: string;
}

export interface Certification {
  id?: number;
  title: string;
  issuer: string;
  issueDate: string;
  imageUrl?: string;
  icon?: string;
  isFeatured: boolean;
}

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead?: boolean;
  sentAt?: string;
}