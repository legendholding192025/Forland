import Header from '@/components/layout/Header';
import ProductHero from '@/components/products/ProductHero';
import Footer from '@/components/layout/Footer';
import { VehicleSpecifications } from '@/components/products/h7/VehicleSpecifications';
import Container from '@/components/layout/Container';
import ReasonBanner from '@/components/products/h7/ReasonBanner';
import FeaturesSection from '@/components/products/h7/FeaturesSection';
import QuoteSection from '@/components/products/h7/QuoteSection';
import Image from 'next/image';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateStructuredData, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'FORLAND H7 - Premium Cargo Truck',
  description: 'Discover the FORLAND H7 - a premium cargo truck designed for durability, performance, and efficiency. View specifications, features, and book a test drive.',
  keywords: [
    'FORLAND H7',
    'FORLAND H7 price',
    'FORLAND H7 UAE',
    'FORLAND H7 for sale',
    'FORLAND H7 specifications',
    'FORLAND H7 Dubai',
    'H7 cargo truck',
    'H7 truck price',
    'H7 truck specifications',
    'FORLAND H7 price in UAE',
    'H7 commercial truck',
    'buy FORLAND H7',
    'H7 truck dealer',
    'FORLAND H7 features',
    'H7 truck review',
    'FORLAND H7 test drive',
    'cargo truck H7',
    'H7 truck model',
  ],
  url: '/products/h7',
  type: 'product',
});

const productStructuredData = generateStructuredData('Product', {
  name: 'FORLAND H7',
  description: 'Premium cargo truck designed for durability, performance, and efficiency',
  image: `${siteConfig.url}/products/h7`,
  sku: 'FORLAND-H7',
  category: 'Commercial Vehicle',
  vehicleIdentificationNumber: 'FORLAND-H7',
  vehicleModelDate: '2024',
  brand: 'FORLAND',
});

export default function ProductH7Page() {
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
          'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613686/H7-Banner-1_2_1_blth7x.png',
          'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613513/H7-Banner-2_1_rgtaj9.png',
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
                  src="/text/H7-text.svg"
                  alt="H7 Text"
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
            src="/text/H7-text.svg"
            alt="H7 Text"
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
