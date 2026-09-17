import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#070707',
        surface: '#111111',
        ink: '#f5f4f0',
        muted: '#a3a3a3',
        accent: '#ff5a1f',
      },
    },
  },
  plugins: [],
};

export default config;
