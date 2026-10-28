import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getToken, logout } from './auth';
import type {
  About,
  AuthResponse,
  Certificate,
  ContactSettings,
  DashboardStats,
  Education,
  Experience,
  Profile,
  Project,
  SiteSettings,
  Skill,
  SocialLink,
} from '@/types/portfolio';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      logout();
      if (window.location.pathname.startsWith('/admin') && !window.location.pathname.includes('/login')) {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(error);
  }
);

export const publicApi = {
  getProfile: () => apiClient.get<Profile>('/profile').then((r) => r.data),
  getAbout: () => apiClient.get<About>('/about').then((r) => r.data),
  getSkills: () => apiClient.get<Skill[]>('/skills').then((r) => r.data),
  getExperience: () => apiClient.get<Experience[]>('/experience').then((r) => r.data),
  getEducation: () => apiClient.get<Education[]>('/education').then((r) => r.data),
  getProjects: () => apiClient.get<Project[]>('/projects').then((r) => r.data),
  getCertificates: () => apiClient.get<Certificate[]>('/certificates').then((r) => r.data),
  getSocialLinks: () => apiClient.get<SocialLink[]>('/social-links').then((r) => r.data),
  getContact: () => apiClient.get<ContactSettings>('/contact').then((r) => r.data),
  getSiteSettings: () => apiClient.get<SiteSettings>('/site-settings').then((r) => r.data),
};

export const authApi = {
  login: (email: string, password: string) =>
    apiClient.post<AuthResponse>('/auth/login', { email, password }).then((r) => r.data),
};

export const adminApi = {
  getDashboardStats: () => apiClient.get<DashboardStats>('/admin/dashboard/stats').then((r) => r.data),
  getProfile: () => apiClient.get<Profile>('/profile').then((r) => r.data),
  updateProfile: (data: Profile) => apiClient.put<Profile>('/admin/profile', data).then((r) => r.data),
  getAbout: () => apiClient.get<About>('/about').then((r) => r.data),
  updateAbout: (data: About) => apiClient.put<About>('/admin/about', data).then((r) => r.data),
  getSkills: () => apiClient.get<Skill[]>('/admin/skills').then((r) => r.data),
  createSkill: (data: Skill) => apiClient.post<Skill>('/admin/skills', data).then((r) => r.data),
  updateSkill: (id: number, data: Skill) => apiClient.put<Skill>(`/admin/skills/${id}`, data).then((r) => r.data),
  deleteSkill: (id: number) => apiClient.delete(`/admin/skills/${id}`),
  getExperience: () => apiClient.get<Experience[]>('/admin/experience').then((r) => r.data),
  createExperience: (data: Experience) => apiClient.post<Experience>('/admin/experience', data).then((r) => r.data),
  updateExperience: (id: number, data: Experience) => apiClient.put<Experience>(`/admin/experience/${id}`, data).then((r) => r.data),
  deleteExperience: (id: number) => apiClient.delete(`/admin/experience/${id}`),
  getEducation: () => apiClient.get<Education[]>('/admin/education').then((r) => r.data),
  createEducation: (data: Education) => apiClient.post<Education>('/admin/education', data).then((r) => r.data),
  updateEducation: (id: number, data: Education) => apiClient.put<Education>(`/admin/education/${id}`, data).then((r) => r.data),
  deleteEducation: (id: number) => apiClient.delete(`/admin/education/${id}`),
  getProjects: () => apiClient.get<Project[]>('/admin/projects').then((r) => r.data),
  createProject: (data: Project) => apiClient.post<Project>('/admin/projects', data).then((r) => r.data),
  updateProject: (id: number, data: Project) => apiClient.put<Project>(`/admin/projects/${id}`, data).then((r) => r.data),
  deleteProject: (id: number) => apiClient.delete(`/admin/projects/${id}`),
  getCertificates: () => apiClient.get<Certificate[]>('/admin/certificates').then((r) => r.data),
  createCertificate: (data: Certificate) => apiClient.post<Certificate>('/admin/certificates', data).then((r) => r.data),
  updateCertificate: (id: number, data: Certificate) => apiClient.put<Certificate>(`/admin/certificates/${id}`, data).then((r) => r.data),
  deleteCertificate: (id: number) => apiClient.delete(`/admin/certificates/${id}`),
  getContact: () => apiClient.get<ContactSettings>('/admin/contact').then((r) => r.data),
  updateContact: (data: ContactSettings) => apiClient.put<ContactSettings>('/admin/contact', data).then((r) => r.data),
  getSiteSettings: () => apiClient.get<SiteSettings>('/admin/site-settings').then((r) => r.data),
  updateSiteSettings: (data: SiteSettings) => apiClient.put<SiteSettings>('/admin/site-settings', data).then((r) => r.data),
};

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message?: string } | undefined;
    return data?.message || error.message || 'An unexpected error occurred';
  }
  if (error instanceof Error) return error.message;
  return 'An unexpected error occurred';
}
