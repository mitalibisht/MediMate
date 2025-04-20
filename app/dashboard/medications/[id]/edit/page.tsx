"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MedicationForm } from "@/components/medication-form"

export default function EditMedicationPage({ params }: { params: { id: string } }) {
  const [medication, setMedication] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real application, this would be an API call
    // Here we're simulating it with mock data
    const getMedication = () => {
      setIsLoading(true)
      
      // Simulate API delay
      setTimeout(() => {
        // Mock data for different medications
        let data
        if (params.id === "med1") {
          data = {
            id: "med1",
            name: "Lisinopril",
            dosage: "10mg",
            schedule: "once-daily",
            category: "Blood Pressure",
            instructions: "Take with food in the evening",
            prescriber: "Dr. Johnson",
            pharmacy: "MediCare Pharmacy",
            refillsRemaining: 2,
            nextRefill: "2023-05-15",
            notes: "Store at room temperature."
          }
        } else if (params.id === "med2") {
          data = {
            id: "med2",
            name: "Atorvastatin",
            dosage: "20mg",
            schedule: "once-daily",
            category: "Cholesterol",
            instructions: "Take at the same time each day",
            prescriber: "Dr. Smith",
            pharmacy: "MediCare Pharmacy",
            refillsRemaining: 1,
            nextRefill: "2023-05-20",
            notes: ""
          }
        } else if (params.id === "med3") {
          data = {
            id: "med3",
            name: "Metformin",
            dosage: "500mg",
            schedule: "twice-daily",
            category: "Diabetes",
            instructions: "Take with meals to reduce stomach upset",
            prescriber: "Dr. Smith",
            pharmacy: "MediCare Pharmacy",
            refillsRemaining: 3,
            nextRefill: "2023-06-10",
            notes: "Take with a full glass of water."
          }
        } else {
          data = {
            id: params.id,
            name: "",
            dosage: "",
            schedule: "once-daily",
            category: "",
            instructions: "",
            prescriber: "",
            pharmacy: "",
            refillsRemaining: 0,
            nextRefill: "",
            notes: ""
          }
        }
        
        setMedication(data)
        setIsLoading(false)
      }, 500)
    }
    
    getMedication()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading medication details...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/dashboard/medications/${params.id}`}>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Edit {medication.name}</h1>
      </div>
      
      <MedicationForm 
        mode="edit" 
        initialData={medication} 
      />
    </div>
  )
} 