import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceForm from '@/components/service/ServiceForm';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Book a Service - FORLAND UAE',
  description: 'Book service and maintenance for your FORLAND vehicle. Professional service, genuine parts, and expert technicians to keep your commercial vehicle running at peak performance.',
  keywords: [
    'truck service',
    'FORLAND service',
    'truck maintenance',
    'truck service Dubai',
    'truck service UAE',
    'commercial vehicle service',
    'truck service center',
    'truck repair',
    'truck servicing',
    'truck maintenance Dubai',
    'truck service booking',
    'truck service appointment',
    'FORLAND service center',
    'truck parts',
    'truck warranty',
    'truck service near me',
    'truck maintenance UAE',
    'truck checkup',
    'truck inspection',
  ],
  url: '/service',
});

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <ServiceForm />
      <Footer />
    </div>
  );
}

