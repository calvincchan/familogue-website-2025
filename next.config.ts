import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
// import nextra from "nextra";

/*
 * @type {import('next').NextConfig}
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 * This is the configuration file for Next.js.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "familogue.ca",
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// const withNextra = nextra({
//   // theme: "nextra-theme-blog",
//   // themeConfig: "./theme.config.jsx",
//   defaultShowCopyCode: true,
//   readingTime: false,
// });

/* https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing */
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
