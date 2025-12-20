import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import AboutReasonSection from '@/components/about/AboutReasonSection';
import AboutCommitmentSection from '@/components/about/AboutCommitmentSection';

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

