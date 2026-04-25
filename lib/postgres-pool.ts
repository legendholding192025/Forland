import 'server-only';
import { Pool } from 'pg';
import { isPostgresDataBackend } from '@/lib/env-data';

let pool: Pool | null = null;

export function getPostgresPool(): Pool {
  if (!isPostgresDataBackend()) {
    throw new Error('getPostgresPool called when NEXT_PUBLIC_DATA_BACKEND is not postgres');
  }
  if (pool) {
    return pool;
  }

  const host = process.env.POSTGRES_HOST;
  const database = process.env.POSTGRES_DB;
  const user = process.env.POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD;

  if (!host || !database || !user || password === undefined) {
    throw new Error(
      'Missing PostgreSQL env: POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD'
    );
  }

  const port = parseInt(process.env.POSTGRES_PORT || '5432', 10);
  const ssl =
    process.env.POSTGRES_SSL === 'true'
      ? { rejectUnauthorized: process.env.POSTGRES_SSL_REJECT_UNAUTHORIZED !== 'false' }
      : false;

  pool = new Pool({
    host,
    port,
    database,
    user,
    password,
    ssl,
    max: 10,
  });

  return pool;
}
