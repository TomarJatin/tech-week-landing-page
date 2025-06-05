export function WaitingSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6">
    
      <div className="relative">
        {/* Gradient shadow layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F405EC] via-[#FDA603] via-[#38FF7E] to-[#4E48FE] rounded-[24px] blur-xl opacity-30 -z-10 scale-100"></div>
        
        {/* Main card */}
        <div className="w-full h-[250px] rounded-[24px] sm:h-[280px] flex flex-col justify-center md:h-[333px] text-left relative bg-cover bg-center bg-no-repeat gap-6 sm:gap-8 md:gap-8 px-6 sm:px-12 md:px-16" style={{ backgroundImage: 'url(/card-bg.png)' }}>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold bg-gradient-to-b from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent pb-4 px-4 sm:px-0">
            What are you waiting for?
          </h2>
          <button onClick={() => window.open("https://cal.com/nijansh-heizen/ny-tech-week", "_blank")} className="relative w-fit inline-flex overflow-hidden rounded-[12px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F628B9_0%,#F7A907_25%,#38FF7E_50%,#4E48FE_75%,#F628B9_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[12px] px-4 sm:px-5 md:px-6 bg-slate-950 py-2.5 sm:py-3 text-sm font-medium text-white backdrop-blur-3xl">
              Book a Demo Call
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
