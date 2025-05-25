import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Familogue 語你童行 | 母語親子教育，同行成長',
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
        <h2>課程及活動</h2>
        <p>(placeholder)</p>
        <p><Link className="x-button" href="/activities">更多課程及活動 👉</Link></p>
      </section>
      <section>
        <h2>關於我們</h2>
        <p>我們是幾名來自香港的資深教育工作者，也是剛移民到加拿大溫哥華的媽媽。我們希望透過我們的專業，幫助家長和孩子在家可以更有系統地將他們的母語能力轉化成其他能力。在熟悉的語境下，家長與小朋友能更有效地溝通，一起同行與成長。故此我們於2022年成立了「語你童行Familogue」 - 卑詩省註冊非牟利團體。</p>
        <p><Link className="x-button" href="/about-us">了解更多 👉</Link></p>
      </section>
      <section>
        <h2>服務簡介</h2>
        <p>(placeholder)</p>
        <p><Link className="x-button" href="/our-services">了解更多 👉</Link></p>
      </section>
    </div >
  );
}  