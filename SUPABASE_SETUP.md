# Supabase Integration Setup Guide

## Prerequisites
- Supabase project created
- Database tables created (using `supabase_schema.sql`)

## Environment Variables Setup

1. Create a `.env.local` file in the root of the `forland` directory (same level as `package.json`)

2. Add the following environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. To find these values:
   - Go to your Supabase project dashboard: https://app.supabase.com
   - Select your project
   - Go to **Settings** → **API**
   - Copy the **Project URL** and paste it as `NEXT_PUBLIC_SUPABASE_URL`
   - Copy the **anon/public** key and paste it as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Database Tables

The following tables should be created in your Supabase database:
- `test_drive`
- `request_quote`
- `service`
- `get_in_touch`
- `news_posts`

Run the SQL queries from `supabase_schema.sql` in your Supabase SQL Editor if you haven't already.

## Admin Dashboard

The admin dashboard is available at `/admin/dashboard` for managing news posts.

### Admin Password Setup

1. Add the admin password to your `.env.local` file:
   ```env
   NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
   ```

2. If not set, the default password is `admin123` (change this in production!)

3. Access the admin dashboard:
   - Navigate to `/admin/dashboard`
   - Enter your admin password
   - You can create, edit, publish, and delete news posts

### Admin Dashboard Features

- ✅ Create new news posts
- ✅ Edit existing posts
- ✅ Publish/Unpublish posts
- ✅ Delete posts
- ✅ View all posts (published and drafts)
- ✅ Simple password authentication

## Testing the Forms

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test each form:
   - Test Drive: `/test-drive`
   - Request Quote: `/request-quote`
   - Service: `/service`
   - Get In Touch: `/get-in-touch`

3. After submitting a form, check your Supabase dashboard:
   - Go to **Table Editor**
   - Select the corresponding table
   - Verify that the data was inserted correctly

## Features Implemented

✅ Form submission to Supabase
✅ Loading states during submission
✅ Success/error messages
✅ Form reset after successful submission
✅ Input validation (HTML5 required fields)

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env.local` file exists in the root directory
- Verify the environment variable names are correct (must start with `NEXT_PUBLIC_`)
- Restart your development server after adding environment variables

### Form submission fails
- Check that the tables exist in your Supabase database
- Verify Row Level Security (RLS) policies allow inserts
- Check the browser console for detailed error messages
- Ensure your Supabase project URL and anon key are correct

### Data not appearing in Supabase
- Check RLS policies - they should allow `anon` role to insert
- Verify table names match exactly (case-sensitive)
- Check column names match the form field names

