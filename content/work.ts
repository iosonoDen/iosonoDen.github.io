import type { CaseStudy } from '@/types/content';

export const caseStudies: CaseStudy[] = [
  {
    id: 'portfolio-v2',
    eyebrow: 'Flagship product',
    title: 'Rebuilding the personal site as evidence, not a brochure.',
    problem:
      'The previous portfolio was a client-rendered SPA with broken metric counters, Beta Tester positioning, and no case studies. Recruiters could not see the actual engineering.',
    decisions: [
      'Next.js App Router + TypeScript for a prerendered, typed foundation.',
      'A dark flagship design system with cinematic type, not a template theme.',
      'Content rewritten from the CV: Front End Developer, payment work, measurable skills.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    outcome: 'A recruiter can understand who I am, what I ship, and why to reply — in one viewport.',
  },
  {
    id: 'payment-software',
    eyebrow: 'Unattended payments',
    title: 'Release confidence for payment-grade software.',
    problem:
      'Unattended payment releases cannot ship on vibe. Functionality, regression and documentation have to hold up in the field.',
    decisions: [
      'End-to-end test plans instead of ad-hoc clicking.',
      'Close loop with engineering so defects die before certification.',
      'Frontend quality bar aligned with PCI-aware production constraints.',
    ],
    stack: ['React', 'TypeScript', 'Test plans', 'Payment software'],
    outcome: 'Releases certified with documented coverage and a shared language between QA and engineering.',
  },
];
