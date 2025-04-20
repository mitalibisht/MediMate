"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "sonner"
import { Info } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check credentials
    if (email === "demo@medimate.com" && password === "demopass") {
      toast.success("Logged in successfully!")
      router.push("/dashboard")
    } else {
      setError("Invalid email or password. Try using the demo account.")
    }

    setIsLoading(false)
  }

  const useDemo = () => {
    setEmail("demo@medimate.com")
    setPassword("demopass")
    
    // Show a toast message
    toast.info("Demo account credentials filled! Click 'Log in' to continue.")
  }

  return (
    <div className="space-y-4">
      <Card className="border-2 border-blue-100 bg-blue-50/50">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Info className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <h3 className="font-medium">Try our demo account</h3>
              <p className="text-sm text-muted-foreground">Experience all features without registration</p>
              <Button onClick={useDemo} className="mt-2 bg-blue-600 hover:bg-blue-700">
                Use Demo Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login to MediMate</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-center">
            <span className="text-muted-foreground">Don't have an account?</span>{" "}
            <Button variant="link" className="p-0" onClick={() => router.push("/register")}>
              Sign up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
} 