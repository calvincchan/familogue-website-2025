import { supabaseClient } from "../supabase-client";

export async function getAllServices(locale: string) {
  const { data } = await supabaseClient
    .from("web_posts")
    .select()
    .eq("status", "Published")
    .order("position", { ascending: true });
  const records = data || [];
  return records.map(record => ({
    title: locale === "zh" ? record.title : record.title_en,
    content: locale === "zh" ? record.content : record.content_en,
    slug: record.slug,
    image: record.image || [],
  }));
};