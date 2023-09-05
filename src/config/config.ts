import type { SiteConfig } from './types/config.types';

export const siteConfig: SiteConfig = {
  name: 'Achievera',
  description:
    'Achievera is your daily companion for success. Take a moment each day to reflect on your accomplishments, both big and small. With Achievera, you can easily record and celebrate your wins, no matter how significant or minor they may seem.',
  url: process.env.NEXT_PUBLIC_URL as string,
  keywords: ['achievements', 'accomplishments', 'progresstracking', 'productivity', 'motivation'],
};
