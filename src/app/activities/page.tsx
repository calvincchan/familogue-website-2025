import { Metadata } from "next";
import { ProgramCard } from "./program-card";
import { getPosts } from "./utils";

export const metadata: Metadata = {
  title: "Classes & Events",
  description: "Classes and events for parents and children.",
  openGraph: {
    title: "Classes & Events",
    description: "Classes and events for parents and children.",
    url: process.env.SITE_URL + "/activities",
  },
  alternates: {
    canonical: process.env.SITE_URL + "/activities",
  },
};

export default async function Page() {
  const posts = await getPosts();
  console.log("posts", posts);

  return (
    <div>
      <header className="x-page-header">
        <h1>{metadata.title as string}</h1>
        <h2>{metadata.description as string}</h2>
      </header>

      <section role="feed" className="x-post-list">
        {posts.map(function renderItem(item) {
          return (
            <ProgramCard key={item.sku} post={item} />
          );
        })}
      </section>
    </div>
  );
}