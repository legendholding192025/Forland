# Google Search Console - URLs for Inspection and Indexing

## Sitemap URL

Submit this sitemap URL to Google Search Console:
```
https://forland.ae/sitemap.xml
```

## All Page URLs for URL Inspection

Use these URLs in Google Search Console's URL Inspection tool to request indexing:

### Priority 1.0 - Homepage
```
https://forland.ae/
```

### Priority 0.9 - Product Pages
```
https://forland.ae/products/h7
https://forland.ae/products/l5
```

### Priority 0.8 - Conversion Pages
```
https://forland.ae/test-drive
https://forland.ae/request-quote
https://forland.ae/service
https://forland.ae/about
```

### Priority 0.7 - Information Pages
```
https://forland.ae/get-in-touch
https://forland.ae/newsfeed
```

### No Index Pages (Do NOT submit for indexing)
These pages should NOT be submitted as they are excluded from indexing:
```
https://forland.ae/privacy-policy
https://forland.ae/thank-you
```

## How to Submit to Google Search Console

### Method 1: Submit Sitemap (Recommended)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (https://forland.ae)
3. Navigate to **Sitemaps** in the left menu
4. Enter: `sitemap.xml`
5. Click **Submit**

### Method 2: URL Inspection Tool (For individual pages)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Use the **URL Inspection** tool at the top
4. Paste each URL from the list above
5. Click **Request Indexing** for each page

### Method 3: Bulk URL Submission
1. Use Google Search Console's **URL Inspection** tool
2. Submit pages in batches (up to 10 per day per property)
3. Focus on high-priority pages first:
   - Homepage
   - Product pages (H7, L5)
   - Conversion pages (test-drive, request-quote, service)

## Quick Copy List (All Indexable URLs)

Copy and paste this list for quick reference:

```
https://forland.ae/
https://forland.ae/about
https://forland.ae/products/h7
https://forland.ae/products/l5
https://forland.ae/test-drive
https://forland.ae/request-quote
https://forland.ae/get-in-touch
https://forland.ae/service
https://forland.ae/newsfeed
```

## Additional Important URLs

### Robots.txt
```
https://forland.ae/robots.txt
```

### Verification
After submitting, verify in Google Search Console:
- **Coverage Report**: Check which pages are indexed
- **Sitemaps**: Confirm sitemap is processed
- **Performance**: Monitor search performance after indexing

## Notes

- **Sitemap Priority**: The sitemap is automatically generated and includes all indexable pages
- **Update Frequency**: Sitemap updates automatically with each deployment
- **Excluded Pages**: Privacy Policy and Thank You pages are excluded from indexing (noindex meta tag)
- **Canonical URLs**: All pages have proper canonical URLs set in metadata

## Environment Variable

Make sure `NEXT_PUBLIC_SITE_URL` is set in your production environment:
```
NEXT_PUBLIC_SITE_URL=https://forland.ae
```

This ensures all canonical URLs and sitemap URLs use the correct domain.

