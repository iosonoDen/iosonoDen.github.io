export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type SkillItem = {
  id: string;
  label: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: SkillItem[];
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  outcomes: string[];
};

export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  problem: string;
  decisions: string[];
  stack: string[];
  outcome: string;
  href?: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  headline: string;
  lede: string;
  photo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  social: SocialLink[];
  stats: Stat[];
};
