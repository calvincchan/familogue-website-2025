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
        <h2>Empowering parents and children to communicate and grow together through their mother tongue</h2>
      </section>
      {/* <section>
        <h2>Latest Events</h2>
        <ProgramList />
        <p><Link className="x-button" href="/programs">See All Events →</Link></p>
      </section> */}
      <section>
        <h2>About Us</h2>
        <h3>The parent-child relationship is like the child's wings, and the mother tongue is like the wind under the wings, allowing the child to fly higher and farther.</h3>
        <p>We are a group of experienced educators from Hong Kong and moms who just immigrated to Vancouver, Canada. We aim to use our expertise to help parents and children systematically develop other skills using their mother tongue abilities at home. In familiar contexts, parents and children can communicate more effectively, and grow together. Therefore, we established "Familogue" in 2022, a registered non-profit organization in British Columbia.</p>
        <p><Link className="x-button" href="/about-us">Learn More About Us &rarr;</Link></p>
      </section>
      <section>
        <h2>Our Services</h2>
        {records.map((record) => (
          <div key={record.title}>
            <h3>{record.title}</h3>
            <p>{record.content}</p>
            <p><Link className="x-button" href="/our-services">Learn More &rarr;</Link></p>
          </div>
        ))}
      </section>
      {/* <section>
        <h2>Media Coverage</h2>
        <p>(placeholder)</p>
      </section> */}
    </div >
  );
}