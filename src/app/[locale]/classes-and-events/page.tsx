import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getLocale, getTranslations } from "next-intl/server";
import { ProgramCard } from "./program-card";
import { getPrograms } from "./utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const metadata = await generatedMetadataForPage(locale, "Programs", "/programs");
  return {
    ...metadata,
    title: {
      default: `${metadata.title} | Familogue 語你童行`,
      template: `%s | ${metadata.title} | Familogue 語你童行`,
    },
  };
}

export default async function Page() {
  const posts = await getPrograms();
  const t = await getTranslations("Programs");
  const locale = await getLocale();

  return (
    <div>
      <header className="x-page-header">
        <h1>{t("title")}</h1>
        <h2>{t("meta.description")}</h2>
      </header>

      <section role="feed" className="x-program-list">
        {posts.map(function renderItem(item) {
          return (
            <ProgramCard key={item.sku} post={item} locale={locale} />
          );
        })}
      </section>
    </div>
  );
}