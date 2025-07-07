import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomerReviews from '@/components/CustomerReviews';
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerReviews />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Homepage;