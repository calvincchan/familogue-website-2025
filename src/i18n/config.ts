export type Locale = (typeof locales)[number];

export const locales = ['en', 'zh'] as const;
export const defaultLocale: Locale = 'zh';
export const localeNames = new Map<Locale, string>([
  ["en", "English"],
  ["zh", "中文"]
]);