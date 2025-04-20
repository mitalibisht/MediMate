import Image from "next/image"

export function MobileAppShowcase() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      {/* Main phone mockup */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 w-[280px] md:w-[320px]">
        <div className="relative w-full h-[500px] md:h-[600px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-100">
          <div className="absolute inset-0 p-2">
            <Image
              src="/images/app-doses-screen.png"
              alt="Medication tracking app interface"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Left phone mockup */}
      <div className="absolute left-0 md:left-[10%] top-[15%] z-20 w-[240px] md:w-[280px] opacity-90">
        <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-[40px] shadow-lg overflow-hidden border-8 border-gray-100">
          <div className="absolute inset-0 p-2">
            <Image
              src="/images/app-timer-screen.png"
              alt="Medication timer interface"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Right phone mockup */}
      <div className="absolute right-0 md:right-[10%] top-[15%] z-10 w-[240px] md:w-[280px] opacity-90">
        <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-[40px] shadow-lg overflow-hidden border-8 border-gray-100">
          <div className="absolute inset-0 p-2">
            <Image
              src="/images/app-adherence-screen.png"
              alt="Medication adherence tracking interface"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
