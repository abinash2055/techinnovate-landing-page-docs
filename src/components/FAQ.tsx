import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the conference in-person or virtual?",
    answer: "TechInnovate 2025 offers both in-person attendance and virtual live streaming. You can choose the format that works best for you when purchasing your ticket."
  },
  {
    question: "What is the refund policy?",
    answer: "Refunds are available up to 30 days before the event. No refunds will be issued after February 15, 2025. Please contact us at info@techinnovate2025.com for refund requests."
  },
  {
    question: "Are meals provided?",
    answer: "Lunch and coffee breaks will be provided on-site for in-person attendees. Virtual attendees will receive access to exclusive online networking sessions during break times."
  },
  {
    question: "How can I contact the organizers?",
    answer: "You can reach us via email at info@techinnovate2025.com or call us at +1 (415) 555-1234. We're also active on social media @TechInnovateConf."
  },
  {
    question: "What should I bring to the conference?",
    answer: "Bring your laptop, business cards, and an open mind! We'll provide notebooks, pens, and all conference materials. Don't forget your ticket confirmation and ID for check-in."
  },
  {
    question: "Will sessions be recorded?",
    answer: "Yes! All main sessions will be recorded and made available to registered attendees for 30 days after the conference. Virtual ticket holders get access immediately, while in-person attendees receive access within 24 hours."
  },
  {
    question: "Is there parking available?",
    answer: "The San Francisco Convention Center offers paid parking. We recommend using public transportation (BART) or rideshare services for easier access to the venue."
  },
  {
    question: "Can I network with other attendees?",
    answer: "Absolutely! We have dedicated networking sessions, coffee breaks, and a conference app that allows you to connect with other attendees before, during, and after the event."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-tech-cyan bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TechInnovate 2025
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-tech-blue transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}