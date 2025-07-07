import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Filter, Clock, DollarSign, Percent } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WashCentersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('distance');
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const washCenters = [
    {
      id: 1,
      name: 'Fresh Finish Downtown',
      distance: '1.2 km',
      rating: 4.8,
      reviews: 324,
      priceRange: '$15-$35',
      offers: ['20% off first visit', 'Free vacuum'],
      openTime: '8:00 AM - 8:00 PM',
      services: ['Exterior Wash', 'Interior Detail', 'Waxing'],
      image: '🏢',
    },
    {
      id: 2,
      name: 'Premium Auto Spa',
      distance: '2.1 km',
      rating: 4.9,
      reviews: 567,
      priceRange: '$20-$50',
      offers: ['Premium detailing discount'],
      openTime: '7:00 AM - 9:00 PM',
      services: ['Premium Detail', 'Paint Protection', 'Ceramic Coating'],
      image: '🏪',
    },
    {
      id: 3,
      name: 'Quick Clean Express',
      distance: '0.8 km',
      rating: 4.6,
      reviews: 198,
      priceRange: '$10-$25',
      offers: ['Express wash special', 'Student discount'],
      openTime: '9:00 AM - 7:00 PM',
      services: ['Express Wash', 'Basic Detail', 'Tire Shine'],
      image: '🚗',
    },
    {
      id: 4,
      name: 'Eco Wash Station',
      distance: '3.5 km',
      rating: 4.7,
      reviews: 411,
      priceRange: '$18-$40',
      offers: ['Eco-friendly products', 'Loyalty rewards'],
      openTime: '8:30 AM - 6:30 PM',
      services: ['Eco Wash', 'Steam Cleaning', 'Waterless Wash'],
      image: '🌱',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating) ? 'text-fresh-warning fill-fresh-warning' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Wash Centers Near You</h1>
          <p className="text-muted-foreground">Discover professional car wash centers in your area</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[600px]">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-fresh-gray-light to-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">Map integration would show wash center locations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Search wash centers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distance">Nearest First</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="price">Lowest Price</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select value={priceFilter} onValueChange={setPriceFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Price Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="low">$10-$20</SelectItem>
                        <SelectItem value="medium">$20-$35</SelectItem>
                        <SelectItem value="high">$35+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select value={ratingFilter} onValueChange={setRatingFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Ratings</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                        <SelectItem value="4.0">4.0+ Stars</SelectItem>
                        <SelectItem value="3.5">3.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wash Centers List */}
            <div className="space-y-4">
              {washCenters.map((center) => (
                <Card key={center.id} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{center.image}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{center.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {center.distance}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {center.openTime}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {renderStars(center.rating)}
                          <span className="text-sm font-medium ml-1">{center.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">({center.reviews} reviews)</p>
                      </div>
                    </div>

                    {/* Price and Offers */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-primary font-semibold">
                        <DollarSign className="h-4 w-4" />
                        {center.priceRange}
                      </div>
                      {center.offers.map((offer, index) => (
                        <Badge key={index} variant="secondary" className="bg-fresh-aqua/10 text-fresh-aqua">
                          <Percent className="h-3 w-3 mr-1" />
                          {offer}
                        </Badge>
                      ))}
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {center.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button variant="fresh" className="flex-1">
                        Book Now
                      </Button>
                      <Button variant="outline-fresh">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WashCentersPage;