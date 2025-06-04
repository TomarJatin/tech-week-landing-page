import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How can I start my sprint and commence engineering?",
      answer: "Getting started is simple! Book a 15-minute engineering call through our Calendly link. We'll discuss your project requirements, scope the work, and create a defined sprint plan with timeline. Once approved, we begin development immediately."
    },
    {
      question: "How much does my first project/sprint normally cost?",
      answer: "Our pricing is transparent: $120/hour for expert engineering. A typical first sprint ranges from $2,400-$4,800 (20-40 hours), depending on complexity. Remember, you get $500 back if you're not completely satisfied with our work quality."
    },
    {
      question: "How can I trust that my business operations are safe?",
      answer: "We take security seriously. All our engineers sign comprehensive NDAs, we use secure development practices, follow industry-standard security protocols, and can work within your existing security frameworks. Your intellectual property and data remain completely confidential."
    },
    {
      question: "How much does my first sprint or project cost normally?",
      answer: "Sprint costs vary based on scope and complexity. We provide detailed estimates after our initial consultation. Our rate is $120/hour, and we'll give you a clear breakdown of expected hours and deliverables before starting any work."
    }
  ]

  return (
    <section id="faq" className=" py-16">
      <div className="container mx-auto w-full">
        <h2 className="text-3xl text-center mb-8 md:text-6xl font-semibold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent">
        FAQ&apos;s
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/30 py-3 px-10 border border-border/50 rounded-lg "
            >
              <AccordionTrigger className="text-left text-white hover:text-white/80 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 