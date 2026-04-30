import { NextRequest, NextResponse } from 'next/server';
import { isPostgresDataBackend } from '@/lib/env-data';
import { getPostgresPool } from '@/lib/postgres-pool';

const TABLES = ['get_in_touch', 'request_quote', 'test_drive', 'service'] as const;

export async function GET() {
  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'Unsupported data backend' }, { status: 500 });
  }

  const pool = getPostgresPool();
  const errors: string[] = [];
  const leads: any[] = [];

  for (const table of TABLES) {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM ${table} ORDER BY created_at DESC`
      );
      for (const row of rows) {
        leads.push({ ...row, _lead_type: table });
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      errors.push(`${table}: ${msg}`);
    }
  }

  leads.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return NextResponse.json({
    leads,
    errors,
    usingServiceKey: true,
    dataBackend: 'postgres',
  });
}

export async function DELETE(request: NextRequest) {
  const { table, id } = await request.json();

  if (!TABLES.includes(table) || !id) {
    return NextResponse.json({ error: 'Invalid table or id' }, { status: 400 });
  }

  if (!isPostgresDataBackend()) {
    return NextResponse.json({ error: 'Unsupported data backend' }, { status: 500 });
  }

  const pool = getPostgresPool();
  try {
    const { rowCount } = await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
    if (rowCount === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Delete failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
