'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

interface NewsPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  author: string | null;
  published_at: string | null;
  created_at: string;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
}

export default function NewsPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchPost(params.id as string);
    }
  }, [params.id]);

  const fetchPost = async (id: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('news_posts')
        .select('*')
        .eq('id', id)
        .eq('published', true)
        .single();

      if (error) throw error;
      if (!data) {
        setError('News post not found');
        return;
      }
      setPost(data);
    } catch (error: any) {
      console.error('Error fetching post:', error);
      setError(error.message || 'Failed to load news post');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-32">
          <p style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center py-32 px-4">
          <h1
            className="text-2xl mb-4"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              color: '#000000',
            }}
          >
            {error || 'News post not found'}
          </h1>
          <Link
            href="/newsfeed"
            className="text-[#DF0011] hover:underline"
            style={{ fontFamily: 'Effra, Arial, sans-serif' }}
          >
            ← Back to Newsfeed
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Link */}
          <Link
            href="/newsfeed"
            className="inline-flex items-center gap-2 mb-8 text-[#DF0011] hover:underline"
            style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}
          >
            ← Back to Newsfeed
          </Link>

          {/* Title */}
          <h1
            className="text-3xl lg:text-5xl mb-6"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              color: '#000000',
              lineHeight: '120%',
            }}
          >
            {post.title}
          </h1>

          {/* Meta Information */}
          <div
            className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200"
            style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}
          >
            {post.published_at && (
              <span style={{ color: '#666666', fontSize: '14px' }}>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {post.author && (
              <>
                <span style={{ color: '#999999' }}>•</span>
                <span style={{ color: '#666666', fontSize: '14px' }}>By {post.author}</span>
              </>
            )}
          </div>

          {/* Image - Placed in the middle of content */}
          {post.image_url && (
            <div className="mb-8">
              <div className="relative w-full" style={{ height: '400px' }}>
                <Image
                  src={post.image_url}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              color: '#000000',
              lineHeight: '180%',
              fontSize: '16px',
            }}
          >
            <div style={{ whiteSpace: 'pre-wrap' }}>{post.content}</div>
          </div>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
}
