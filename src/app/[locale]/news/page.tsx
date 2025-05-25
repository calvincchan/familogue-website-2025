import { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新動態",
  description: "Familogue 語你童行的最新消息和活動更新",
  openGraph: {
    title: "最新動態",
    description: "Familogue 語你童行的最新消息和活動更新",
    url: process.env.SITE_URL + "/news",
    siteName: "Familogue 語你童行",
    type: "website",
    images: [
      {
        url: process.env.SITE_OG_IMAGE,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Page() {
  return (
    <div className="x:prose">
      <h1>最新動態</h1>
      <h2>敬請期待！</h2>
    </div>
  );
}

