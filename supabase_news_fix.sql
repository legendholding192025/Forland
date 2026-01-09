-- Fix for Admin Dashboard News Posts Access
-- Run this in your Supabase SQL Editor to allow admin to read all posts

-- Drop the existing policy that only allows reading published posts for anonymous users
DROP POLICY IF EXISTS "Allow public read published news" ON news_posts;

-- Create a new policy that allows anonymous users to read ALL posts (for admin dashboard)
-- This is needed because the admin dashboard uses the anon key
CREATE POLICY "Allow anonymous read all news"
  ON news_posts FOR SELECT
  TO anon, authenticated
  USING (true);

-- Keep the policy for managing news (insert/update/delete)
-- This should already exist, but ensuring it's there
DROP POLICY IF EXISTS "Allow anonymous manage news" ON news_posts;
CREATE POLICY "Allow anonymous manage news"
  ON news_posts FOR ALL
  TO anon
  USING (true)
  WITH CHECK (true);

-- Note: The public newsfeed page will filter by published=true in the application code
-- So only published posts will be shown to visitors, even though the policy allows reading all
