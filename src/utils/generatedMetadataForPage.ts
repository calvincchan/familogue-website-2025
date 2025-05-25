import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generatedMetadataForPage(locale: string, namespace: string, pathname: string) {
  const t = await getTranslations(namespace);
  const metadata: Metadata = {
    title: t("title"),
    description: t("meta.description"),
    openGraph: {
      title: t("title"),
      description: t("meta.description"),
      url: new URL(`${process.env.SITE_URL}/${locale}/${pathname}`),
      siteName: process.env.SITE_NAME,
      type: "website",
    },
    alternates: {
      canonical: new URL(`${process.env.SITE_URL}/${locale}/${pathname}`),
    }
  };
  return metadata;
}
