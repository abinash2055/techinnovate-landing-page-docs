import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "TechInnovate was a game changer for me — the insights and connections made helped launch my startup.",
    author: "Alex Johnson",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },

  {
    quote: "The speaker lineup was exceptional, and the sessions were highly relevant to my work.",
    author: "Priya Singh",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c00e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  
  {
    quote: "I appreciated the networking opportunities and hands-on workshops.",
    author: "Michael Lee",
    role: "Researcher",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-tech-purple bg-clip-text text-transparent">
            What Attendees Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from past participants about their TechInnovate experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-tech-blue mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-tech-cyan fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-tech-blue/30">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-tech-blue">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}