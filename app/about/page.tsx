import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import AboutReasonSection from '@/components/about/AboutReasonSection';
import AboutCommitmentSection from '@/components/about/AboutCommitmentSection';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About FORLAND UAE',
  description: 'Learn about FORLAND UAE - a leading provider of premium commercial vehicles and cargo trucks in the UAE. Discover our commitment to quality, innovation, and customer satisfaction.',
  keywords: [
    'FORLAND UAE',
    'about FORLAND',
    'FORLAND company',
    'FORLAND history',
    'commercial vehicle dealer UAE',
    'truck company Dubai',
    'FORLAND dealership',
    'Legend Commercial Vehicles',
    'FORLAND brand',
    'truck manufacturer UAE',
    'commercial vehicle company',
    'FORLAND story',
    'trusted truck dealer',
    'FORLAND experience',
  ],
  url: '/about',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutContent />
      <AboutReasonSection />
      <AboutCommitmentSection />
      <Footer />
    </div>
  );
}

