import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Use service role key if available (bypasses RLS), otherwise fall back to anon key
  const key =
    serviceKey && serviceKey.startsWith('ey')
      ? serviceKey
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

const TABLES = ['get_in_touch', 'request_quote', 'test_drive', 'service'] as const;

export async function GET() {
  const sb = getAdminClient();

  const results = await Promise.all(
    TABLES.map((table) =>
      sb
        .from(table)
        .select('*')
        .order('created_at', { ascending: false })
        .then((res) => ({ table, data: res.data, error: res.error }))
    )
  );

  const errors: string[] = [];
  const leads: any[] = [];

  for (const { table, data, error } of results) {
    if (error) {
      errors.push(`${table}: ${error.message}`);
      continue;
    }
    for (const row of data || []) {
      leads.push({ ...row, _lead_type: table });
    }
  }

  leads.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const hasServiceKey =
    !!process.env.SUPABASE_SERVICE_ROLE_KEY &&
    process.env.SUPABASE_SERVICE_ROLE_KEY.startsWith('ey');

  return NextResponse.json({
    leads,
    errors,
    usingServiceKey: hasServiceKey,
  });
}

export async function DELETE(request: NextRequest) {
  const { table, id } = await request.json();

  if (!TABLES.includes(table) || !id) {
    return NextResponse.json({ error: 'Invalid table or id' }, { status: 400 });
  }

  const sb = getAdminClient();
  const { error } = await sb.from(table).delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
