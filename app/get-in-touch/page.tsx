import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetInTouchHero from '@/components/get-in-touch/GetInTouchHero';
import GetInTouchForm from '@/components/get-in-touch/GetInTouchForm';

export default function GetInTouchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GetInTouchHero />
      <GetInTouchForm />
      <Footer />
    </div>
  );
}

