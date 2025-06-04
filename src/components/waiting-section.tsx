
import { NeonGradientCard } from "./magicui/neon-gradient-card"

export function WaitingSection() {

  return (
    <section className="py-16">
      <NeonGradientCard className="w-full  h-[333px] items-center justify-center text-center">
        <div className=" w-full h-full flex flex-col items-center justify-center gap-10 px-16 z-10">
        <h2 className="text-3xl md:text-6xl font-semibold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent">
          What are you waiting for?
        </h2>
        <button className="relative inline-flex  overflow-hidden rounded-[12px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F628B9_0%,#F7A907_25%,#38FF7E_50%,#4E48FE_75%,#F628B9_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[12px] px-6  bg-slate-950  py-3 text-sm font-medium text-white backdrop-blur-3xl">
  Book a Demo Call
  </span>
</button>

        </div>
      </NeonGradientCard>
    </section>
  )
} 