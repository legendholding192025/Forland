import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <Footer />
    </div>
  );
}

