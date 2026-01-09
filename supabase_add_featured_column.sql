-- Add featured column to existing news_posts table
-- Run this in your Supabase SQL Editor if the table already exists

ALTER TABLE news_posts 
ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Add index for featured posts
CREATE INDEX IF NOT EXISTS idx_news_posts_featured ON news_posts(featured, published_at DESC);
