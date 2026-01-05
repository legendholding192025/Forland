-- Supabase Database Schema for Forland Website Forms
-- Run these queries in your Supabase SQL Editor

-- ============================================
-- 1. Test Drive Form Table
-- ============================================
CREATE TABLE IF NOT EXISTS test_drive (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  model VARCHAR(10) NOT NULL CHECK (model IN ('h7', 'l5')),
  emirates VARCHAR(50) NOT NULL CHECK (emirates IN ('abu-dhabi', 'dubai', 'sharjah', 'ajman', 'umm-al-quwain', 'ras-al-khaimah', 'fujairah')),
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 2. Request Quote Form Table
-- ============================================
CREATE TABLE IF NOT EXISTS request_quote (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  subject VARCHAR(50) NOT NULL CHECK (subject IN ('general-inquiry', 'product-information', 'pricing', 'test-drive', 'service', 'other')),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 3. Service Form Table
-- ============================================
CREATE TABLE IF NOT EXISTS service (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 4. Get In Touch Form Table
-- ============================================
CREATE TABLE IF NOT EXISTS get_in_touch (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Indexes for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_test_drive_email ON test_drive(email);
CREATE INDEX IF NOT EXISTS idx_test_drive_created_at ON test_drive(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_request_quote_email ON request_quote(email);
CREATE INDEX IF NOT EXISTS idx_request_quote_created_at ON request_quote(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_service_email ON service(email);
CREATE INDEX IF NOT EXISTS idx_service_created_at ON service(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_get_in_touch_email ON get_in_touch(email);
CREATE INDEX IF NOT EXISTS idx_get_in_touch_created_at ON get_in_touch(created_at DESC);

-- ============================================
-- Function to automatically update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- Triggers to automatically update updated_at
-- ============================================
CREATE TRIGGER update_test_drive_updated_at
  BEFORE UPDATE ON test_drive
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_request_quote_updated_at
  BEFORE UPDATE ON request_quote
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_service_updated_at
  BEFORE UPDATE ON service
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_get_in_touch_updated_at
  BEFORE UPDATE ON get_in_touch
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Row Level Security (RLS) Policies
-- Enable RLS and create policies based on your needs
-- ============================================

-- Enable RLS on all tables
ALTER TABLE test_drive ENABLE ROW LEVEL SECURITY;
ALTER TABLE request_quote ENABLE ROW LEVEL SECURITY;
ALTER TABLE service ENABLE ROW LEVEL SECURITY;
ALTER TABLE get_in_touch ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for form submissions)
-- Adjust these policies based on your authentication requirements
CREATE POLICY "Allow public insert on test_drive"
  ON test_drive FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on request_quote"
  ON request_quote FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on service"
  ON service FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on get_in_touch"
  ON get_in_touch FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can read (adjust as needed)
-- You may want to restrict this further or allow public reads
CREATE POLICY "Allow authenticated read on test_drive"
  ON test_drive FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on request_quote"
  ON request_quote FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on service"
  ON service FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on get_in_touch"
  ON get_in_touch FOR SELECT
  TO authenticated
  USING (true);

