-- Add SEO columns to news_posts table
ALTER TABLE news_posts 
ADD COLUMN IF NOT EXISTS seo_title VARCHAR(500),
ADD COLUMN IF NOT EXISTS seo_description TEXT,
ADD COLUMN IF NOT EXISTS seo_keywords TEXT;

-- Add comment for documentation
COMMENT ON COLUMN news_posts.seo_title IS 'Custom SEO title for the news post';
COMMENT ON COLUMN news_posts.seo_description IS 'Custom SEO meta description for the news post';
COMMENT ON COLUMN news_posts.seo_keywords IS 'Comma-separated SEO keywords for the news post';
