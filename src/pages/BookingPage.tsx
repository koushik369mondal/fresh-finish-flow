import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Calendar, Clock, Car, CreditCard, Smartphone, Banknote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BookingPage = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  const carTypes = [
    { id: 'hatchback', name: 'Hatchback', icon: '🚗', basePrice: 15 },
    { id: 'sedan', name: 'Sedan', icon: '🚙', basePrice: 20 },
    { id: 'suv', name: 'SUV', icon: '🚐', basePrice: 25 },
  ];

  const services = [
    { id: 'foam', name: 'Foam Wash', price: 10, description: 'Deep cleaning foam wash' },
    { id: 'wax', name: 'Waxing', price: 15, description: 'Premium car wax protection' },
    { id: 'interior', name: 'Interior Cleaning', price: 20, description: 'Complete interior detailing' },
    { id: 'vacuum', name: 'Vacuum Cleaning', price: 8, description: 'Thorough vacuum service' },
    { id: 'polish', name: 'Polish & Shine', price: 12, description: 'High-gloss finish polish' },
  ];

  const paymentOptions = [
    { id: 'upi', name: 'UPI Payment', icon: Smartphone },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'cash', name: 'Cash on Delivery', icon: Banknote },
  ];

  const selectedCarType = carTypes.find(car => car.id === selectedCar);
  const totalServicePrice = selectedServices.reduce((total, serviceId) => {
    const service = services.find(s => s.id === serviceId);
    return total + (service?.price || 0);
  }, 0);
  const totalPrice = (selectedCarType?.basePrice || 0) + totalServicePrice;

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Book Home Car Wash</h1>
          <p className="text-muted-foreground">Schedule a professional car wash at your convenience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Enter Your Address</Label>
                  <Input id="address" placeholder="Enter your full address" className="mt-1" />
                </div>
                <Button variant="outline-fresh" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Detect My Location
                </Button>
              </CardContent>
            </Card>

            {/* Car Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Select Car Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {carTypes.map((car) => (
                    <div
                      key={car.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedCar === car.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedCar(car.id)}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">{car.icon}</div>
                        <h3 className="font-medium text-foreground">{car.name}</h3>
                        <p className="text-sm text-muted-foreground">Base: ${car.basePrice}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={service.id} className="text-base font-medium cursor-pointer">
                        {service.name}
                      </Label>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-lg font-semibold text-primary">${service.price}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Date & Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Select Date</Label>
                  <Input id="date" type="date" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="time">Select Time</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">02:00 PM</SelectItem>
                      <SelectItem value="15:00">03:00 PM</SelectItem>
                      <SelectItem value="16:00">04:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <div
                        key={option.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          paymentMethod === option.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setPaymentMethod(option.id)}
                      >
                        <div className="text-center">
                          <IconComponent className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <h3 className="font-medium text-foreground text-sm">{option.name}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedCarType && (
                  <div className="flex justify-between items-center">
                    <span>{selectedCarType.name}</span>
                    <span>${selectedCarType.basePrice}</span>
                  </div>
                )}
                
                {selectedServices.map(serviceId => {
                  const service = services.find(s => s.id === serviceId);
                  return service ? (
                    <div key={serviceId} className="flex justify-between items-center text-sm">
                      <span>{service.name}</span>
                      <span>${service.price}</span>
                    </div>
                  ) : null;
                })}
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice}</span>
                  </div>
                </div>
                
                <Button 
                  variant="fresh" 
                  className="w-full" 
                  size="lg"
                  disabled={!selectedCar || selectedServices.length === 0 || !paymentMethod}
                >
                  Confirm Booking
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By booking, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingPage;