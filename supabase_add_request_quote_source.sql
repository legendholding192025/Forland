-- Add source column to request_quote for QR code tracking
-- Run in Supabase SQL Editor: Table Editor → request_quote → or run this in SQL Editor

ALTER TABLE request_quote
ADD COLUMN IF NOT EXISTS source TEXT;

COMMENT ON COLUMN request_quote.source IS 'Submission source: qr = from QR code, null/empty = website';
