"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Camera, Save, User } from "lucide-react"

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false)
  
  // Demo user data
  const [user, setUser] = useState({
    name: "Demo User",
    email: "demo@medimate.com",
    phone: "555-123-4567",
    dateOfBirth: "1980-01-01",
    address: "123 Main St, Anytown, CA 94102",
    emergencyContact: "Jane Doe (555-987-6543)",
    bio: "I'm a demo user for the MediMate application.",
    avatar: "/placeholder-user.jpg"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSave = async () => {
    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Profile updated successfully")
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList>
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="medical">Medical Information</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>
                Update your personal information and how we can contact you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-muted">
                      <Image 
                        src={user.avatar} 
                        alt="Profile" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <Button 
                      size="icon" 
                      className="absolute bottom-0 right-0 rounded-full bg-primary text-primary-foreground"
                      onClick={() => toast.info("This feature is not available in the demo")}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
                  <p className="text-xs text-muted-foreground">Demo Account</p>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={user.name} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={user.email} 
                        onChange={handleInputChange} 
                        disabled
                      />
                      <p className="text-xs text-muted-foreground">Email cannot be changed in demo</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={user.phone} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input 
                        id="dateOfBirth" 
                        name="dateOfBirth" 
                        type="date" 
                        value={user.dateOfBirth} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea 
                      id="address" 
                      name="address" 
                      value={user.address} 
                      onChange={handleInputChange} 
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input 
                      id="emergencyContact" 
                      name="emergencyContact" 
                      value={user.emergencyContact} 
                      onChange={handleInputChange} 
                      placeholder="Name and phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      name="bio" 
                      value={user.bio} 
                      onChange={handleInputChange} 
                      placeholder="Tell us about yourself"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="medical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Medical Information</CardTitle>
              <CardDescription>
                Your medical details to help personalize your experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies</Label>
                <Textarea 
                  id="allergies" 
                  placeholder="List any allergies you have"
                  rows={2}
                  defaultValue="Penicillin, Shellfish"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="conditions">Medical Conditions</Label>
                <Textarea 
                  id="conditions" 
                  placeholder="List any medical conditions you have"
                  rows={3}
                  defaultValue="Hypertension, High Cholesterol"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="primaryPhysician">Primary Physician</Label>
                <Input 
                  id="primaryPhysician" 
                  placeholder="Your doctor's name and contact"
                  defaultValue="Dr. John Smith (555-234-5678)"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input 
                  id="bloodType" 
                  placeholder="Your blood type"
                  defaultValue="O+"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={() => toast.success("Medical information saved")}>
                <Save className="mr-2 h-4 w-4" />
                Save Medical Info
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your password and security preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
                <Button 
                  variant="outline"
                  onClick={() => toast.info("This feature is not available in the demo")}
                >
                  Set Up Two-Factor Authentication
                </Button>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={() => toast.info("Password cannot be changed in demo account")}>
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 