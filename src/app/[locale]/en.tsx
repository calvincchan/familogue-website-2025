import { generatedMetadataForPage } from "@/utils/generatedMetadataForPage";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const locale = await getLocale();
  return generatedMetadataForPage(locale, "Home", "/");
}

export default function Page() {
  return (
    <div className="x-top-page">
      <section className="x-hero">
        <h1>Familogue 語你童行</h1>
        <h2>Empowering parents and children to communicate and grow together through their mother tongue</h2>
      </section>
      <section>
        <h2>Latest Classes &amp; Activities</h2>
        <p>(placeholder)</p>
        <p><Link className="x-button" href="/activities">More Details 👉</Link></p>
      </section>
      <section>
        <h2>About Us</h2>
        <p>(include statistics and counters)</p>
        <p>We are a group of experienced educators from Hong Kong and moms who just immigrated to Vancouver, Canada. We aim to use our expertise to help parents and children systematically develop other skills using their mother tongue abilities at home. In familiar contexts, parents and children can communicate more effectively, and grow together. Therefore, we established "Familogue" in 2022, a registered non-profit organization in British Columbia.</p>
        <p><Link className="x-button" href="/about-us">Learn More 👉</Link></p>
      </section>
      <section>
        <h2>Our Services</h2>
        <p>(placeholder)</p>
        <p><Link className="x-button" href="/our-services">Learn More 👉</Link></p>
      </section>
      <section>
        <h2>Media Coverage</h2>
        <p>(placeholder)</p>
      </section>
    </div >
  );
}  