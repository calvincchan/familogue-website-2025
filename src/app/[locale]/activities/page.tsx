import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getLocale, getTranslations } from "next-intl/server";
import { ProgramCard } from "./program-card";
import { getPosts } from "./utils";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "Activities", "/activities");
}

export default async function Page() {
  const posts = await getPosts();
  const t = await getTranslations("Activities");

  return (
    <div>
      <header className="x-page-header">
        <h1>{t("title")}</h1>
        <h2>{t("meta.description")}</h2>
      </header>

      <section role="feed" className="x-post-list">
        {posts.map(function renderItem(item) {
          return (
            <ProgramCard key={item.sku} post={item} />
          );
        })}
      </section>
    </div>
  );
}