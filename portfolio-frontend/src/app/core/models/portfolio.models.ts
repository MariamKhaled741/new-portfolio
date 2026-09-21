export interface Certification {
  id?: number;
  title: string;
  issuer: string;
  issueDate: string;
  summary: string;       // 👈 ملخص الشهادة
  linkedinUrl?: string;  // 👈 رابط LinkedIn
  imageUrl?: string;
  icon?: string;
  isFeatured?: boolean;
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  technologies: string;
  isFeatured?: boolean;
  
  // 👈 إضافة هذه الحقول لحل أخطاء التجميع
  dateCompleted?: string;
  linkedinUrl?: string;
  demoUrl?: string;
}

export interface Training {
  id: number;
  title: string;
  provider: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  certificateUrl?: string;
}

export interface Activity {
  id: number;
  title: string;
  organization: string;
  role: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}
export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  sentAt?: string;
}
export interface ProfileInfo {
  id?: number;
  fullName: string;
  title: string;
  bio: string;
  imageUrl?: string;
  cvUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}
export interface Education {
  id: number;
  university: string;
  degree: string;
  duration: string;
  location: string;
  courses: string[];
}