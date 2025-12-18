import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import { VehicleSpecifications } from '@/components/products/l5/VehicleSpecifications';
import Container from '@/components/layout/Container';
import ReasonBanner from '@/components/products/l5/ReasonBanner';
import FeaturesSection from '@/components/products/l5/FeaturesSection';
import QuoteSection from '@/components/products/l5/QuoteSection';
import Image from 'next/image';

export default function ProductL5Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative">
        <Hero />
        <section className="w-full py-16 bg-[#fafafa]">
          <Container>
            <div className="px-8 sm:px-12 lg:px-28">
              <VehicleSpecifications />
            </div>
          </Container>
        </section>
        
        {/* Red box with model name - overlapping hero and specs */}
        <div
          className="absolute z-10"
          style={{
            top: '601px',
            right: 'max(0px, calc((100% - 1440px) / 2))',
            width: '288px',
            height: '238px',
            background: '#DF0011',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Image
            src="/text/forland-text.svg"
            alt="Forland Text"
            width={189.34}
            height={27.11}
            className="object-contain"
          />
          <Image
            src="/text/L5-text.svg"
            alt="L5 Text"
            width={189.95}
            height={67.33}
            className="object-contain"
          />
          <div
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '190px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Cargo Truck
          </div>
        </div>
      </div>
      <ReasonBanner />
      <FeaturesSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}

