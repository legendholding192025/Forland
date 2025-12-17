import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import { VehicleSpecifications } from '@/components/products/h7/VehicleSpecifications';
import Container from '@/components/layout/Container';
import ReasonBanner from '@/components/products/h7/ReasonBanner';
import FeaturesSection from '@/components/products/h7/FeaturesSection';
import QuoteSection from '@/components/products/h7/QuoteSection';

export default function ProductH7Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <section className="w-full py-16 bg-[#fafafa]">
        <Container>
          <div className="px-8 sm:px-12 lg:px-28">
            <VehicleSpecifications />
          </div>
        </Container>
      </section>
      <ReasonBanner />
      <FeaturesSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}

