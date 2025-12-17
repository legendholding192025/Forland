import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import ButtonSection from '@/components/home/ButtonSection';
import ProductSection from '@/components/home/ProductSection';
import AboutSection from '@/components/home/AboutSection';
import TruckSection from '@/components/home/TruckSection';
import ReasonSection from '@/components/home/ReasonSection';
import WhiteSection from '@/components/home/WhiteSection';
import Footer from '@/components/layout/Footer';

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
