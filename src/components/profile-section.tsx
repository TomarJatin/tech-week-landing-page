import Image from "next/image"

export function ProfileSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16">
      <div className="w-full px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-7 md:gap-8">
          <div className="flex justify-center md:justify-start flex-shrink-0">
            <Image 
              src="/nijansh.png" 
              alt="Nijansh Verma" 
              className="rounded-[24px] object-cover border border-[2px] border-gray-500 w-[200px] sm:w-[220px] md:w-[250px]" 
              width={250} 
              height={312} 
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent mb-3 sm:mb-2">
            Nijansh Verma
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg md:text-xl px-2 sm:px-0">
            I&apos;m Nijansh Verma, co-founder of Heizen and a builder at heart. At Heizen, we&apos;re on a mission to transform how startups bring ideas to life. We combine powerful AI agents with elite engineers to ship production-grade software not in months, but days.
<br/>
<br/>
Thank you for being part of Tech for Impact: Startup Pitch Night.
<br/>
If we connected at the event, I&apos;m grateful.
<br/>
If we haven&apos;t yet, let&apos;s fix that.
<br/>
Together, we&apos;re building what&apos;s next.
And it starts with moments like these.
<br/>
<br/>
<span className="font-semibold">#BeTheShockwave</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 