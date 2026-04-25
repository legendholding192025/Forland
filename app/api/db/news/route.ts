import { NextRequest, NextResponse } from 'next/server';
import { getPostgresPool } from '@/lib/postgres-pool';
import { isPostgresDataBackend } from '@/lib/env-data';
import { NEWS_MUTATE_COLUMNS } from '@/lib/db/form-allowlists';

function pickNewsFields(data: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const k of NEWS_MUTATE_COLUMNS) {
    if (k in data && data[k] !== undefined) {
      out[k] = data[k];
    }
  }
  return out;
}

export async function GET(request: NextRequest) {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'PostgreSQL backend is not enabled' }, { status: 400 });
  }

  const scope = request.nextUrl.searchParams.get('scope') || 'published';
  const pool = getPostgresPool();

  try {
    if (scope === 'all') {
      const { rows } = await pool.query(
        `SELECT * FROM news_posts ORDER BY created_at DESC`
      );
      return NextResponse.json({ posts: rows });
    }

    const { rows } = await pool.query(
      `SELECT * FROM news_posts WHERE published = true
       ORDER BY featured DESC NULLS LAST, published_at DESC NULLS LAST`
    );
    return NextResponse.json({ posts: rows });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Query failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'PostgreSQL backend is not enabled' }, { status: 400 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const row = pickNewsFields(body);
  if (!row.title || !row.content) {
    return NextResponse.json({ error: 'title and content are required' }, { status: 400 });
  }

  const keys = Object.keys(row);
  const values = Object.values(row);
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');

  const pool = getPostgresPool();
  try {
    const { rows } = await pool.query(
      `INSERT INTO news_posts (${keys.join(', ')}) VALUES (${placeholders}) RETURNING *`,
      values
    );
    return NextResponse.json({ post: rows[0] });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Insert failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
