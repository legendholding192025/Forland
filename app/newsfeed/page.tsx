import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsfeedHero from '@/components/newsfeed/NewsfeedHero';

export default function NewsfeedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewsfeedHero />
      <Footer />
    </div>
  );
}

