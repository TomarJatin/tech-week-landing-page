"use client";

import { useState, useEffect } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const slotsLeft = 30;

  useEffect(() => {
    const calculateTimer = () => {
      // Target date: June 6, 2025, 5:00 PM EDT
      const targetDate = new Date('2025-06-06T21:00:00.000Z'); // 5 PM EDT = 9 PM UTC
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        // Timer expired
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time left
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };


    // Calculate immediately
    calculateTimer();

    // Update every second
    const timer = setInterval(() => {
      calculateTimer();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="relative py-8 sm:py-12 md:py-16 min-h-[60vh] sm:min-h-[65vh] md:h-[70dvh] flex items-center">
      <div className="container mx-auto">
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
              With Heizen you can build a production ready software in just 1
              week!
            </p>

            <div className="pt-2 sm:pt-3 md:pt-4">
              <a href="https://cal.com/nijansh-heizen/ny-tech-week" target="_blank"  className="relative inline-flex overflow-hidden rounded-[12px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F628B9_0%,#F7A907_25%,#38FF7E_50%,#4E48FE_75%,#F628B9_100%)] group-hover:animate-[spin_1s_linear_infinite] transition-all duration-300" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[12px] px-4 sm:px-5 md:px-8 bg-slate-950 py-2.5 sm:py-4 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 ease-out group-hover:bg-slate-900 group-hover:text-white group-hover:shadow-inner relative overflow-hidden">
                  <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                    Book a Demo Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Content - Timer */}
          <div className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 mt-8 md:mt-0">
            <p className="text-lg sm:text-xl font-semibold text-[#ab770f]">
              Hurry Up !!!
            </p>
            <NeonGradientCard className="w-full max-w-[280px] sm:max-w-sm items-center justify-center text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-6 sm:py-7 md:py-8 font-inter bg-gradient-to-b from-[#EEF1F0] to-[#71757E] bg-clip-text text-transparent">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                {formatTime(timeLeft.seconds)}
              </div>
            </NeonGradientCard>
            <p className="text-lg sm:text-xl font-semibold text-[#ab770f]">
              {slotsLeft}/50 Slots Left{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
