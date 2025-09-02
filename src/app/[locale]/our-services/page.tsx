import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getAllServices } from "@/utils/sdk/services";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "OurServices", "/our-services");
}

export default async function Page() {
  const locale = await getLocale();
  const records = await getAllServices(locale);
  const t = await getTranslations('OurServices');
  return (
    <div className="x-container x:prose">
      <h1>{t("title")} </h1>
      {records.map((record) => (
        <section key={record.title}>
          <h2>{record.title}</h2>
          <p>{record.content}</p>
        </section>
      ))}
    </div>
  );
}