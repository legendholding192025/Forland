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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'PostgreSQL backend is not enabled' }, { status: 400 });
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const publishedOnly = request.nextUrl.searchParams.get('publishedOnly') === 'true';
  const pool = getPostgresPool();

  try {
    if (publishedOnly) {
      const { rows } = await pool.query(
        `SELECT * FROM news_posts WHERE id = $1 AND published = true`,
        [id]
      );
      return NextResponse.json({ post: rows[0] ?? null });
    }
    const { rows } = await pool.query(`SELECT * FROM news_posts WHERE id = $1`, [id]);
    return NextResponse.json({ post: rows[0] ?? null });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Query failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'PostgreSQL backend is not enabled' }, { status: 400 });
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const row = pickNewsFields(body);
  const keys = Object.keys(row);
  if (keys.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
  }

  const setClause = keys.map((k, i) => `${k} = $${i + 1}`).join(', ');
  const values = [...Object.values(row), id];
  const pool = getPostgresPool();

  try {
    const { rows } = await pool.query(
      `UPDATE news_posts SET ${setClause} WHERE id = $${keys.length + 1} RETURNING *`,
      values
    );
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ post: rows[0] });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Update failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'PostgreSQL backend is not enabled' }, { status: 400 });
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const pool = getPostgresPool();
  try {
    const { rowCount } = await pool.query(`DELETE FROM news_posts WHERE id = $1`, [id]);
    if (rowCount === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Delete failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
