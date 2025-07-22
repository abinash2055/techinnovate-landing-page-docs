import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const pricingTiers = [
  {
    name: "Virtual Access",
    price: "$99",
    originalPrice: null,
    description: "Online live streaming only",
    availability: "Until March 15, 2025",
    features: [
      "Live streaming of all sessions",
      "Access to virtual networking",
      "Digital conference materials",
      "Recording access for 30 days"
    ],
    popular: false
  },

  {
    name: "Student",
    price: "$150",
    originalPrice: null,
    description: "Discounted price for students",
    availability: "Until March 10, 2025",
    features: [
      "Full conference access",
      "Student networking events",
      "Conference materials",
      "Certificate of attendance"
    ],
    popular: false
  },

  {
    name: "Early Bird",
    price: "$299",
    originalPrice: "$399",
    description: "Access to all sessions + swag bag",
    availability: "Until Jan 31, 2025",
    features: [
      "Full conference access",
      "Networking events",
      "Premium swag bag",
      "Priority seating",
      "Lunch included",
      "Workshop access"
    ],
    popular: true
  },
  
  {
    name: "Standard",
    price: "$399",
    originalPrice: null,
    description: "Full conference access",
    availability: "Feb 1 - March 10, 2025",
    features: [
      "Full conference access",
      "Networking events",
      "Conference materials",
      "Lunch included",
      "Workshop access"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-tech-cyan bg-clip-text text-transparent">
            Choose Your Pass
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect ticket for your conference experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`relative group transition-all duration-300 hover:scale-105 ${
              tier.popular 
                ? 'ring-2 ring-tech-blue/50 shadow-tech bg-tech-glow' 
                : 'hover:shadow-tech bg-card/50 backdrop-blur-sm'
            } border-border/50`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-tech-blue text-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2">{tier.name}</CardTitle>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    {tier.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {tier.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-tech-blue">{tier.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </div>
                <Badge variant="outline" className="text-xs border-tech-blue/30 text-tech-blue">
                  {tier.availability}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-tech-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "hero" : "tech"} 
                  className="w-full"
                  size="lg"
                >
                  Buy Tickets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All prices in USD. Refunds available up to 30 days before the event.
          </p>
        </div>
      </div>
    </section>
  );
}