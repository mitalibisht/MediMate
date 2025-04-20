import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { CheckCircle, Clock, Plus, Search, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function MedicationsPage() {
  // Demo data
  const medications = [
    {
      id: "med1",
      name: "Lisinopril",
      dosage: "10mg",
      category: "Blood Pressure",
      schedule: "Once daily",
      timeLeft: 75,
      nextDose: "Today, 8:00 PM",
      adherence: 92,
      status: "active",
      refillRemaining: 2,
      prescriber: "Dr. Johnson",
      startDate: "Jan 15, 2023",
    },
    {
      id: "med2",
      name: "Atorvastatin",
      dosage: "20mg",
      category: "Cholesterol",
      schedule: "Once daily",
      timeLeft: 30,
      nextDose: "Today, 9:00 PM",
      adherence: 88,
      status: "active",
      refillRemaining: 1,
      prescriber: "Dr. Smith",
      startDate: "Feb 3, 2023",
    },
    {
      id: "med3",
      name: "Metformin",
      dosage: "500mg",
      category: "Diabetes",
      schedule: "Twice daily",
      timeLeft: 15,
      nextDose: "Today, 2:00 PM",
      adherence: 79,
      status: "active",
      refillRemaining: 3,
      prescriber: "Dr. Smith",
      startDate: "Dec 10, 2022",
    },
    {
      id: "med4",
      name: "Ibuprofen",
      dosage: "400mg",
      category: "Pain Relief",
      schedule: "As needed",
      timeLeft: null,
      nextDose: "As needed",
      adherence: null,
      status: "inactive",
      refillRemaining: 0,
      prescriber: "Dr. Johnson",
      startDate: "Mar 5, 2023",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medications</h1>
          <p className="text-muted-foreground">
            Manage and track all your medications
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/medications/add">
            <Plus className="mr-2 h-4 w-4" />
            Add Medication
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search medications..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Category</Button>
        <Button variant="outline">Status</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Medications ({medications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Next Dose</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Adherence</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medications.map((medication) => (
                <TableRow key={medication.id}>
                  <TableCell className="font-medium">{medication.name}</TableCell>
                  <TableCell>{medication.dosage}</TableCell>
                  <TableCell>{medication.schedule}</TableCell>
                  <TableCell>{medication.category}</TableCell>
                  <TableCell>
                    {medication.nextDose === "As needed" ? (
                      "As needed"
                    ) : (
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        {medication.nextDose}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={medication.status === "active" ? "outline" : "secondary"}
                    >
                      {medication.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {medication.adherence ? (
                      <div className="flex items-center">
                        {medication.adherence >= 80 ? (
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="mr-2 h-4 w-4 text-red-500" />
                        )}
                        {medication.adherence}%
                      </div>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/medications/${medication.id}`}>View</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {medications.length} medications
          </div>
          <div className="text-sm text-muted-foreground">
            Last updated: May 1, 2023
          </div>
        </CardFooter>
      </Card>
    </div>
  )
} 