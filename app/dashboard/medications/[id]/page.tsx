"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  AlertCircle,
  ArrowLeft,
  Bell,
  Calendar,
  CalendarCheck,
  Clock,
  Edit,
  Pill,
  RefreshCw,
  Trash,
  XCircle
} from "lucide-react"
import { toast } from "sonner"

export default function MedicationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  
  // Mock data for a single medication
  const medication = {
    id: params.id,
    name: params.id === "med1" ? "Lisinopril" : params.id === "med2" ? "Atorvastatin" : "Metformin",
    dosage: params.id === "med1" ? "10mg" : params.id === "med2" ? "20mg" : "500mg",
    schedule: params.id === "med3" ? "Twice daily" : "Once daily",
    timeLeft: params.id === "med1" ? 75 : params.id === "med2" ? 30 : 15,
    nextDose: params.id === "med1" ? "Today, 8:00 PM" : params.id === "med2" ? "Today, 9:00 PM" : "Today, 2:00 PM",
    adherence: params.id === "med1" ? 92 : params.id === "med2" ? 88 : 79,
    instructions: params.id === "med1" 
      ? "Take with food in the evening" 
      : params.id === "med2" 
      ? "Take at the same time each day" 
      : "Take with meals to reduce stomach upset",
    sideEffects: params.id === "med1" 
      ? ["Dry cough", "Dizziness", "Headache"] 
      : params.id === "med2" 
      ? ["Muscle pain", "Joint pain", "Nausea"] 
      : ["Nausea", "Diarrhea", "Stomach pain"],
    category: params.id === "med1" 
      ? "Blood Pressure" 
      : params.id === "med2" 
      ? "Cholesterol" 
      : "Diabetes",
    prescriber: params.id === "med1" || params.id === "med4" ? "Dr. Johnson" : "Dr. Smith",
    pharmacy: "MediCare Pharmacy",
    refillsRemaining: params.id === "med1" ? 2 : params.id === "med2" ? 1 : 3,
    nextRefill: "May 15, 2023",
    notes: "Store at room temperature.",
    startDate: params.id === "med1" 
      ? "Jan 15, 2023" 
      : params.id === "med2" 
      ? "Feb 3, 2023" 
      : "Dec 10, 2022",
    pillImage: `/images/pill-icon.png`
  }
  
  const medicationHistory = [
    {
      date: "May 1, 2023",
      status: "Taken",
      time: "8:05 PM",
      notes: "Taken on time"
    },
    {
      date: "April 30, 2023",
      status: "Taken",
      time: "8:12 PM",
      notes: "Taken with food"
    },
    {
      date: "April 29, 2023",
      status: "Missed",
      time: "-",
      notes: "Out of town"
    },
    {
      date: "April 28, 2023",
      status: "Taken",
      time: "7:58 PM",
      notes: ""
    },
    {
      date: "April 27, 2023",
      status: "Taken",
      time: "8:03 PM",
      notes: ""
    }
  ]
  
  const weeklyAdherence = [
    { day: "Mon", percent: 100 },
    { day: "Tue", percent: 100 },
    { day: "Wed", percent: 0 },
    { day: "Thu", percent: 100 },
    { day: "Fri", percent: 100 },
    { day: "Sat", percent: 100 },
    { day: "Sun", percent: 100 }
  ]

  const handleDelete = () => {
    if (showConfirmDelete) {
      // In a real app, this would call an API to delete the medication
      toast.success(`${medication.name} has been removed from your medications`)
      router.push("/dashboard/medications")
    } else {
      setShowConfirmDelete(true)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{medication.name}</h1>
            <p className="text-muted-foreground">
              {medication.dosage} - {medication.schedule}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/medications/${medication.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <Button variant={showConfirmDelete ? "destructive" : "outline"} onClick={handleDelete}>
            {showConfirmDelete ? (
              <>Confirm Delete</>
            ) : (
              <>
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Medication Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="relative h-20 w-20 rounded-md overflow-hidden bg-slate-100 flex items-center justify-center">
                <Image 
                  src={medication.pillImage} 
                  alt={medication.name} 
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Category</p>
                    <p className="text-sm text-muted-foreground">{medication.category}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Started</p>
                    <p className="text-sm text-muted-foreground">{medication.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Prescriber</p>
                    <p className="text-sm text-muted-foreground">{medication.prescriber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pharmacy</p>
                    <p className="text-sm text-muted-foreground">{medication.pharmacy}</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-2">Next Dose</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium">{medication.nextDose}</p>
                  <p className="text-sm text-muted-foreground">{medication.timeLeft} minutes remaining</p>
                </div>
              </div>
              <Progress value={medication.timeLeft} max={180} className="h-2" />
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-2">Instructions</h3>
              <p className="text-sm mb-4">{medication.instructions}</p>
              <h3 className="text-sm font-medium mb-2">Side Effects</h3>
              <div className="flex flex-wrap gap-2">
                {medication.sideEffects.map((effect, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {effect}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-2">Refill Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Refills Remaining</p>
                  <p className="text-sm text-muted-foreground">{medication.refillsRemaining}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Next Refill</p>
                  <p className="text-sm text-muted-foreground">{medication.nextRefill}</p>
                </div>
              </div>
            </div>

            {medication.notes && (
              <>
                <Separator />
                <div>
                  <h3 className="text-sm font-medium mb-2">Notes</h3>
                  <p className="text-sm">{medication.notes}</p>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter>
            <div className="flex w-full justify-between">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={`/dashboard/schedule?medication=${medication.id}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  View Schedule
                </Link>
              </Button>
              <Button 
                size="sm" 
                className="w-full ml-2"
                onClick={() => toast.success(`Marked ${medication.name} as taken!`)}
              >
                <CalendarCheck className="mr-2 h-4 w-4" />
                Take Now
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Adherence</CardTitle>
              <CardDescription>
                Your overall adherence for this medication is {medication.adherence}%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-3">Weekly Adherence</h3>
                  <div className="flex items-end justify-between h-32 mb-2">
                    {weeklyAdherence.map((item, index) => (
                      <div key={index} className="flex flex-col items-center w-full space-y-2">
                        <div className="relative w-full flex justify-center">
                          <div 
                            className={`w-5/6 bg-${item.percent === 0 ? 'red' : 'green'}-100 rounded-sm`} 
                            style={{ height: `${item.percent}%` }}
                          />
                          {item.percent === 0 && (
                            <XCircle className="absolute -top-3 text-red-500 h-5 w-5" />
                          )}
                        </div>
                        <span className="text-xs font-medium">{item.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Adherence Status</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    {medication.adherence >= 90 ? (
                      <>
                        <div className="bg-green-100 p-2 rounded-full">
                          <RefreshCw className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <p className="font-medium text-green-700">Excellent</p>
                          <p className="text-sm text-muted-foreground">Keep up the good work!</p>
                        </div>
                      </>
                    ) : medication.adherence >= 80 ? (
                      <>
                        <div className="bg-blue-100 p-2 rounded-full">
                          <AlertCircle className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <p className="font-medium text-blue-700">Good</p>
                          <p className="text-sm text-muted-foreground">Try to be more consistent.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-red-100 p-2 rounded-full">
                          <AlertCircle className="h-5 w-5 text-red-700" />
                        </div>
                        <div>
                          <p className="font-medium text-red-700">Needs Improvement</p>
                          <p className="text-sm text-muted-foreground">Regular medication is important.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/adherence">
                  View Detailed Adherence
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medication History</CardTitle>
              <CardDescription>
                Recent history of this medication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medicationHistory.map((entry, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full ${
                      entry.status === "Taken" ? "bg-green-100" : "bg-red-100"
                    }`}>
                      {entry.status === "Taken" ? (
                        <Pill className={`h-4 w-4 ${
                          entry.status === "Taken" ? "text-green-700" : "text-red-700"
                        }`} />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-700" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium">{entry.date}</p>
                          <p className="text-xs text-muted-foreground">{entry.time}</p>
                        </div>
                        <Badge variant={entry.status === "Taken" ? "outline" : "destructive"} className="text-xs">
                          {entry.status}
                        </Badge>
                      </div>
                      {entry.notes && (
                        <p className="text-xs text-muted-foreground mt-1">{entry.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/dashboard/medications/${medication.id}/history`}>
                  View Full History
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
} 