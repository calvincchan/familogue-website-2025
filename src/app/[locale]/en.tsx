import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Familogue | Parent-Child Education in Cantonese',
  description: process.env.SITE_DESCRIPTION,
  openGraph: {
    title: process.env.SITE_NAME,
    description: process.env.SITE_DESCRIPTION,
    url: process.env.SITE_URL,
    siteName: process.env.SITE_NAME,
    type: 'website',
    images: [
      {
        url: process.env.SITE_OG_IMAGE,
        width: 640,
        height: 640,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: process.env.SITE_NAME,
    description: process.env.SITE_DESCRIPTION,
    images: process.env.SITE_OG_IMAGE,
    creator: process.env.SITE_NAME,
  },
  alternates: {
    canonical: process.env.SITE_URL,
  },
};

export default function Page() {
  return (
    <div className="x-top-page">
      <h1>Familogue 語你童行</h1>
      <h2>用母語讓家長與孩子更有效地溝通，一起同行與成長</h2>
      <section>
        <h2>Latest Classes &amp; Activities</h2>
        <p>(placeholder)</p>
        <p><Link className="x-button" href="/activities">More Details 👉</Link></p>
      </section>
      <section>
        <h2>About Us</h2>
        <p>We are a group of experienced educators from Hong Kong and moms who just immigrated to Vancouver, Canada. We aim to use our expertise to help parents and children systematically develop other skills using their mother tongue abilities at home. In familiar contexts, parents and children can communicate more effectively, and grow together. Therefore, we established "Familogue" in 2022, a registered non-profit organization in British Columbia.</p>
        <p><Link className="x-button" href="/about-us">Learn More 👉</Link></p>
      </section>
      <section>
        <h2>Our Services</h2>
        <p>(placeholder)</p>
        <p><Link className="x-button" href="/our-services">Learn More 👉</Link></p>
      </section>
    </div >
  );
}  