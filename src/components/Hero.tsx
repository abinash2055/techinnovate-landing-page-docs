import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-tech-glow" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-tech-blue/20 border border-tech-blue/30 backdrop-blur-sm mb-8">
            <span className="text-tech-cyan text-sm font-medium">March 15-17, 2025</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-tech-cyan bg-clip-text text-transparent">
            TechInnovate 2025
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Exploring the Future of AI, Robotics, and Blockchain
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-tech-blue" />
              <span>3 Days</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-tech-blue" />
              <span>San Francisco</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-tech-blue" />
              <span>1000+ Attendees</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-tech-blue/30 hover:bg-tech-blue/10">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-blue/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-purple/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-tech-cyan/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
}