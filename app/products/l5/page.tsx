import Header from '@/components/layout/Header';
import ProductHero from '@/components/products/ProductHero';
import Footer from '@/components/layout/Footer';
import { VehicleSpecifications } from '@/components/products/l5/VehicleSpecifications';
import Container from '@/components/layout/Container';
import ReasonBanner from '@/components/products/l5/ReasonBanner';
import FeaturesSection from '@/components/products/l5/FeaturesSection';
import QuoteSection from '@/components/products/l5/QuoteSection';
import Image from 'next/image';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateStructuredData, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'FORLAND L5 - Premium Cargo Truck',
  description: 'Discover the FORLAND L5 - a premium cargo truck designed for durability, performance, and efficiency. View specifications, features, and book a test drive.',
  keywords: [
    'FORLAND L5',
    'FORLAND L5 price',
    'FORLAND L5 UAE',
    'FORLAND L5 for sale',
    'FORLAND L5 specifications',
    'FORLAND L5 Dubai',
    'L5 cargo truck',
    'L5 truck price',
    'L5 truck specifications',
    'FORLAND L5 price in UAE',
    'L5 commercial truck',
    'buy FORLAND L5',
    'L5 truck dealer',
    'FORLAND L5 features',
    'L5 truck review',
    'FORLAND L5 test drive',
    'cargo truck L5',
    'L5 truck model',
  ],
  url: '/products/l5',
  type: 'product',
});

const productStructuredData = generateStructuredData('Product', {
  name: 'FORLAND L5',
  description: 'Premium cargo truck designed for durability, performance, and efficiency',
  image: `${siteConfig.url}/products/l5`,
  sku: 'FORLAND-L5',
  category: 'Commercial Vehicle',
  vehicleIdentificationNumber: 'FORLAND-L5',
  vehicleModelDate: '2024',
  brand: 'FORLAND',
});

export default function ProductL5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <div className="min-h-screen bg-white">
        <Header />
      <div className="relative">
        <ProductHero images={[
          'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613593/L5-Banner-1_1_to0mgs.png',
          'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613545/L5-Banner-2_1_sokczh.png',
        ]} />
        <section className="w-full py-16 bg-[#fafafa]">
          <Container>
            <div className="px-8 sm:px-12 lg:px-28">
              <VehicleSpecifications />
            </div>
          </Container>
        </section>
        
        {/* Red box with model name - Desktop */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
          <div className="h-full mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ maxWidth: '1440px' }}>
            <div
              className="absolute right-8 w-[288px] h-[238px] pointer-events-auto"
              style={{
                top: 'calc(85vh - 119px)',
              }}
            >
              <div
                className="w-full h-full"
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
                  className="object-contain w-[189px] h-auto"
                />
                <Image
                  src="/text/L5-text.svg"
                  alt="L5 Text"
                  width={189.95}
                  height={67.33}
                  className="object-contain w-[190px] h-auto mt-4"
                />
                <div
                  className="text-[36px] mt-4"
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
          </div>
        </div>
        
        {/* Red box with model name - Mobile */}
        <div
          className="flex lg:hidden absolute z-10 right-4 w-[120px] h-[100px] top-[300px] sm:top-[400px] md:top-[500px]"
          style={{
            background: '#DF0011',
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
            className="object-contain w-[70px] h-auto"
          />
          <Image
            src="/text/L5-text.svg"
            alt="L5 Text"
            width={189.95}
            height={67.33}
            className="object-contain w-[70px] h-auto mt-1"
          />
          <div
            className="text-[14px] mt-1"
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
    </>
  );
}

