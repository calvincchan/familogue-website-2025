import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next`, `/_vercel`, `/images`, or `/assets`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|trpc|_next|_vercel|images|assets|.*\\..*).*)'
  ],
};
