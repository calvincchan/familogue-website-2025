

import { Item } from 'nextra/normalize-pages';
import { supabaseClient } from "src/utils/supabase-client";
import { BlogMetadata } from '../types';

// export function parseTags(tagString: string) {
//   const tags = tagString.split(',').map(tag => tag.trim()).sort();
//   return tags;
// }

export type PostItem = Item & {
  frontMatter: BlogMetadata;
};

export async function getPosts() {
  const { data } = await supabaseClient
    .from('program')
    .select('*')
    // .neq('hidden', true)
    .order('visible_from', { ascending: true });
  return data;
}

// export async function getTags() {
//   const posts = await getPosts();
//   const tags = posts.flatMap(post => post.frontMatter.tags);
//   return tags;
// }

// export function sorter(a: MdxFile, b: MdxFile) {
//   return new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1;
// }