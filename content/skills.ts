import type { SkillGroup } from '@/types/content';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    items: ['Node.js', 'MySQL', 'JavaScript'],
  },
  {
    id: 'quality',
    title: 'Quality & delivery',
    items: ['Test plans', 'Regression testing', 'Web accessibility', 'Agile delivery'],
  },
  {
    id: 'design',
    title: 'Design',
    items: ['Figma', 'UI / UX', 'User-centered design'],
  },
];
