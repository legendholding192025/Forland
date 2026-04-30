/**
 * Browser-safe data access via Postgres-backed API routes.
 */
import { isPostgresDataBackend } from '@/lib/env-data';

const jsonHeaders = { 'Content-Type': 'application/json' };

export async function insertFormRow(
  table: 'test_drive' | 'get_in_touch' | 'service' | 'request_quote',
  data: Record<string, string | null | undefined>
): Promise<void> {
  const clean: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (v !== undefined) {
      clean[k] = v;
    }
  }

  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch('/api/db/forms', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ table, data: clean }),
  });
  const j = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Failed to save form');
  }
}

export type NewsPostRow = {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  author: string | null;
  featured: boolean;
  published: boolean;
  published_at: string | null;
  created_at: string;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
};

export async function fetchPublishedNewsPosts(): Promise<NewsPostRow[]> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch('/api/db/news?scope=published');
  const j = (await res.json()) as { posts?: NewsPostRow[]; error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Failed to load news');
  }
  return j.posts || [];
}

export async function fetchNewsPostById(
  id: string,
  options: { requirePublished: boolean }
): Promise<NewsPostRow | null> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const q = options.requirePublished ? '?publishedOnly=true' : '';
  const res = await fetch(`/api/db/news/${id}${q}`);
  const j = (await res.json()) as { post?: NewsPostRow | null; error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Failed to load post');
  }
  return j.post ?? null;
}

export async function fetchAllNewsPostsForAdmin(): Promise<NewsPostRow[]> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch('/api/db/news?scope=all');
  const j = (await res.json()) as { posts?: NewsPostRow[]; error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Failed to load news');
  }
  return j.posts || [];
}

export async function deleteNewsPost(id: string): Promise<void> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch(`/api/db/news/${id}`, { method: 'DELETE' });
  const j = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Delete failed');
  }
}

export async function updateNewsPostPublished(
  id: string,
  update: { published: boolean; published_at: string | null }
): Promise<void> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch(`/api/db/news/${id}`, {
    method: 'PATCH',
    headers: jsonHeaders,
    body: JSON.stringify(update),
  });
  const j = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Update failed');
  }
}

export async function resetFeaturedNewsPosts(exceptId: string | null): Promise<void> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch('/api/db/news/reset-featured', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(exceptId ? { exceptId } : {}),
  });
  const j = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Failed to update featured state');
  }
}

export async function createNewsPost(
  row: Record<string, string | boolean | null | undefined>
): Promise<void> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch('/api/db/news', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(row),
  });
  const j = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Failed to create post');
  }
}

export async function updateNewsPost(
  id: string,
  row: Record<string, string | boolean | null | undefined>
): Promise<void> {
  if (!isPostgresDataBackend()) {
    throw new Error('Unsupported data backend');
  }

  const res = await fetch(`/api/db/news/${id}`, {
    method: 'PATCH',
    headers: jsonHeaders,
    body: JSON.stringify(row),
  });
  const j = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(j.error || 'Failed to update post');
  }
}
