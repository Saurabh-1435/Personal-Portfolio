import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaJava, FaGitAlt, FaGithub,
  FaBrain, FaUsers, FaComments, FaRegClock, FaSync, FaLightbulb,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiSpringboot, SiHibernate, SiFirebase, SiMysql, SiMongodb,
  SiSpring, SiEclipseide, SiPostman,
} from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';
import type { IconType } from 'react-icons';

const ICON_MAP: Record<string, IconType> = {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaJava, FaGitAlt, FaGithub,
  FaBrain, FaUsers, FaComments, FaRegClock, FaSync, FaLightbulb,
  SiTailwindcss, SiSpringboot, SiHibernate, SiFirebase, SiMysql, SiMongodb,
  SiSpring, SiEclipseide, SiPostman, TbDatabase,
};

const COLOR_MAP: Record<string, string> = {
  FaReact: '#61DBFB', FaHtml5: '#E34F26', SiTailwindcss: '#38BDF8', FaCss3Alt: '#1572B6',
  FaJs: '#F7DF1E', FaBootstrap: '#7952B3', FaJava: '#E51F24', SiSpringboot: '#6DB33F',
  SiHibernate: '#59666C', TbDatabase: '#4FD1C5', SiFirebase: '#FFCA28', SiMysql: '#00758F',
  SiMongodb: '#47A248', FaGitAlt: '#F05032', FaGithub: '#FFFFFF', SiSpring: '#6DB33F',
  SiEclipseide: '#2C2255', SiPostman: '#FF6C37', FaBrain: '#FBBF24', FaUsers: '#60A5FA',
  FaComments: '#34D399', FaRegClock: '#F87171', FaSync: '#A78BFA', FaLightbulb: '#FCD34D',
};

export function getSkillIcon(iconName: string): IconType | null {
  return ICON_MAP[iconName] || null;
}

export function getSkillColor(iconName: string): string {
  return COLOR_MAP[iconName] || '#F87171';
}

export const SKILL_CATEGORIES = ['Frontend', 'Backend', 'Database', 'Tools', 'Other'] as const;

export const SKILL_ICON_OPTIONS = Object.keys(ICON_MAP);
