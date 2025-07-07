import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      avatar: '',
      initials: 'SJ',
      rating: 5,
      comment: 'Absolutely amazing service! The washers arrived on time and my car looks brand new. Will definitely book again.',
      service: 'Premium Wash',
    },
    {
      name: 'Mike Chen',
      avatar: '',
      initials: 'MC',
      rating: 5,
      comment: 'Super convenient booking process. The app is so easy to use and the quality of work is outstanding.',
      service: 'Interior + Exterior',
    },
    {
      name: 'Emily Davis',
      avatar: '',
      initials: 'ED',
      rating: 5,
      comment: 'Great value for money! Professional service and my car has never looked better. Highly recommend Fresh Finish.',
      service: 'Express Wash',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-fresh-warning fill-fresh-warning' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-fresh-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Fresh Finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Comment */}
                <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{review.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-gradient-primary text-white font-medium">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.service}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-card px-6 py-3 rounded-full shadow-card">
            <div className="flex items-center">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;