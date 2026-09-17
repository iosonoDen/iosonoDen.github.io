import { profile } from '@/content/profile';

export const aboutStory = [
  'My bond with technology began with a PlayStation 1: officially a maternity gift, practically the perfect excuse for my father to play on weekends. By five I could boot the console on our CRT myself.',
  'A desktop PC followed. I learned to type before I could hold a pen. Games faded into the background; the spark did not.',
  'In 2020 watching the web stopped being enough. I taught myself what sits behind every click. Today I am a Front End Developer in Milan, building payment-grade interfaces with the same intensity that started it all.',
];

export const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const cv = {
  href: '/dennis-oteri-cv.pdf',
  label: 'Download CV',
  filename: 'Dennis-Oteri-CV.pdf',
};

export const site = {
  profile,
  navigation,
  cv,
};
