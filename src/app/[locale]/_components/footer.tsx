import { getTranslations } from "next-intl/server";
import type { FC } from 'react';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "src/_icons";
import { Link } from "src/i18n/navigation";
import LocaleSwitcher from "./locale-switcher";

export const Footer: FC = async () => {
  /**
   * Footer navigation items with translations.
   */
  const tNav = await getTranslations('Navigation');
  const footerItems: { title: string, route: string, cta?: boolean; }[] = [
    { title: tNav('home'), route: '/' },
    { title: tNav('activities'), route: '/activities' },
    { title: tNav('news'), route: '/news' },
    { title: tNav('services'), route: '/our-services' },
    { title: tNav('support-us'), route: '/support-us' },
    { title: tNav('about-us'), route: '/about-us' },
    { title: tNav('member'), route: '/member' },
  ];

  const tFooter = await getTranslations('Footer');

  return (
    <footer className="x-global-footer">
      <div className="x-row">
        <div className="x-col1">
          <h4>Familogue 語你童行</h4>
          <p>{tFooter('description')}</p>
          <p></p>
        </div>
        <div className="x-col2">
          {footerItems.map(item => {
            const route = item.route;
            return (
              <p key={route}>
                <Link href={route}>
                  {item.title}
                </Link>
              </p>
            );
          })}
          <p>
            <LocaleSwitcher />
          </p>
        </div>
        <div className="x-col3">
          <h4>{tNav('contact-us')}</h4>
          <p><Link href="https://www.facebook.com/Familogue" target="_blank" rel="noopener noreferrer"><FacebookIcon />Facebook</Link></p>
          <p><Link href="https://www.instagram.com/familogue" target="_blank" rel="noopener noreferrer"><InstagramIcon />Instagram</Link></p>
          <p><Link href="https://www.youtube.com/@familogue" target="_blank" rel="noopener noreferrer"><YouTubeIcon /> YouTube</Link></p>
          <p>{tNav('telephone')}: <Link href="tel:+17788070211">+1 (778) 807-0211</Link></p>
          <p>{tNav('email')}: <Link href="mailto:info@familogue.ca">info@familogue.ca</Link></p>
          <p>{tNav('address')}: <Link href="https://maps.app.goo.gl/wopnafQpovYgxuBH6" target="_blank" rel="noopener noreferrer">8181 Cambie Rd. Unit 5530, Richmond, BC V6X 1J8</Link></p>
        </div>
      </div>
      <div className="x:text-center x:mt-8">
        <span className="x-author">{new Date().getFullYear()} © {process.env.SITE_NAME}.</span>
        {' '}
        All rights reserved.
      </div>
    </footer >
  );
};