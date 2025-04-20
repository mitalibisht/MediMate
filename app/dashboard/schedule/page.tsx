"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Clock, Pill } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SchedulePage() {
  const [date, setDate] = useState<Date>(new Date())
  const [view, setView] = useState<"day" | "week" | "month">("day")

  // Demo data
  const medications = [
    {
      id: "med1",
      name: "Lisinopril",
      dosage: "10mg",
      color: "blue",
      schedule: [
        { time: "08:00", days: [1, 2, 3, 4, 5, 6, 7] },
      ],
    },
    {
      id: "med2",
      name: "Atorvastatin",
      dosage: "20mg",
      color: "purple",
      schedule: [
        { time: "21:00", days: [1, 2, 3, 4, 5, 6, 7] },
      ],
    },
    {
      id: "med3",
      name: "Metformin",
      dosage: "500mg",
      color: "green",
      schedule: [
        { time: "08:00", days: [1, 2, 3, 4, 5, 6, 7] },
        { time: "14:00", days: [1, 2, 3, 4, 5, 6, 7] },
      ],
    },
  ]

  // Generate schedule for the selected day
  const daySchedule = () => {
    const today = date.getDay() === 0 ? 7 : date.getDay()
    const events: Array<{ time: string; medications: Array<{ id: string; name: string; dosage: string; color: string }> }> = []

    // Get all unique times
    const times = new Set<string>()
    medications.forEach(med => {
      med.schedule.forEach(schedule => {
        if (schedule.days.includes(today)) {
          times.add(schedule.time)
        }
      })
    })

    // Create events for each time
    Array.from(times).sort().forEach(time => {
      const meds = medications
        .filter(med => 
          med.schedule.some(schedule => 
            schedule.time === time && schedule.days.includes(today)
          )
        )
        .map(med => ({
          id: med.id,
          name: med.name,
          dosage: med.dosage,
          color: med.color
        }))

      events.push({ time, medications: meds })
    })

    return events
  }

  const colorVariants: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    red: "bg-red-100 text-red-700 border-red-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  }

  const formatDateHeader = () => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(date)
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1)
    } else {
      newDate.setDate(newDate.getDate() + 1)
    }
    setDate(newDate)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
          <p className="text-muted-foreground">
            View and manage your medication schedule
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="day" onValueChange={(value) => setView(value as "day" | "week" | "month")}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day View</SelectItem>
              <SelectItem value="week">Week View</SelectItem>
              <SelectItem value="month">Month View</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Date</CardTitle>
                <CardDescription>Select a date to view schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                />
              </CardContent>
            </Card>
            <Card className="col-span-1 md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Daily Schedule</CardTitle>
                  <CardDescription>{formatDateHeader()}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={() => navigateDate('prev')}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setDate(new Date())}
                  >
                    Today
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => navigateDate('next')}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {daySchedule().length > 0 ? (
                    daySchedule().map((event, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-4 p-4 rounded-lg border"
                      >
                        <div className="flex flex-col items-center">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                          <time className="text-sm font-medium">{event.time}</time>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-medium">Medications</h3>
                          <div className="flex flex-wrap gap-2">
                            {event.medications.map((med) => (
                              <div 
                                key={med.id}
                                className={`flex items-center gap-2 px-3 py-1 rounded-full border ${colorVariants[med.color]}`}
                              >
                                <Pill className="h-4 w-4" />
                                <span>{med.name} ({med.dosage})</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10 text-muted-foreground">
                      No medications scheduled for this day
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medication Schedule</CardTitle>
              <CardDescription>All your scheduled medications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {medications.map((medication) => (
                  <div key={medication.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{medication.name} ({medication.dosage})</h3>
                      <Badge 
                        className={colorVariants[medication.color]}
                      >
                        {medication.schedule.length} {medication.schedule.length === 1 ? 'dose' : 'doses'} daily
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {medication.schedule.map((schedule, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{schedule.time}</span>
                          <span>•</span>
                          <span>{schedule.days.length === 7 
                            ? "Every day" 
                            : schedule.days.map(d => 
                                ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][d]
                              ).join(", ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 