import { ProgramCard } from "@/app/[locale]/classes-and-events/program-card";
import { getPrograms } from "@/app/[locale]/classes-and-events/utils";
import { getLocale, getTranslations } from "next-intl/server";


export default async function ProgramList() {
  const posts = await getPrograms();
  const t = await getTranslations("Programs");
  const locale = await getLocale();

  return (
    <section className="x-program-list">
      {posts.map(function renderItem(item) {
        return (
          <ProgramCard key={item.sku} post={item} locale={locale} />
        );
      })}
    </section>
  );
}