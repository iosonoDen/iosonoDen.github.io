import type { SkillGroup } from '@/types/content';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { id: 'typescript', label: 'TypeScript' },
      { id: 'react', label: 'React' },
      { id: 'nextjs', label: 'Next.js' },
      { id: 'tailwind', label: 'Tailwind CSS' },
      { id: 'angular', label: 'Angular' },
      { id: 'vue', label: 'Vue.js' },
      { id: 'html5', label: 'HTML5' },
      { id: 'css3', label: 'CSS3' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    items: [
      { id: 'javascript', label: 'JavaScript' },
      { id: 'nodejs', label: 'Node.js' },
      { id: 'mongodb', label: 'MongoDB' },
      { id: 'python', label: 'Python' },
      { id: 'php', label: 'PHP' },
      { id: 'csharp', label: 'C#' },
      { id: 'java', label: 'Java' },
    ],
  },
  {
    id: 'quality',
    title: 'Quality & Delivery',
    items: [
      { id: 'github', label: 'GitHub' },
      { id: 'git', label: 'Git' },
      { id: 'gitlabci', label: 'GitLab CI' },
      { id: 'docker', label: 'Docker' },
      { id: 'agile', label: 'Agile Method' },
      { id: 'regression', label: 'Regression Testing' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    items: [
      { id: 'figma', label: 'Figma' },
      { id: 'canva', label: 'Canva' },
      { id: 'user-centered', label: 'User-Centered Design' },
    ],
  },
];
