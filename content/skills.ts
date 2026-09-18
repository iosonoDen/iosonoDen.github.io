import type { SkillGroup } from '@/types/content';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'nextjs', label: 'Next.js' },
      { id: 'angular', label: 'Angular' },
      { id: 'vue', label: 'Vue.js' },
      { id: 'tailwind', label: 'Tailwind CSS' },
      { id: 'html5', label: 'HTML5' },
      { id: 'css3', label: 'CSS3' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & data',
    items: [
      { id: 'nodejs', label: 'Node.js' },
      { id: 'mysql', label: 'MySQL' },
      { id: 'javascript', label: 'JavaScript' },
    ],
  },
  {
    id: 'quality',
    title: 'Quality & delivery',
    items: [
      { id: 'test-plans', label: 'Test plans' },
      { id: 'regression', label: 'Regression testing' },
      { id: 'accessibility', label: 'Web accessibility' },
      { id: 'agile', label: 'Agile delivery' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    items: [
      { id: 'figma', label: 'Figma' },
      { id: 'ui-ux', label: 'UI / UX' },
      { id: 'user-centered', label: 'User-centered design' },
    ],
  },
];
