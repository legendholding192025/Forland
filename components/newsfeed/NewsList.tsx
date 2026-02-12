'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

interface NewsPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  author: string | null;
  featured: boolean;
  published_at: string | null;
  created_at: string;
}

export default function NewsList() {
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchNewsPosts();
  }, []);

  const fetchNewsPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('news_posts')
        .select('*')
        .eq('published', true)
        .order('featured', { ascending: false })
        .order('published_at', { ascending: false });

      if (error) throw error;
      setNewsPosts(data || []);
    } catch (error: any) {
      console.error('Error fetching news posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-16">
        <p style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>Loading news...</p>
      </div>
    );
  }

  if (newsPosts.length === 0) {
    return (
      <div className="text-center py-16">
        <p style={{ fontFamily: 'Effra, Arial, sans-serif', color: '#666666' }}>
          No news posts available at the moment.
        </p>
      </div>
    );
  }

  // Sort posts: featured first, then by published_at (latest first)
  const sortedPosts = [...newsPosts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime();
  });

  // Get featured post (if any)
  const featuredPost = sortedPosts.find(post => post.featured) || sortedPosts[0];
  
  // Get all posts excluding the featured one, sorted by date (latest first)
  const postsWithoutFeatured = sortedPosts.filter(post => post.id !== featuredPost.id);
  
  // The 4 latest posts for the right side grid
  const latest4Posts = postsWithoutFeatured.slice(0, 4);
  
  // Remaining posts (older ones) that go under "Show More"
  const remainingPosts = postsWithoutFeatured.slice(4);

  // Right side always shows the 4 latest posts
  const displayedOtherPosts = latest4Posts;

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h1
            className="text-4xl lg:text-6xl mb-4"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 700,
              lineHeight: '100%',
            }}
          >
            <span style={{ color: '#DF0011' }}>FORLAND</span>{' '}
            <span style={{ color: '#000000' }}>UAE</span>
          </h1>
          <p
            className="text-base lg:text-lg max-w-4xl"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              color: '#000000',
              lineHeight: '140%',
            }}
          >
            Stay informed with the official news source for Forland UAE, featuring our latest product updates and industry insights. We invite you to review our most recent press releases and corporate statements below.
          </p>
        </motion.div>

        {/* News Grid Layout - Equal Width Sides */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Featured Post (Left) - Takes 6 columns (50%) */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 relative group cursor-pointer"
            >
              <Link href={`/newsfeed/${featuredPost.id}`}>
                <div className="relative w-full h-[400px] lg:h-[550px] rounded-lg overflow-hidden bg-black">
                  {featuredPost.image_url ? (
                    <Image
                      src={featuredPost.image_url}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-black"></div>
                  )}
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h2
                      className="text-2xl lg:text-3xl mb-2 text-white"
                      style={{
                        fontFamily: 'Effra, Arial, sans-serif',
                        fontWeight: 700,
                        lineHeight: '120%',
                      }}
                    >
                      {featuredPost.title}
                    </h2>
                    {featuredPost.excerpt && (
                      <p
                        className="text-sm lg:text-base text-white/90 mb-3 line-clamp-2"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          lineHeight: '140%',
                        }}
                      >
                        {featuredPost.excerpt}
                      </p>
                    )}
                    <span
                      className="inline-block text-white text-sm hover:underline"
                      style={{
                        fontFamily: 'Effra, Arial, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Smaller Posts Grid (Right) - Takes 6 columns (50%), 2x2 grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {displayedOtherPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <Link href={`/newsfeed/${post.id}`}>
                  <div className="relative w-full h-[250px] lg:h-[265px] rounded-lg overflow-hidden bg-black">
                    {post.image_url ? (
                      <Image
                        src={post.image_url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 50vw, 29vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-black"></div>
                    )}
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 bg-gradient-to-t from-black/80 to-transparent">
                      <h3
                        className="text-base lg:text-lg mb-2 text-white line-clamp-2"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 700,
                          lineHeight: '120%',
                        }}
                      >
                        {post.title}
                      </h3>
                      <span
                        className="inline-block text-white text-xs hover:underline"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                        }}
                      >
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Additional Posts Grid (shown when "Show More" is clicked) */}
        {showAll && remainingPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {remainingPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <Link href={`/newsfeed/${post.id}`}>
                  <div className="relative w-full h-[250px] lg:h-[300px] rounded-lg overflow-hidden bg-black">
                    {post.image_url ? (
                      <Image
                        src={post.image_url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-black"></div>
                    )}
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3
                        className="text-lg lg:text-xl mb-2 text-white line-clamp-2"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 700,
                          lineHeight: '120%',
                        }}
                      >
                        {post.title}
                      </h3>
                      <span
                        className="inline-block text-white text-xs lg:text-sm hover:underline"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                        }}
                      >
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Show More / Show Less Button */}
        {remainingPosts.length > 0 && (
          <div className="flex justify-center mt-12">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 text-white rounded-lg relative overflow-hidden group"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                background: 'linear-gradient(90deg, #000000 0%, #910000 100%)',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <div 
                className="hover-overlay absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: '#DF0011',
                  opacity: 0,
                  borderRadius: '7px',
                }}
              ></div>
              <span className="relative z-10 pointer-events-none">
                {showAll ? 'Show Less' : 'Show More'}
              </span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
