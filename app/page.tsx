import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import ButtonSection from '@/components/home/ButtonSection';
import ProductSection from '@/components/home/ProductSection';
import AboutSection from '@/components/home/AboutSection';
import TruckSection from '@/components/home/TruckSection';
import ReasonSection from '@/components/home/ReasonSection';
import WhiteSection from '@/components/home/WhiteSection';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Drive The Future, Drive Forland',
  description: 'FORLAND UAE - Premium cargo trucks and commercial vehicles. Explore our range of products including FORLAND H7 and FORLAND L5. Book a test drive or request a quote today.',
  keywords: [
    'truck for sale UAE',
    'commercial vehicles Dubai',
    'cargo trucks for sale',
    'truck dealer Dubai',
    'trucks for sale Dubai',
    'commercial trucks UAE',
    'truck showroom Dubai',
    'buy truck UAE',
    'truck price Dubai',
    'FORLAND trucks',
    'best commercial vehicles UAE',
    'truck dealership UAE',
    'pickup trucks UAE',
    'delivery trucks Dubai',
    'affordable trucks UAE',
  ],
  url: '/',
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ButtonSection />
      <ProductSection />
      <AboutSection />
      <TruckSection />
      <ReasonSection />
      <WhiteSection />
      <Footer />
    </div>
  );
}
