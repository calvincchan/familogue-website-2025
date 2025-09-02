import { useLocale } from 'next-intl';
// import Link from 'next/link';
import { localeNames } from 'src/i18n/config';
import { Link } from 'src/i18n/navigation';

export default function LocaleMenu() {
  const locale = useLocale();

  return (
    <>
      {JSON.stringify([...localeNames])}
      {[...localeNames].map(([key, label]) => (
        <Link
          key={key}
          locale={key}
          href="/news"
          className="mx-4"
        >
          {label}
        </Link>
      ))}
    </>
  );
}