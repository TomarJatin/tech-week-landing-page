import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProfileSection } from "@/components/profile-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WaitingSection } from "@/components/waiting-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* Background Image with Grayscale */}
      <div 
        className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat grayscale opacity-10"
        style={{
          backgroundImage: "url('/bg.png')"
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 xl:px-20 md:px-10 px-4">
        <Header />
        <main>
          <HeroSection />
          <ProfileSection />
          <HowItWorksSection />
          <WaitingSection />
          {/* <FAQSection /> */}
        </main>
      </div>
      <div className="bg-gradient-to-b from-transparent to-black w-full h-[200px]  -mt-[280px]" />
      <div className="bg-black">
      
      <div className="w-full pb-[100px] sm:pb-[150px] md:pb-[200px] opacity-70 ">
        <video src="/heizen.webm" autoPlay muted loop className="w-full h-[50vh] sm:h-[70vh] md:h-[100dvh] object-cover z-20" />
        <div className="flex flex-col items-center justify-center -mt-[80px] sm:-mt-[120px] md:-mt-[200px] px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center mb-6 sm:mb-7 md:mb-8 lg:text-6xl font-semibold bg-gradient-to-r from-[#FFF]/80 to-[#999]/30 bg-clip-text text-transparent">
        You&apos;re special, and humanity <br className="hidden sm:block"/> is counting on you
        </h2>
        
        <button className="relative inline-flex overflow-hidden rounded-[12px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F628B9_0%,#F7A907_25%,#38FF7E_50%,#4E48FE_75%,#F628B9_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[12px] px-4 sm:px-5 md:px-6 bg-slate-950 py-2.5 sm:py-3 text-sm font-medium text-white backdrop-blur-3xl">
  Book a Demo Call
  </span>
</button>
        </div>
      </div>
        <Footer />
      </div>
    </div>
  )
}
