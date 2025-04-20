"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { Bell, Check, Clock, Globe, MoonStar, Save, Smartphone, SunMedium } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

// Hindi language translations
const translations = {
  en: {
    settings: "Settings",
    managePreferences: "Manage your application preferences and settings",
    appearance: "Appearance",
    notifications: "Notifications",
    preferences: "Preferences",
    privacy: "Privacy",
    appearanceSettings: "Appearance Settings",
    customizeApp: "Customize how the application looks",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    language: "Language",
    languageNote: "Note: Language options are limited in the demo",
    save: "Save",
    saveAppearance: "Save Appearance Settings"
  },
  hi: {
    settings: "सेटिंग्स",
    managePreferences: "अपने एप्लिकेशन प्राथमिकताओं और सेटिंग्स का प्रबंधन करें",
    appearance: "दिखावट",
    notifications: "सूचनाएँ",
    preferences: "प्राथमिकताएँ",
    privacy: "गोपनीयता",
    appearanceSettings: "दिखावट सेटिंग्स",
    customizeApp: "एप्लिकेशन का रूप कैसे दिखे यह अनुकूलित करें",
    theme: "थीम",
    light: "उजला",
    dark: "गहरा",
    system: "सिस्टम",
    language: "भाषा",
    languageNote: "नोट: डेमो में भाषा विकल्प सीमित हैं",
    save: "सहेजें",
    saveAppearance: "दिखावट सेटिंग्स सहेजें"
  }
}

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { setTheme, theme } = useTheme()
  
  // Settings state
  const [currentTheme, setCurrentTheme] = useState(theme || "system")
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [vibrationEnabled, setVibrationEnabled] = useState(true)
  const [reminderTime, setReminderTime] = useState("15")
  const [language, setLanguage] = useState("en")
  const [timeFormat, setTimeFormat] = useState("12h")
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY")
  const [autoRefill, setAutoRefill] = useState(true)
  const [showMissedDoses, setShowMissedDoses] = useState(true)
  const [shareData, setShareData] = useState(false)
  
  // Get translations based on selected language
  const t = translations[language as keyof typeof translations] || translations.en
  
  const handleThemeChange = (value: string) => {
    setCurrentTheme(value)
    setTheme(value)
  }
  
  const handleSave = async (section: string) => {
    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success(`${section} settings saved successfully`)
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t.settings}</h1>
          <p className="text-muted-foreground">
            {t.managePreferences}
          </p>
        </div>
        <ThemeToggle />
      </div>

      <Tabs defaultValue="appearance" className="space-y-6">
        <TabsList>
          <TabsTrigger value="appearance">{t.appearance}</TabsTrigger>
          <TabsTrigger value="notifications">{t.notifications}</TabsTrigger>
          <TabsTrigger value="preferences">{t.preferences}</TabsTrigger>
          <TabsTrigger value="privacy">{t.privacy}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.appearanceSettings}</CardTitle>
              <CardDescription>
                {t.customizeApp}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>{t.theme}</Label>
                <RadioGroup 
                  defaultValue={currentTheme}
                  onValueChange={handleThemeChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light" className="flex items-center">
                      <SunMedium className="mr-2 h-4 w-4" />
                      {t.light}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark" className="flex items-center">
                      <MoonStar className="mr-2 h-4 w-4" />
                      {t.dark}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system" className="flex items-center">
                      <Smartphone className="mr-2 h-4 w-4" />
                      {t.system}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>{t.language}</Label>
                <Select 
                  value={language} 
                  onValueChange={setLanguage}
                >
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  {t.languageNote}
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button 
                onClick={() => handleSave("Appearance")} 
                disabled={isLoading}
              >
                <Save className="mr-2 h-4 w-4" />
                {t.saveAppearance}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Enable Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for medication reminders
                    </p>
                  </div>
                  <Switch 
                    id="notifications" 
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sound">Sound</Label>
                    <p className="text-sm text-muted-foreground">
                      Play a sound with notifications
                    </p>
                  </div>
                  <Switch 
                    id="sound" 
                    checked={soundEnabled}
                    onCheckedChange={setSoundEnabled}
                    disabled={!notificationsEnabled}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="vibration">Vibration</Label>
                    <p className="text-sm text-muted-foreground">
                      Vibrate device with notifications
                    </p>
                  </div>
                  <Switch 
                    id="vibration" 
                    checked={vibrationEnabled}
                    onCheckedChange={setVibrationEnabled}
                    disabled={!notificationsEnabled}
                  />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="reminderTime">Default Reminder Time</Label>
                  <p className="text-sm text-muted-foreground">
                    How many minutes before a scheduled dose to send a reminder
                  </p>
                  <Select 
                    value={reminderTime} 
                    onValueChange={setReminderTime}
                    disabled={!notificationsEnabled}
                  >
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button 
                onClick={() => handleSave("Notification")} 
                disabled={isLoading}
              >
                <Bell className="mr-2 h-4 w-4" />
                Save Notification Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Configure your application preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Time Format</Label>
                  <RadioGroup 
                    defaultValue={timeFormat}
                    onValueChange={setTimeFormat}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="12h" id="time-12h" />
                      <Label htmlFor="time-12h">12-hour (1:30 PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="24h" id="time-24h" />
                      <Label htmlFor="time-24h">24-hour (13:30)</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Date Format</Label>
                  <RadioGroup 
                    defaultValue={dateFormat}
                    onValueChange={setDateFormat}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="MM/DD/YYYY" id="date-mdy" />
                      <Label htmlFor="date-mdy">MM/DD/YYYY</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="DD/MM/YYYY" id="date-dmy" />
                      <Label htmlFor="date-dmy">DD/MM/YYYY</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="YYYY-MM-DD" id="date-ymd" />
                      <Label htmlFor="date-ymd">YYYY-MM-DD</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-refill">Auto Refill Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Remind when medications need refilling
                    </p>
                  </div>
                  <Switch 
                    id="auto-refill" 
                    checked={autoRefill}
                    onCheckedChange={setAutoRefill}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="missed-doses">Show Missed Doses</Label>
                    <p className="text-sm text-muted-foreground">
                      Display missed doses in history
                    </p>
                  </div>
                  <Switch 
                    id="missed-doses" 
                    checked={showMissedDoses}
                    onCheckedChange={setShowMissedDoses}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button 
                onClick={() => handleSave("Preference")}
                disabled={isLoading}
              >
                <Clock className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Manage your data and privacy options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="share-data">Share Anonymous Data</Label>
                  <p className="text-sm text-muted-foreground">
                    Share anonymous usage data to help improve the app
                  </p>
                </div>
                <Switch 
                  id="share-data" 
                  checked={shareData}
                  onCheckedChange={setShareData}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Data Management</h3>
                <p className="text-sm text-muted-foreground">
                  Export or delete your data from our servers
                </p>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <Button 
                    variant="outline"
                    onClick={() => toast.success("Your data has been exported")}
                  >
                    Export My Data
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => toast.info("This feature is not available in the demo")}
                  >
                    Delete All My Data
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Third-Party Access</h3>
                <p className="text-sm text-muted-foreground">
                  Manage which third-party services can access your data
                </p>
                <div className="rounded-md border p-4">
                  <p className="text-sm text-center text-muted-foreground">
                    No third-party services connected
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button 
                onClick={() => handleSave("Privacy")}
                disabled={isLoading}
              >
                <Globe className="mr-2 h-4 w-4" />
                Save Privacy Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 