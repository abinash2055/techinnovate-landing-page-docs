import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="speakers">
          <Speakers />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Testimonials />
        <FAQ />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
