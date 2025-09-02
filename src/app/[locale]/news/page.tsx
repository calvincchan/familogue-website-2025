import { Metadata } from "next";

export const metadata: Metadata = {
  title: "資訊中心",
  description: "Familogue 語你童行的最新消息和活動更新",
  openGraph: {
    title: "資訊中心",
    description: "Familogue 語你童行的最新消息和活動更新",
    url: process.env.SITE_URL + "/news",
    siteName: "Familogue 語你童行",
    type: "website",
    images: [
      {
        url: process.env.SITE_OG_IMAGE || "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Page() {
  return (
    <div className="prose">
      <h1>資訊中心 News</h1>
      <h2>敬請期待！ Available Soon!</h2>
      <p>我們將很快為您帶來最新消息和活動更新。</p>
      <p>We will bring you the latest news and event updates soon.</p>
    </div>
  );
}

