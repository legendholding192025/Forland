import { NextResponse } from 'next/server';
import { getPostgresPool } from '@/lib/postgres-pool';
import { isPostgresDataBackend } from '@/lib/env-data';

/**
 * Unfeatures all news posts, optionally except one id (used when setting a new featured post).
 */
export async function POST(request: Request) {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'PostgreSQL backend is not enabled' }, { status: 400 });
  }

  let exceptId: string | null = null;
  try {
    const body = await request.json().catch(() => ({}));
    if (body && typeof body.exceptId === 'string' && body.exceptId) {
      exceptId = body.exceptId;
    }
  } catch {
    // no body
  }

  const pool = getPostgresPool();
  try {
    if (exceptId) {
      await pool.query(`UPDATE news_posts SET featured = false WHERE id <> $1`, [exceptId]);
    } else {
      await pool.query(`UPDATE news_posts SET featured = false`);
    }
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Update failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
