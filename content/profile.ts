import type { Profile } from '@/types/content';

export const profile: Profile = {
  name: 'Dennis Oteri',
  role: 'Front End Developer',
  location: 'Milan, Italy - Varese, Italy - Canton Ticino, Switzerland',
  email: 'dennis.oteri@gmail.com',
  headline: 'Dennis Oteri',
  lede: 'I create interfaces designed to have a tangible impact on the feasibility of the project. I design and develop eye-catching interfaces for products destined to take the market by storm.',
  photo: {
    src: '/images/dennis-oteri.webp',
    alt: 'Portrait of Dennis Oteri against a red backdrop, wearing a black polo shirt.',
    width: 1534,
    height: 1790,
  },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dennisoteri/' },
    { label: 'GitHub', href: 'https://github.com/iosonoDen' },
    { label: 'Instagram', href: 'https://www.instagram.com/dennis.oteri/' },
    { label: 'Email', href: 'mailto:dennis.oteri@gmail.com' },
  ],
  stats: [
    { value: 1, suffix: '+', label: 'Years of experience' },
    { value: 9, suffix: '+', label: 'Technologies in production' },
  ],
};

export const whyHireMe = [
  'Payment-domain delivery: I treat unattended payment software as a product, not a demo — test plans, regression, and release confidence included.',
  'Accessibility is a requirement, not polish: focus states, contrast, and keyboard paths are part of the interface contract.',
  'Full-stack range without theatre: Front End first, with Node.js/MySQL when the product needs a real backend.',
];
