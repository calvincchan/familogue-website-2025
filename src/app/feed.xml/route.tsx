import { getLocaleDisplayInfo, getPrograms } from "@/app/[locale]/classes-and-events/utils";
import { siteConfig } from "@/utils/site-config";
import RSS from "rss";

const normalizeUrl = (url: string): string => {
  const baseUrl = process.env.SITE_URL;
  if (!baseUrl) {
    throw new Error("SITE_URL is not defined");
  }
  return new URL(url, baseUrl).toString();
};

export async function GET() {
  const allPosts = await getPrograms();
  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    site_url: siteConfig.baseUrl,
    feed_url: `${siteConfig.baseUrl}/feed.xml`,
    // image_url: siteConfig.ogImage,
  });

  const date = new Date().toUTCString();

  allPosts.forEach((post) => {
    const { id } = post;
    const { displayDescription, displayName } = getLocaleDisplayInfo(post, "zh");
    const url = normalizeUrl(`/classes-and-events/${id}`);
    // const image = post.frontMatter.image ? normalizeUrl(post.frontMatter.image) : process.env.SITE_OG_IMAGE;
    // const author = post.frontMatter.author || process.env.SITE_NAME;
    // const categories = post.frontMatter.tags || [];
    // const pubDate = post.frontMatter.lastmod ?
    //   new Date(post.frontMatter.lastmod).toUTCString() :
    //   post.frontMatter.date ?
    //     new Date(post.frontMatter.date).toUTCString() :
    //     new Date(date).toUTCString();
    const guid = url;
    feed.item({
      title: displayName,
      description: displayDescription,
      url,
      guid,
      date,
      // author,
      // date: pubDate,
      // categories,
      // custom_elements: [
      //   { "media:content": { _attr: { url: image } } },
      //   { "media:thumbnail": { _attr: { url: image } } },
      //   { "media:description": description },
      // ],
    });
  });

  const xml = feed.xml({
    indent: true,
  });

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  });
}