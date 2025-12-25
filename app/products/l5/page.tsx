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
          className="absolute z-10 right-4 lg:right-[max(0px,calc((100%-1440px)/2))] w-[120px] h-[100px] lg:w-[288px] lg:h-[238px] top-[350px] sm:top-[450px] md:top-[550px] lg:top-[601px]"
          style={{
            background: '#DF0011',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/text/forland-text.svg"
            alt="Forland Text"
            width={189.34}
            height={27.11}
            className="object-contain w-[70px] lg:w-[189px] h-auto"
          />
          <Image
            src="/text/L5-text.svg"
            alt="L5 Text"
            width={189.95}
            height={67.33}
            className="object-contain w-[70px] lg:w-[190px] h-auto mt-1 lg:mt-4"
          />
          <div
            className="text-[14px] lg:text-[36px] mt-1 lg:mt-4"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              textAlign: 'center',
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

