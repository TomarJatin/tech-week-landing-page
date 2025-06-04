"use client"

import { useState, useEffect } from "react"
import { NeonGradientCard } from "./magicui/neon-gradient-card"

export function HeroSection() {
  const [time, setTime] = useState({ hours: 11, minutes: 59, seconds: 50 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds -= 1
        } else if (minutes > 0) {
          seconds = 59
          minutes -= 1
        } else if (hours > 0) {
          seconds = 59
          minutes = 59
          hours -= 1
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (num: number) => num.toString().padStart(2, '0')

  return (
    <section className="relative py-8 sm:py-12 md:py-16 min-h-[60vh] sm:min-h-[65vh] md:h-[70dvh] flex items-center">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
            <h1 className="">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold bg-gradient-to-r from-[#F405EC] via-[#FDA603] via-[#38FF7E] to-[#4E48FE] bg-clip-text text-transparent">
                Unlock $500
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl font-semibold font-inter bg-gradient-to-r from-[#EEF1F0] to-[#71757E] bg-clip-text text-transparent">
                on your first sprint
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-full md:max-w-lg leading-relaxed font-inter text-[#CBCBCB] px-4 sm:px-0">
              With Heizen you can build a production ready software in just 1 week!
            </p>
            
            <div className="pt-2 sm:pt-3 md:pt-4">
            <button className="relative inline-flex overflow-hidden rounded-[12px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F628B9_0%,#F7A907_25%,#38FF7E_50%,#4E48FE_75%,#F628B9_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[12px] px-4 sm:px-5 md:px-6 bg-slate-950 py-2.5 sm:py-3 text-sm font-medium text-white backdrop-blur-3xl">
  Book a Demo Call
  </span>
</button>
            </div>
          </div>

          {/* Right Content - Timer */}
          <div className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 mt-8 md:mt-0">
            <p className="text-lg sm:text-xl font-semibold text-[#ab770f]">Hurry Up !!!</p>
          <NeonGradientCard className="w-full max-w-[280px] sm:max-w-sm items-center justify-center text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-6 sm:py-7 md:py-8 font-inter bg-gradient-to-b from-[#EEF1F0] to-[#71757E] bg-clip-text text-transparent">
                      {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
                    </div>
                    
    </NeonGradientCard>
    <p className="text-lg sm:text-xl font-semibold text-[#ab770f]">20/50 Slots Left </p>
          </div>
          
        </div>
      </div>
      
    </section>
  )
} 