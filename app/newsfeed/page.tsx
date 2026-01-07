import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsfeedHero from '@/components/newsfeed/NewsfeedHero';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'News & Updates - FORLAND UAE',
  description: 'Stay updated with the latest news, updates, and announcements from FORLAND UAE. Learn about new products, events, and developments in commercial vehicles.',
  keywords: [
    'FORLAND news',
    'FORLAND updates',
    'commercial vehicle news',
    'truck news UAE',
    'FORLAND announcements',
    'truck industry news',
    'FORLAND events',
    'commercial vehicle updates',
    'FORLAND latest news',
    'truck market news',
    'FORLAND promotions',
    'truck offers',
    'FORLAND deals',
  ],
  url: '/newsfeed',
});

export default function NewsfeedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewsfeedHero />
      <Footer />
    </div>
  );
}

