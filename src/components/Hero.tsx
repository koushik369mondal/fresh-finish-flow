import { Button } from '@/components/ui/button';
import { MapPin, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-car.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pristine car after wash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Book Car Wash in{' '}
          <span className="text-fresh-aqua">Seconds</span>
          <br />
          At Home or Nearby
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Professional car wash services delivered to your doorstep or visit our premium wash centers
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/book" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Book Home Wash
            </Link>
          </Button>
          
          <Button variant="outline-aqua" size="xl" asChild>
            <Link to="/centers" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
              <MapPin className="h-5 w-5" />
              Find Wash Centers
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Professional Washers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Wash Centers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;