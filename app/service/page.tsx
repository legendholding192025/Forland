import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceForm from '@/components/service/ServiceForm';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero />
      <ServiceForm />
      <Footer />
    </div>
  );
}

