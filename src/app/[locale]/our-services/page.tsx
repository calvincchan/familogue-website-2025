import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getAllServices } from "@/utils/sdk/services";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "OurServices", "/our-services");
}

export default async function Page() {
  const locale = await getLocale();
  const records = await getAllServices(locale);
  const t = await getTranslations('OurServices');
  return (
    <div className="x-container prose">
      <h1>{t("title")} </h1>
      {records.map((record) => (
        <section key={record.title} className="sm:flex sm:flex-row-reverse gap-2">
          <Image
            src={record.image && record.image.length > 0 ? record.image[0] : "/logo.svg"}
            alt={record.title}
            width={360}
            height={240}
            className="aspect-[3/2] object-cover" />
          <div>
            <h2 id={record.slug} className="mt-0">{record.title}</h2>
            <p className="text-muted-foreground">{record.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
}