import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { supabase } from '@/lib/supabase';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> | { id: string } }): Promise<Metadata> {
  try {
    // Handle both sync and async params (Next.js 15+)
    const resolvedParams = await Promise.resolve(params);
    const postId = resolvedParams.id;

    if (!postId) {
      return generateSEOMetadata({
        title: 'News Post Not Found',
        description: 'The requested news post could not be found.',
      });
    }

    const { data: post, error } = await supabase
      .from('news_posts')
      .select('title, excerpt, image_url, seo_title, seo_description, seo_keywords')
      .eq('id', postId)
      .eq('published', true)
      .single();

    if (error || !post) {
      return generateSEOMetadata({
        title: 'News Post Not Found',
        description: 'The requested news post could not be found.',
      });
    }

    // Use SEO fields if available, otherwise fall back to post fields
    const seoTitle = post.seo_title || post.title;
    const seoDescription = post.seo_description || post.excerpt || '';
    const seoKeywords = post.seo_keywords 
      ? post.seo_keywords.split(',').map((k: string) => k.trim()).filter((k: string) => k.length > 0)
      : [];

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://forland.ae';
    const postUrl = `${siteUrl}/newsfeed/${postId}`;

    return generateSEOMetadata({
      title: seoTitle,
      description: seoDescription,
      keywords: seoKeywords,
      image: post.image_url || undefined,
      url: postUrl,
      type: 'article',
    });
  } catch (error) {
    // Silently handle errors to avoid console errors
    return generateSEOMetadata({
      title: 'News Post',
      description: 'FORLAND UAE News',
    });
  }
}

export default function NewsPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
