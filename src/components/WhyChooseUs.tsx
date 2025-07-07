import { DollarSign, Shield, Zap, Gift } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing. No hidden charges, just quality service.',
      color: 'text-fresh-success',
      bgColor: 'bg-fresh-success/10',
    },
    {
      icon: Shield,
      title: 'Trusted Washers',
      description: 'All our washers are verified, trained professionals who care about your vehicle.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Zap,
      title: 'Fast Booking',
      description: 'Book in under 60 seconds. Quick, easy, and hassle-free scheduling.',
      color: 'text-fresh-warning',
      bgColor: 'bg-fresh-warning/10',
    },
    {
      icon: Gift,
      title: 'Reward Points',
      description: 'Earn points with every wash. Redeem for discounts and exclusive offers.',
      color: 'text-fresh-aqua',
      bgColor: 'bg-fresh-aqua/10',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Fresh Finish?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best car wash experience with premium quality and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`h-6 w-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;