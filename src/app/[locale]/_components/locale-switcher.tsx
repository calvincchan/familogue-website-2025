import { useLocale } from 'next-intl';
import Link from 'next/link';
import { localeNames } from 'src/i18n/config';
import { getPathname } from "src/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const displayLocale = locale === "en" ? "zh" : "en";
  const displayLabel = localeNames.get(displayLocale);

  return (
    <>
      <Link
        href={getPathname({ href: "/", locale: displayLocale })}
      >
        {displayLabel}
      </Link>
    </>
  );
}