import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const speakers = [
  {
    name: "Dr. Susan Chen",
    title: "AI Researcher & Keynote Speaker",
    company: "Google AI Lab",
    bio: "Leading researcher in machine learning with 15 years of experience.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c00e?w=300&h=300&fit=crop&crop=face"
  },

  {
    name: "Mr. Raj Patel",
    title: "CTO",
    company: "RoboTech Innovations",
    bio: "Pioneer in robotics automation and AI integration.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  
  {
    name: "Ms. Elena Garcia",
    title: "Blockchain Specialist",
    company: "ChainLink Solutions",
    bio: "Expert in blockchain protocols and decentralized finance.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
];

export default function Speakers() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-tech-blue bg-clip-text text-transparent">
            Featured Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and visionaries shaping the future of technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-tech-blue/30 group-hover:border-tech-blue/60 transition-colors">
                    <img 
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-tech-blue/20 text-tech-blue border-tech-blue/30">
                      Speaker
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-tech-blue font-medium">{speaker.title}</p>
                <p className="text-muted-foreground text-sm">{speaker.company}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{speaker.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}