import { Database } from "@/types/database.types";
import { supabaseClient } from "src/utils/supabase-client";

export async function getPrograms() {
  const today = new Date().toISOString();
  // console.log("Fetching posts with today:", today);
  const { data, error } = await supabaseClient
    .from('program')
    .select('*')
    // .neq('hidden', true)
    .lte('visible_from', today)
    .gte('visible_to', today)
    .order('visible_from', { ascending: true });
  if (error) throw new Error(`Error fetching posts: ${error.message}`);
  return data;
}

export async function getProgramById(id: number) {
  const { data, error } = await supabaseClient
    .from('program')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error(`Error fetching program: ${error.message}`);
  return data;
}

export function getLocaleDisplayInfo(program: Database['public']['Tables']['program']['Row'], locale: string) {
  const { name, name_zh, description, description_zh, image, image_zh, image_dimension } = program;
  const displayName = (locale === 'zh' ? name_zh : name) || name;
  const displayDescription = (locale === 'zh' ? description_zh : description) || description;
  const displayImage = (locale === 'zh' ? image_zh : image) || image;
  const [imageWidth, imageHeight] = (image_dimension?.split('*') || ['400', '600']).map(dim => parseInt(dim));

  return {
    displayName,
    displayDescription,
    displayImage,
    imageWidth,
    imageHeight
  };
}