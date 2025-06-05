"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          {/* HEIZEN Icon */}
          <Image src="/logo.svg" alt="Heizen Logo" width={145} height={40} className="w-24 sm:w-32 md:w-[145px]" />
        </div>
      </div>
      
      <div className="flex items-end gap-2 sm:gap-4">
     
        <button onClick={() => window.open("https://cal.com/nijansh-heizen/ny-tech-week", "_blank")} className="relative inline-flex overflow-hidden rounded-[12px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F628B9_0%,#F7A907_25%,#38FF7E_50%,#4E48FE_75%,#F628B9_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[12px] px-2 sm:px-3 bg-slate-950 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
  <span className="hidden sm:inline">Book a Demo Call</span>
  <span className="sm:hidden">Book Demo</span>
  </span>
</button>
      </div>
    </header>
  )
} 