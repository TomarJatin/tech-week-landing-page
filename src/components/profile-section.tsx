import Image from "next/image"

export function ProfileSection() {
  return (
    <section className=" py-16">
      <div className=" w-full">
        <div className="flex flex-col md:flex-row  gap-8">
          <Image src="/nijansh.png" alt="Nijansh Verma" className="rounded-[24px] object-cover border border-[2px] border-gray-500" width={250} height={312} />
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent mb-2">
            Nijansh Verma
            </h2>
            <p className="text-muted-foreground leading-relaxed text-xl">
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

#BeTheShockwave
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 