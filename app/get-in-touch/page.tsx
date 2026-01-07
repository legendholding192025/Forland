import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetInTouchHero from '@/components/get-in-touch/GetInTouchHero';
import GetInTouchForm from '@/components/get-in-touch/GetInTouchForm';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - FORLAND UAE',
  description: 'Get in touch with FORLAND UAE. Contact our team for inquiries about our commercial vehicles, test drives, quotes, service, and support. We are here to help.',
  keywords: [
    'contact FORLAND',
    'FORLAND contact',
    'FORLAND UAE contact',
    'contact truck dealer',
    'commercial vehicle dealer contact',
    'truck dealer Dubai contact',
    'FORLAND phone number',
    'FORLAND email',
    'FORLAND address',
    'truck dealer near me',
    'FORLAND showroom',
    'FORLAND location',
    'contact us truck',
    'truck inquiry',
    'FORLAND customer service',
    'truck dealer contact number',
  ],
  url: '/get-in-touch',
});

export default function GetInTouchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GetInTouchHero />
      <GetInTouchForm />
      <Footer />
    </div>
  );
}

