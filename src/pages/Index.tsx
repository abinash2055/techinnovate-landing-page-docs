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
        {/* For Hero Page   */}
        <section id="home">
          <Hero />
        </section>

        {/* For Speaker page */}
        <section id="speakers">
          <Speakers />
        </section>

         {/* For Schedule Page  */}
        <section id="schedule">
          <Schedule />
        </section>

        {/* For Price Page  */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* For Testimonials  */}
        <Testimonials />

        {/* For FAQ Section  */}
        <FAQ />

        {/* For Contact Form Page  */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
