import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "Home", "/");
}

