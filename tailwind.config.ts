import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#080808',
        ink: '#f5f5f5',
        accent: '#ef4d22',
      },
    },
  },
  plugins: [],
};

export default config;
