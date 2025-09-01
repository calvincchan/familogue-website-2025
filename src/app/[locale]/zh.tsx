import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getServices } from "@/utils/sdk/services";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "Home", "/");
}

export default async function Page() {
  const locale = await getLocale();
  const records = await getServices(locale);
  return (
    <div className="x-top-page">
      <section className="x-hero">
        <h1>Familogue 語你童行</h1>
        <h2>用母語讓家長與孩子更有效地溝通，一起同行與成長</h2>
      </section>
      {/* <section>
        <h2>課程及活動</h2>
        <ProgramList />
        <p><Link className="x-button" href="/programs">更多課程及活動 &rarr;</Link></p>
      </section> */}
      <section>
        <h2>關於我們</h2>
        <h3>親子關係就如孩子的翅膀，母語就像翅膀下的風，讓孩子飛得更高、更遠。</h3>
        <p>我們是幾名來自香港的資深教育工作者，也是剛移民到加拿大溫哥華的媽媽。我們希望透過我們的專業，幫助家長和孩子在家可以更有系統地將他們的母語能力轉化成其他能力。在熟悉的語境下，家長與小朋友能更有效地溝通，一起同行與成長。故此我們於2022年成立了「語你童行Familogue」 - 卑詩省註冊非牟利團體。</p>
        <p><Link className="x-button" href="/about-us">了解更多 &rarr;</Link></p>
      </section>
      <section>
        <h2>服務簡介</h2>
        {records.map((record) => (
          <div key={record.title} className="x:mt-8">
            <h3>{record.title}</h3>
            <p>{record.content}</p>
            <p><Link className="x-button" href="/our-services">了解更多 &rarr;</Link></p>
          </div>
        ))}
      </section>
    </div >
  );
}