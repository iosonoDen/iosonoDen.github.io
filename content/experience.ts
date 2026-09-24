import type { Experience } from '@/types/content';

export const experiences: Experience[] = [
  {
    id: 'madic',
    role: 'Beta Testing Specialist',
    company: 'MADIC ITALIA S.r.l.',
    location: 'Cardano al Campo (VA)',
    period: 'November 2024 → Present',
    outcomes: [
      'Designed and executed test plans that validate end-to-end payment functionality before release.',
      'Collaborated with engineering to certify highly reliable software deployments.',
      'Brought frontend quality, accessibility and regression discipline into a PCI-sensitive product environment.',
    ],
  },
  {
    id: 'vodafone',
    role: 'Level 2 Technical Support Specialist',
    company: 'Vodafone S.p.A.',
    location: 'Gerenzano (VA)',
    period: 'September 2022 → May 2024',
    outcomes: [
      'Advanced L2 diagnosis for network and ISP anomalies;',
      'Resolved critical connectivity issues including bandwidth degradation and intermittent drops;',
      'Guided clients through advanced configuration of cascaded routers, mesh extenders and IoT integrations.',
    ],
  },
];
