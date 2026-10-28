export interface Profile {
  id?: number;
  fullName: string;
  professionalTitle: string;
  tagline: string;
  profileImageUrl: string;
  resumeUrl: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  websiteUrl: string;
}

export interface About {
  id?: number;
  heading: string;
  description: string;
  whatDrivesMe?: string;
  yearsOfExperience: number;
}

export interface Skill {
  id?: number;
  name: string;
  category: string;
  icon: string;
  proficiency: number;
  sortOrder: number;
}

export interface Experience {
  id?: number;
  companyName: string;
  position: string;
  employmentType: string;
  startDate?: string;
  endDate?: string;
  currentlyWorking: boolean;
  location: string;
  description?: string;
  bulletPoints?: string[];
  companyUrl?: string;
  sortOrder: number;
  periodDisplay?: string;
}

export interface Education {
  id?: number;
  degree: string;
  college: string;
  university: string;
  startYear?: number;
  endYear?: number;
  cgpa?: string;
  description: string;
  sortOrder: number;
  periodDisplay?: string;
  icon?: string;
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  videoUrl?: string;
  category: string;
  featured: boolean;
  sortOrder: number;
}

export interface Certificate {
  id?: number;
  title: string;
  issuer: string;
  issueDate?: string;
  issueDateDisplay?: string;
  credentialUrl: string;
  imageUrl: string;
  description: string;
  skills: string[];
  sortOrder: number;
}

export interface SocialLink {
  id?: number;
  platform: string;
  url: string;
  icon: string;
  sortOrder: number;
}

export interface ContactSettings {
  id?: number;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
}

export interface SiteSettings {
  id?: number;
  siteTitle: string;
  siteDescription: string;
  logoUrl: string;
  faviconUrl: string;
  footerText: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  user: AuthUser;
}

export interface DashboardStats {
  totalProjects: number;
  totalSkills: number;
  totalCertificates: number;
  totalExperiences: number;
}

export interface ApiError {
  status: number;
  message: string;
  timestamp?: string;
}
