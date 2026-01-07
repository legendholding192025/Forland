import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TestDriveHero from '@/components/test-drive/TestDriveHero';
import TestDriveForm from '@/components/test-drive/TestDriveForm';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Book a Test Drive - FORLAND UAE',
  description: 'Book a test drive for FORLAND H7 or L5 cargo trucks. Experience the power, performance, and quality of our premium commercial vehicles in the UAE.',
  keywords: [
    'book test drive',
    'test drive truck',
    'FORLAND test drive',
    'truck test drive Dubai',
    'test drive H7',
    'test drive L5',
    'truck test drive UAE',
    'book test drive Dubai',
    'test drive commercial vehicle',
    'truck trial',
    'test drive booking',
    'truck demonstration',
    'test drive appointment',
    'truck experience',
    'try truck before buy',
  ],
  url: '/test-drive',
});

export default function TestDrivePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TestDriveHero />
      <TestDriveForm />
      <Footer />
    </div>
  );
}

