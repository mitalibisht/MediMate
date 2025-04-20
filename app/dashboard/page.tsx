"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"
import { 
  CalendarClock, 
  CalendarDays, 
  CameraIcon, 
  Clock, 
  Info, 
  Plus, 
  Pill, 
  RefreshCw, 
  Upload,
  User
} from "lucide-react"

export default function DashboardPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<any>(null)
  const [showGuide, setShowGuide] = useState(true)

  // Demo data
  const medications = [
    {
      id: "med1",
      name: "Lisinopril",
      dosage: "10mg",
      schedule: "Once daily",
      timeLeft: 75,
      nextDose: "Today, 8:00 PM",
      adherence: 92,
      instructions: "Take with food in the evening",
      sideEffects: ["Dry cough", "Dizziness", "Headache"],
    },
    {
      id: "med2",
      name: "Atorvastatin",
      dosage: "20mg",
      schedule: "Once daily",
      timeLeft: 30,
      nextDose: "Today, 9:00 PM",
      adherence: 88,
      instructions: "Take at the same time each day",
      sideEffects: ["Muscle pain", "Joint pain", "Nausea"],
    },
    {
      id: "med3",
      name: "Metformin",
      dosage: "500mg",
      schedule: "Twice daily",
      timeLeft: 15,
      nextDose: "Today, 2:00 PM",
      adherence: 79,
      instructions: "Take with meals to reduce stomach upset",
      sideEffects: ["Nausea", "Diarrhea", "Stomach pain"],
    },
  ]

  const recentActivity = [
    {
      id: "act1",
      medication: "Lisinopril",
      action: "Taken",
      time: "Yesterday, 8:05 PM",
    },
    {
      id: "act2",
      medication: "Atorvastatin",
      action: "Taken",
      time: "Yesterday, 9:12 PM",
    },
    {
      id: "act3",
      medication: "Metformin",
      action: "Missed",
      time: "Yesterday, 2:00 PM",
    },
    {
      id: "act4",
      medication: "Metformin",
      action: "Taken",
      time: "Yesterday, 8:30 AM",
    },
  ]

  const upcomingAppointments = [
    {
      id: "apt1",
      doctor: "Dr. Johnson",
      specialty: "Cardiologist",
      date: "May 15, 2023",
      time: "10:30 AM",
      location: "Heart Care Center, Building A",
      notes: "Bring blood pressure readings from the last month",
    },
    {
      id: "apt2",
      doctor: "Dr. Smith",
      specialty: "Primary Care",
      date: "June 3, 2023",
      time: "9:00 AM",
      location: "Family Medicine Clinic",
      notes: "Annual checkup, fasting required for lab work",
    },
  ]

  const user = {
    name: "Demo User",
    email: "demo@medimate.com",
    avatar: "/placeholder-user.jpg",
    streak: 8,
    nextRefill: "May 15, 2023",
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    if (file) {
      setSelectedFile(file)
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)
    }
  }

  const handleScan = () => {
    if (!selectedFile) return
    
    setIsScanning(true)
    
    // Simulate scanning process
    setTimeout(() => {
      // Mock result - in a real app, this would come from a medication identification API
      setScanResult({
        name: "Lisinopril",
        dosage: "10mg",
        manufacturer: "Generic",
        purpose: "Blood pressure medication (ACE inhibitor)",
        description: "White, round tablet with imprint 'L10' on one side",
        warnings: [
          "May cause dizziness upon standing",
          "Contact doctor if experiencing persistent dry cough",
          "Avoid potassium supplements without medical advice"
        ]
      })
      
      setIsScanning(false)
      toast.success("Medication identified successfully!")
    }, 2000)
  }

  const closeGuide = () => {
    setShowGuide(false)
    toast.success("Guide dismissed. You can find help in settings anytime.")
  }

  return (
    <div className="space-y-8">
      {showGuide && (
        <Card className="border-2 border-blue-100 bg-blue-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-blue-700">
              <Info className="mr-2 h-5 w-5" /> 
              Welcome to your MediMate Dashboard!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Here's how to get started with managing your medications:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>View your upcoming medication doses in the "Upcoming Doses" section</li>
              <li>Use the "Scan Medication" feature to identify pills and get information</li>
              <li>Check your next appointment details in the "Upcoming Appointments" section</li>
              <li>Track your medication adherence in the statistics cards</li>
            </ol>
          </CardContent>
          <CardFooter>
            <Button onClick={closeGuide} className="w-full">
              Got it
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.name}! Your medication overview.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <CameraIcon className="mr-2 h-4 w-4" />
                Scan Medication
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Scan Medication</DialogTitle>
                <DialogDescription>
                  Upload a photo of your medication to identify it and get information.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {previewUrl ? (
                  <div className="relative w-full h-64 rounded-md overflow-hidden border">
                    <Image
                      src={previewUrl}
                      alt="Medication preview"
                      className="object-contain"
                      fill
                    />
                  </div>
                ) : (
                  <div className="border rounded-md p-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                      <Upload className="h-6 w-6 text-slate-500" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload a clear image of your medication
                    </p>
                    <Input
                      id="picture"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Label htmlFor="picture" className="cursor-pointer">
                      <Button variant="outline" className="w-full" onClick={(e) => e.preventDefault()}>
                        Select Image
                      </Button>
                    </Label>
                  </div>
                )}
                
                {scanResult && (
                  <div className="border rounded-md p-4">
                    <h3 className="font-semibold text-lg mb-2">{scanResult.name} {scanResult.dosage}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{scanResult.manufacturer}</p>
                    <p className="text-sm mb-2">{scanResult.purpose}</p>
                    <p className="text-sm mb-2">{scanResult.description}</p>
                    <div className="mt-4">
                      <h4 className="font-medium text-sm mb-1">Warnings:</h4>
                      <ul className="text-xs space-y-1">
                        {scanResult.warnings.map((warning: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                {previewUrl && !scanResult && (
                  <Button disabled={isScanning} onClick={handleScan}>
                    {isScanning ? "Scanning..." : "Identify Medication"}
                  </Button>
                )}
                {scanResult && (
                  <Button variant="outline" onClick={() => {
                    setSelectedFile(null)
                    setPreviewUrl(null)
                    setScanResult(null)
                  }}>
                    Scan Another
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Button asChild>
            <Link href="/dashboard/medications/add">
              <Plus className="mr-2 h-4 w-4" />
              Add Medication
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Medications</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{medications.length}</div>
            <p className="text-xs text-muted-foreground">
              {medications.length > 0 ? "Active prescriptions" : "No active prescriptions"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Adherence</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+2.5%</span> from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.streak} days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments[0].date}</div>
            <p className="text-xs text-muted-foreground">Dr. {upcomingAppointments[0].doctor.split(' ')[1]}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Doses</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          {medications.map((medication) => (
            <Card key={medication.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{medication.name}</CardTitle>
                  <Badge variant={medication.timeLeft <= 30 ? "destructive" : "outline"}>
                    {medication.timeLeft <= 30 
                      ? `${medication.timeLeft}m left` 
                      : medication.nextDose}
                  </Badge>
                </div>
                <CardDescription>{medication.dosage} - {medication.schedule}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Time until next dose</span>
                        <span>{medication.timeLeft} minutes</span>
                      </div>
                      <Progress value={medication.timeLeft} max={180} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Instructions:</h4>
                    <p className="text-sm text-muted-foreground">{medication.instructions}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Possible Side Effects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {medication.sideEffects.map((effect, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{effect}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex w-full justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                  >
                    <Link href={`/dashboard/medications/${medication.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => toast.success(`Marked ${medication.name} as taken!`)}
                  >
                    Take Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          {recentActivity.map((activity) => (
            <Card key={activity.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{activity.medication}</CardTitle>
                  <Badge variant={activity.action === "Missed" ? "destructive" : "secondary"}>
                    {activity.action}
                  </Badge>
                </div>
                <CardDescription>{activity.time}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="appointments" className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{appointment.doctor}</CardTitle>
                  <Badge>{appointment.specialty}</Badge>
                </div>
                <CardDescription>
                  <span className="flex items-center">
                    <CalendarClock className="mr-1 h-3 w-3" />
                    {appointment.date} at {appointment.time}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-medium">Location:</h4>
                    <p className="text-sm text-muted-foreground">{appointment.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Notes:</h4>
                    <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex justify-end w-full">
                  <Button size="sm" variant="outline">
                    Add to Calendar
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
} 