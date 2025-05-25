import { supabaseClient } from "src/utils/supabase-client";

export async function getPosts() {
  const today = new Date().toDateString();
  const { data } = await supabaseClient
    .from('program')
    .select('*')
    // .neq('hidden', true)
    // .gte('visible_from', today)
    // .lte('visible_to', today)
    .order('visible_from', { ascending: true });
  return data;
}