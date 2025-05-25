import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import EnglishPage from "./en";
import ChinesePage from "./zh";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "SupportUs", "support-us");
}

export default async function Page() {
  const locale = await getLocale();
  if (locale === 'en') {
    return <EnglishPage />;
  } else if (locale === 'zh') {
    return <ChinesePage />;
  } else {
    notFound();
  }
}