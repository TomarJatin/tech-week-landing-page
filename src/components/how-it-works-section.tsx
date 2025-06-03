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
    <section className="py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl text-center mb-8 md:text-6xl font-semibold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent">
        How does it work?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-4`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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