/**
 * Data backend selection. Set NEXT_PUBLIC_DATA_BACKEND=postgres for staging (direct PostgreSQL).
 * Default / production: Supabase (omit or set to supabase).
 */
export function isPostgresDataBackend(): boolean {
  return process.env.NEXT_PUBLIC_DATA_BACKEND === 'postgres';
}
