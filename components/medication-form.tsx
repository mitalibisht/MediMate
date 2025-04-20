"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { toast } from "sonner"

type MedicationFormProps = {
  initialData?: {
    id?: string
    name?: string
    dosage?: string
    schedule?: string
    category?: string
    instructions?: string
    prescriber?: string
    pharmacy?: string
    refillsRemaining?: number
    nextRefill?: string
    notes?: string
  }
  mode: "add" | "edit"
}

export function MedicationForm({ initialData = {}, mode }: MedicationFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    dosage: initialData.dosage || "",
    schedule: initialData.schedule || "once-daily",
    category: initialData.category || "",
    instructions: initialData.instructions || "",
    prescriber: initialData.prescriber || "",
    pharmacy: initialData.pharmacy || "",
    refillsRemaining: initialData.refillsRemaining || 0,
    nextRefill: initialData.nextRefill || "",
    notes: initialData.notes || "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate form
    if (!formData.name || !formData.dosage || !formData.schedule) {
      toast.error("Please fill out all required fields")
      setIsLoading(false)
      return
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success message
    if (mode === "add") {
      toast.success(`${formData.name} added to your medications`)
    } else {
      toast.success(`${formData.name} updated successfully`)
    }
    
    // Redirect back to medications page
    router.push("/dashboard/medications")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{mode === "add" ? "Add New Medication" : "Edit Medication"}</CardTitle>
        <CardDescription>
          {mode === "add" 
            ? "Enter the details of your new medication" 
            : "Update your medication details"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Medication Name <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Lisinopril"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dosage">Dosage <span className="text-red-500">*</span></Label>
              <Input
                id="dosage"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
                placeholder="e.g. 10mg"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schedule">Schedule <span className="text-red-500">*</span></Label>
              <Select 
                value={formData.schedule} 
                onValueChange={(value) => handleSelectChange("schedule", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="once-daily">Once Daily</SelectItem>
                  <SelectItem value="twice-daily">Twice Daily</SelectItem>
                  <SelectItem value="three-times-daily">Three Times Daily</SelectItem>
                  <SelectItem value="four-times-daily">Four Times Daily</SelectItem>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Blood Pressure"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prescriber">Prescriber</Label>
              <Input
                id="prescriber"
                name="prescriber"
                value={formData.prescriber}
                onChange={handleChange}
                placeholder="e.g. Dr. Smith"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pharmacy">Pharmacy</Label>
              <Input
                id="pharmacy"
                name="pharmacy"
                value={formData.pharmacy}
                onChange={handleChange}
                placeholder="e.g. MediCare Pharmacy"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="refillsRemaining">Refills Remaining</Label>
              <Input
                id="refillsRemaining"
                name="refillsRemaining"
                type="number"
                min="0"
                value={formData.refillsRemaining}
                onChange={handleChange}
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nextRefill">Next Refill Date</Label>
              <Input
                id="nextRefill"
                name="nextRefill"
                type="date"
                value={formData.nextRefill}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="e.g. Take with food in the evening"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g. Store at room temperature"
              rows={3}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading 
            ? (mode === "add" ? "Adding..." : "Updating...") 
            : (mode === "add" ? "Add Medication" : "Update Medication")}
        </Button>
      </CardFooter>
    </Card>
  )
} 