import { NextRequest, NextResponse } from 'next/server';
import { getPostgresPool } from '@/lib/postgres-pool';
import { isPostgresDataBackend } from '@/lib/env-data';
import { FORM_COLUMNS, FORM_TABLES, type FormTable } from '@/lib/db/form-allowlists';

function isFormTable(t: string): t is FormTable {
  return (FORM_TABLES as readonly string[]).includes(t);
}

export async function POST(request: NextRequest) {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'PostgreSQL backend is not enabled' }, { status: 400 });
  }

  let body: { table?: string; data?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { table, data } = body;
  if (!table || !data || typeof data !== 'object') {
    return NextResponse.json({ error: 'Expected { table, data }' }, { status: 400 });
  }

  if (!isFormTable(table)) {
    return NextResponse.json({ error: 'Invalid table' }, { status: 400 });
  }

  const allowed = FORM_COLUMNS[table];
  const entries = Object.entries(data).filter(
    ([k, v]) => allowed.includes(k) && v !== undefined
  );

  if (entries.length === 0) {
    return NextResponse.json({ error: 'No valid columns to insert' }, { status: 400 });
  }

  const cols = entries.map(([k]) => k);
  const values = entries.map(([, v]) => v);
  const placeholders = cols.map((_, i) => `$${i + 1}`).join(', ');

  const pool = getPostgresPool();
  const sql = `INSERT INTO ${table} (${cols.join(', ')}) VALUES (${placeholders})`;

  try {
    await pool.query(sql, values);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Insert failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
