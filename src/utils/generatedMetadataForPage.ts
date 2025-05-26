import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


const defaultMeta: Metadata = {
  authors: [
    {
      name: process.env.SITE_NAME,
      url: process.env.SITE_URL,
    }
  ],
  creator: process.env.SITE_NAME,
  publisher: process.env.SITE_NAME,

  metadataBase: new URL(process.env.SITE_URL),
};

export async function generatedMetadataForPage(locale: string, namespace: string, pathname: string) {
  const t = await getTranslations(namespace);
  const metadata: Metadata = {
    title: t("title"),
    description: t("meta.description"),
    openGraph: {
      title: t("title"),
      description: t("meta.description"),
      url: pathname,
      siteName: process.env.SITE_NAME,
      type: "website",
      images: [
        {
          url: `/images/og-image.png`,
          width: 1600,
          height: 900,
          alt: `${process.env.SITE_NAME} Open Graph Image`
        }
      ]
    },
    alternates: {
      canonical: pathname,
      languages: {
        en: `/en${pathname}`,
        zh: `/zh${pathname}`,
      }
    }
  };
  return { ...defaultMeta, ...metadata };
}
