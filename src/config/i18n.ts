export const locales = ['en', 'vi'] as const;

export const defaultLocale: Locale = 'en';

export type Locale = (typeof locales)[number];
