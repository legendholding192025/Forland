import 'server-only';
import { isPostgresDataBackend } from '@/lib/env-data';
import { getPostgresPool } from '@/lib/postgres-pool';

type MetadataFields = {
  title: string;
  excerpt: string | null;
  image_url: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
};

export async function fetchNewsPostForMetadata(
  id: string
): Promise<MetadataFields | null> {
  if (isPostgresDataBackend()) {
    const pool = getPostgresPool();
    const { rows } = await pool.query<MetadataFields>(
      `SELECT title, excerpt, image_url, seo_title, seo_description, seo_keywords
       FROM news_posts WHERE id = $1 AND published = true`,
      [id]
    );
    return rows[0] ?? null;
  }

  const { supabase } = await import('@/lib/supabase');
  const { data, error } = await supabase
    .from('news_posts')
    .select('title, excerpt, image_url, seo_title, seo_description, seo_keywords')
    .eq('id', id)
    .eq('published', true)
    .single();

  if (error || !data) {
    return null;
  }
  return data as MetadataFields;
}
