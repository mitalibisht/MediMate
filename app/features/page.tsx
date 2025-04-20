import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12">MediMate Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Medication Tracking</h2>
          <p className="text-lg text-gray-700 mb-6">
            Keep track of all your medications in one place with our intuitive interface. Never miss a dose again with
            our smart reminder system.
          </p>
          <ul className="space-y-3">
            {[
              "Dynamic timers for each medication",
              "Visual dose tracking",
              "Medication history log",
              "Custom medication schedules",
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1 bg-blue-100 rounded-full p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image src="/images/app-doses-screen.png" alt="Medication tracking interface" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 md:flex-row-reverse">
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Adherence Analytics</h2>
          <p className="text-lg text-gray-700 mb-6">
            Track your medication adherence over time with detailed analytics and insights. Understand your patterns and
            improve your health outcomes.
          </p>
          <ul className="space-y-3">
            {[
              "Visual adherence charts",
              "Weekly and monthly reports",
              "Trend analysis",
              "Exportable data for healthcare providers",
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1 bg-yellow-100 rounded-full p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="#EAB308"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/app-adherence-screen.png"
            alt="Adherence tracking interface"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Medication Database",
              description:
                "Access information about your medications, including dosage guidelines and potential side effects.",
              icon: "/images/pill-icon.png",
            },
            {
              title: "Refill Reminders",
              description: "Get notified when it's time to refill your prescriptions so you never run out.",
              icon: "/images/chart-icon.png",
            },
            {
              title: "Multiple Profiles",
              description: "Manage medications for multiple people with separate profiles for each family member.",
              icon: "/images/user-icon.png",
            },
            {
              title: "Healthcare Provider Sharing",
              description: "Share your medication history and adherence data with your healthcare providers.",
              icon: "/images/settings-icon.png",
            },
            {
              title: "Customizable Notifications",
              description: "Set up notifications that work for your schedule and preferences.",
              icon: "/images/timer-icon.png",
            },
            {
              title: "Offline Access",
              description: "Access your medication information even when you don't have an internet connection.",
              icon: "/images/chart-icon.png",
            },
          ].map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                  <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={24} height={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-slate-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to take control of your medication?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Download MediMate today and experience the easiest way to track and manage your medications.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          Download Now
        </Button>
      </div>
    </div>
  )
}
