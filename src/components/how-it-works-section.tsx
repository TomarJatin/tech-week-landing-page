import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function HowItWorksSection() {
  const steps = [
    {
      title: "Book a slot",
      description: "Start with a 15-minute Engineering seed call via Calendly.com",
      img: "/1.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Review Sprint Plan",
      description: "We will scope a defined Sprint plan and a timeline for the project",
      img: "/2.png",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Get Started",
      description: "The price is 5M% of hours at $120/hr, so a full week of day programming",
      img: "/3.png",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section className="py-12 sm:py-14 md:py-16 mb-20 z-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 sm:mb-7 md:mb-8 md:text-6xl font-semibold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent">
        How does it work?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="border-border/50 ">
               <Image className="w-full h-[250px]" src={step.img} alt={step.title} width={1000} height={1000} />
              <div className=" text-left pt-6">
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 