import type { Experience } from '@/types/content';

export const experiences: Experience[] = [
  {
    id: 'madic',
    role: 'Front End Developer',
    company: 'MADIC ITALIA S.r.l.',
    location: 'Cardano al Campo (VA)',
    period: 'November 2024 — Present',
    summary:
      'I build and certify product interfaces for unattended payment software. The work sits between engineering, QA and release: React surfaces, end-to-end test plans, and documentation that keep payment flows reliable under real-world constraints.',
    outcomes: [
      'Designed and executed test plans that validate end-to-end payment functionality before release.',
      'Collaborated with engineering to certify highly reliable software deployments.',
      'Brought frontend quality, accessibility and regression discipline into a PCI-sensitive product environment.',
    ],
  },
  {
    id: 'ennova',
    role: 'Level 2 Technical Support Specialist',
    company: 'ENNOVA S.p.A.',
    location: 'Gerenzano (VA)',
    period: 'September 2022 — May 2024',
    summary:
      'Advanced L2 diagnosis for network and ISP anomalies. The job trained the same instincts I now use in product work: isolate the failure, reduce noise, and leave the system more understandable than I found it.',
    outcomes: [
      'Resolved critical connectivity issues including bandwidth degradation and intermittent drops.',
      'Guided clients through advanced configuration of cascaded routers, mesh extenders and IoT integrations.',
    ],
  },
];
