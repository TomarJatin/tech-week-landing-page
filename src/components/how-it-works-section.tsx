import { Card, CardContent } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      title: "Book a slot",
      description: "Start with a 15-minute Engineering seed call via Calendly.com",
      icon: "📅",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Review Sprint Plan",
      description: "We will scope a defined Sprint plan and a timeline for the project",
      icon: "📋",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Get Started",
      description: "The price is 5M% of hours at $120/hr, so a full week of day programming",
      icon: "🚀",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section className="py-12 sm:py-14 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 sm:mb-7 md:mb-8 md:text-6xl font-semibold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent">
        How does it work?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${step.color} mb-3 sm:mb-4`}>
                  <span className="text-xl sm:text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 