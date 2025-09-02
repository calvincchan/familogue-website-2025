import { Button } from "@/components/ui/button";
import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getAllServices } from "@/utils/sdk/services";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const locale = await getLocale();
  return await generatedMetadataForPage(locale, "Home", "/");
}

export default async function Page() {
  const locale = await getLocale();
  const records = await getAllServices(locale);
  const t = await getTranslations();
  return (
    <div className="x-top-page">
      <section className="x-hero">
        <h1>{t("Homepage.title")}</h1>
        <h2>{t("Homepage.subtitle")}</h2>
      </section>
      {/* <section>
        <h2>課程及活動</h2>
        <ProgramList />
        <p><Link className="x-button" href="/programs">更多課程及活動 &rarr;</Link></p>
      </section> */}
      <section>
        <h2>{t("AboutUs.title")}</h2>
        <h3>{t("AboutUs.subtitle")}</h3>
        <p>{t("AboutUs.description")}</p>
        <p><Button asChild variant="accent" size="lg"><Link href="/about-us">{t("General.view_details")} &rarr;</Link></Button></p>
      </section>
      <section>
        <h2>{t("OurServices.title")}</h2>
        <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-8">
          {records.map((record) => (
            <div key={record.title}>
              <div className="sm:col-span-1">
                <h3>{record.title}</h3>
                <p>{record.content}</p>
                <p><Button asChild variant="outline" size="sm"><Link href="/our-services">了解更多 &rarr;</Link></Button></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}