import { getTranslations } from "next-intl/server";
import { Anchor } from 'nextra/components';
import { type FC } from 'react';
import { Link } from "src/i18n/navigation";
import LocaleSwitcher from "./locale-switcher";

export const Navbar: FC<{ lang: 'en' | 'zh'; }> = async ({ lang }) => {
  const t = await getTranslations('Navigation');

  const topLevelNavbarItems: { title: string, route: string, cta?: boolean; }[] = [
    { title: t('news'), route: '/news' },
    { title: t('classes-and-events'), route: '/classes-and-events' },
    { title: t('services'), route: '/our-services' },
    { title: t('support-us'), route: '/support-us' },
    { title: t('about-us'), route: '/about-us' },
    { title: t('member'), route: '/member', cta: true },
  ];

  return (
    <nav role="menu" className="x-top-nav">
      <Anchor role="menuitem" href="/" className="x-main-link" rel="author">
        Familogue 語你童行</Anchor>
      <ul role="menu" className="x-menu">
        <li>
          <LocaleSwitcher />
        </li>
        {topLevelNavbarItems.map(item => {
          const route = item.route;
          return (
            <li key={route}>
              <Link href={route} role="menuitem" className={item.cta ? 'x-button' : ''}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav >
  );
};