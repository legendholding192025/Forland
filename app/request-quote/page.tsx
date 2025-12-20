import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RequestQuoteHero from '@/components/request-quote/RequestQuoteHero';
import RequestQuoteForm from '@/components/request-quote/RequestQuoteForm';

export default function RequestQuotePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RequestQuoteHero />
      <RequestQuoteForm />
      <Footer />
    </div>
  );
}

