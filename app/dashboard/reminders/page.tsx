"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { 
  Bell, 
  BellOff, 
  Clock, 
  Edit, 
  Plus, 
  Smartphone, 
  Trash, 
  Vibrate 
} from "lucide-react"

export default function RemindersPage() {
  const [reminders, setReminders] = useState([
    {
      id: "rem1",
      medicationId: "med1",
      medicationName: "Lisinopril",
      time: "08:00 PM",
      daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      type: "notification",
      enabled: true,
    },
    {
      id: "rem2",
      medicationId: "med2",
      medicationName: "Atorvastatin",
      time: "09:00 PM",
      daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      type: "notification",
      enabled: true,
    },
    {
      id: "rem3",
      medicationId: "med3",
      medicationName: "Metformin",
      time: "08:00 AM",
      daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      type: "notification",
      enabled: true,
    },
    {
      id: "rem4",
      medicationId: "med3",
      medicationName: "Metformin",
      time: "02:00 PM",
      daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      type: "notification",
      enabled: true,
    }
  ])

  const [newReminderData, setNewReminderData] = useState({
    medicationId: "",
    medicationName: "",
    time: "08:00",
    type: "notification",
  })
  
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const medications = [
    { id: "med1", name: "Lisinopril" },
    { id: "med2", name: "Atorvastatin" },
    { id: "med3", name: "Metformin" },
    { id: "med4", name: "Ibuprofen" },
  ]

  const toggleReminder = (id: string) => {
    setReminders(reminders.map(reminder => 
      reminder.id === id 
        ? { ...reminder, enabled: !reminder.enabled } 
        : reminder
    ))
    
    const reminder = reminders.find(r => r.id === id)
    if (reminder) {
      toast.success(`Reminder for ${reminder.medicationName} ${!reminder.enabled ? 'enabled' : 'disabled'}`)
    }
  }

  const deleteReminder = (id: string) => {
    const reminder = reminders.find(r => r.id === id)
    setReminders(reminders.filter(reminder => reminder.id !== id))
    
    if (reminder) {
      toast.success(`Reminder for ${reminder.medicationName} deleted`)
    }
  }

  const handleAddReminder = () => {
    // Validate
    if (!newReminderData.medicationId || !newReminderData.time) {
      toast.error("Please select a medication and time")
      return
    }
    
    // Get the medication name
    const medication = medications.find(m => m.id === newReminderData.medicationId)
    if (!medication) return
    
    const newReminder = {
      id: `rem${reminders.length + 1}`,
      medicationId: newReminderData.medicationId,
      medicationName: medication.name,
      time: formatTime(newReminderData.time),
      daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      type: newReminderData.type,
      enabled: true,
    }
    
    setReminders([...reminders, newReminder])
    
    // Reset form
    setNewReminderData({
      medicationId: "",
      medicationName: "",
      time: "08:00",
      type: "notification",
    })
    
    setIsDialogOpen(false)
    toast.success(`Reminder for ${medication.name} added`)
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour % 12 || 12
    return `${hour12}:${minutes} ${ampm}`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reminders</h1>
          <p className="text-muted-foreground">
            Manage your medication reminders
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Reminder
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Reminder</DialogTitle>
              <DialogDescription>
                Create a new reminder for your medication
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="medication">Medication</Label>
                <Select 
                  value={newReminderData.medicationId} 
                  onValueChange={(value) => setNewReminderData({...newReminderData, medicationId: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select medication" />
                  </SelectTrigger>
                  <SelectContent>
                    {medications.map((medication) => (
                      <SelectItem key={medication.id} value={medication.id}>
                        {medication.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input 
                  id="time" 
                  type="time" 
                  value={newReminderData.time}
                  onChange={(e) => setNewReminderData({...newReminderData, time: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Reminder Type</Label>
                <Select 
                  value={newReminderData.type} 
                  onValueChange={(value) => setNewReminderData({...newReminderData, type: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="notification">Notification</SelectItem>
                    <SelectItem value="alarm">Alarm</SelectItem>
                    <SelectItem value="vibration">Vibration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddReminder}>Add Reminder</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Medication Reminders</CardTitle>
          <CardDescription>Reminders will notify you when it's time to take your medication</CardDescription>
        </CardHeader>
        <CardContent>
          {reminders.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Medication</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Days</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reminders.map((reminder) => (
                  <TableRow key={reminder.id}>
                    <TableCell className="font-medium">
                      <Link href={`/dashboard/medications/${reminder.medicationId}`} className="hover:underline">
                        {reminder.medicationName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        {reminder.time}
                      </div>
                    </TableCell>
                    <TableCell>
                      {reminder.daysOfWeek.length === 7 
                        ? "Every day" 
                        : reminder.daysOfWeek.join(", ")}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {reminder.type === "notification" && <Bell className="mr-2 h-4 w-4 text-blue-500" />}
                        {reminder.type === "alarm" && <Smartphone className="mr-2 h-4 w-4 text-red-500" />}
                        {reminder.type === "vibration" && <Vibrate className="mr-2 h-4 w-4 text-purple-500" />}
                        <span className="capitalize">{reminder.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Switch 
                          checked={reminder.enabled} 
                          onCheckedChange={() => toggleReminder(reminder.id)} 
                        />
                        <Label>{reminder.enabled ? "Enabled" : "Disabled"}</Label>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/dashboard/reminders/${reminder.id}/edit`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => deleteReminder(reminder.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-10">
              <BellOff className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No reminders set up yet</p>
              <Button variant="outline" className="mt-4" onClick={() => setIsDialogOpen(true)}>
                Add your first reminder
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Global Notification Settings</CardTitle>
          <CardDescription>Configure how you want to be notified</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications for medication reminders
                </p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sound">Sound</Label>
                <p className="text-sm text-muted-foreground">
                  Play a sound when a reminder is triggered
                </p>
              </div>
              <Switch id="sound" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="vibration">Vibration</Label>
                <p className="text-sm text-muted-foreground">
                  Vibrate when a reminder is triggered
                </p>
              </div>
              <Switch id="vibration" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="repeat">Repeat Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Repeat reminders that haven't been acknowledged
                </p>
              </div>
              <Switch id="repeat" defaultChecked />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => toast.success("Notification settings saved")}>
            Save Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 