import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RequestQuoteHero from '@/components/request-quote/RequestQuoteHero';
import RequestQuoteForm from '@/components/request-quote/RequestQuoteForm';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Request a Quote - FORLAND UAE',
  description: 'Get a competitive quote for FORLAND H7 or L5 cargo trucks. Contact us for pricing, financing options, and special offers on commercial vehicles in the UAE.',
  keywords: [
    'truck quote',
    'FORLAND quote',
    'truck price',
    'truck price Dubai',
    'truck price UAE',
    'request quote truck',
    'commercial vehicle quote',
    'truck pricing UAE',
    'truck price estimate',
    'H7 price',
    'L5 price',
    'truck financing',
    'truck loan UAE',
    'truck lease',
    'truck payment plans',
    'get truck quote',
    'truck cost',
    'truck inquiry',
  ],
  url: '/request-quote',
});

export default function RequestQuotePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RequestQuoteHero />
      <RequestQuoteForm />
      <Footer />
    </div>
  );
}

