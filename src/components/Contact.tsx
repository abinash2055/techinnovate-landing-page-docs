import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@techinnovate2025.com",
    href: "mailto:info@techinnovate2025.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (415) 555-1234",
    href: "tel:+14155551234"
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "San Francisco Convention Center, 747 Howard St, San Francisco, CA 94103",
    href: "https://maps.google.com/?q=San Francisco Convention Center"
  }
];

const socialLinks = [
  {
    icon: Twitter,
    label: "Twitter",
    handle: "@TechInnovateConf",
    href: "https://twitter.com/TechInnovateConf"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/company/techinnovate",
    href: "https://linkedin.com/company/techinnovate"
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "facebook.com/TechInnovate",
    href: "https://facebook.com/TechInnovate"
  }
];

const sponsors = [
  { level: "Platinum", name: "TechGiant Inc.", color: "tech-cyan" },
  { level: "Gold", companies: ["InnovateX", "FutureLabs"], color: "tech-blue" },
  { level: "Silver", companies: ["CodeCraft", "BlockNet"], color: "tech-purple" },
  { level: "Partners", companies: ["Silicon Valley Startup Hub", "AI Research Foundation"], color: "muted-foreground" }
];

export default function Contact() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-tech-blue bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help make your TechInnovate experience amazing
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="group hover:shadow-tech transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-4">
                      <a href={contact.href} className="flex items-start gap-4 hover:text-tech-blue transition-colors">
                        <contact.icon className="w-5 h-5 mt-1 text-tech-blue flex-shrink-0" />
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-muted-foreground text-sm">{contact.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-tech-blue/20 hover:bg-tech-blue/30 border border-tech-blue/30 hover:border-tech-blue/50 transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-tech-blue" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sponsors */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Sponsors & Partners</h3>
            <div className="space-y-6">
              {sponsors.map((sponsorGroup, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className={`text-lg text-${sponsorGroup.color}`}>
                      {sponsorGroup.level}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {sponsorGroup.name ? (
                      <p className="font-medium">{sponsorGroup.name}</p>
                    ) : (
                      <div className="space-y-1">
                        {sponsorGroup.companies?.map((company, companyIndex) => (
                          <p key={companyIndex} className="text-muted-foreground">{company}</p>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button variant="tech" className="w-full">
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 text-center">
          <Card className="max-w-md mx-auto bg-tech-glow border-tech-blue/30">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <p className="text-muted-foreground">Get the latest conference news and updates</p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background/50 border border-border rounded-md text-sm"
                />
                <Button variant="tech" size="sm">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}