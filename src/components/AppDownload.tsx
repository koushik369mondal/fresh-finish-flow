import { Button } from '@/components/ui/button';
import { Smartphone, Download } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Download Our Mobile App
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Get the Fresh Finish mobile app for even faster bookings, exclusive app-only offers, and seamless service management.
          </p>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="outline-aqua" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary flex items-center gap-3 px-6 py-3"
          >
            <Download className="h-5 w-5" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="font-semibold">App Store</div>
            </div>
          </Button>
          
          <Button 
            variant="outline-aqua" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary flex items-center gap-3 px-6 py-3"
          >
            <Download className="h-5 w-5" />
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </Button>
        </div>

        {/* App Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-white/80">
          <div className="text-center">
            <div className="font-semibold mb-1">Quick Booking</div>
            <div className="text-sm">Book in under 30 seconds</div>
          </div>
          <div className="text-center">
            <div className="font-semibold mb-1">Real-time Tracking</div>
            <div className="text-sm">Track your washer's location</div>
          </div>
          <div className="text-center">
            <div className="font-semibold mb-1">Exclusive Offers</div>
            <div className="text-sm">App-only discounts & deals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;