import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "./site-config";


const defaultMeta: Metadata = {
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    }
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  metadataBase: new URL(siteConfig.baseUrl),
};

export async function generatedMetadataForPage(locale: string, namespace: string, pathname: string) {
  const t = await getTranslations(namespace);
  const metadata: Metadata = {
    title: t("title") + " | " + siteConfig.name,
    description: t("meta.description"),
    openGraph: {
      title: t("title") + " | " + siteConfig.name,
      description: t("meta.description"),
      url: pathname,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `/images/og-image.png`,
          width: 1600,
          height: 900,
          alt: `${siteConfig.name} Open Graph Image`
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
