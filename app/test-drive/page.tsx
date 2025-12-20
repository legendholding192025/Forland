import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TestDriveHero from '@/components/test-drive/TestDriveHero';
import TestDriveForm from '@/components/test-drive/TestDriveForm';

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

