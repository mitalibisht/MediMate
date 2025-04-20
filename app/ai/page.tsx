"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
import { 
  BrainCircuit, 
  Rocket, 
  CheckCircle2, 
  Bot, 
  Sparkles, 
  Zap, 
  Home as HomeIcon, 
  BellRing,
  ArrowRight, 
  PieChart,
  MessageSquare,
  Star,
  Pill,
  CalendarClock,
  ShieldAlert,
  LayoutDashboard,
  Menu,
  X,
  UserCircle
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function AIPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-4 px-4 md:px-6 border-b relative z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo size="md" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary flex items-center gap-1">
              <HomeIcon className="h-4 w-4" />
              HOME
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-primary flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              FEATURES
            </Link>
            <Link href="/ai" className="text-sm font-medium text-primary flex items-center gap-1">
              <BrainCircuit className="h-4 w-4" />
              AI
              <Badge variant="outline" className="ml-1 text-xs py-0 h-5">Soon</Badge>
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary flex items-center gap-1">
              <LayoutDashboard className="h-4 w-4" />
              DASHBOARD
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/login">
                  Login
                </Link>
              </Button>
              <Button className="rounded-full" asChild>
                <Link href="/register">
                  Register
                </Link>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg md:hidden z-50">
            <nav className="flex flex-col p-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 py-3 px-4 hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link 
                href="/features" 
                className="flex items-center gap-2 py-3 px-4 hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="h-5 w-5" />
                <span>Features</span>
              </Link>
              <Link 
                href="/ai" 
                className="flex items-center gap-2 py-3 px-4 bg-accent/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BrainCircuit className="h-5 w-5" />
                <span>AI</span>
                <Badge variant="outline" className="ml-auto text-xs">Soon</Badge>
              </Link>
              <Link 
                href="/dashboard" 
                className="flex items-center gap-2 py-3 px-4 hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link href="/login">
                    Login
                  </Link>
                </Button>
                <Button className="w-full justify-center" asChild>
                  <Link href="/register">
                    Register
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-blue-900/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center z-10 relative">
              <Badge className="mb-4" variant="outline">
                <Rocket className="h-3.5 w-3.5 mr-1" />
                Coming Soon
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                AI-Powered Health <span className="text-primary">Assistant</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Experience the future of medication management with our advanced AI technology
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
                <Button size="lg" className="px-8 shadow-lg" asChild>
                  <a href="#waitlist">
                    Join Waitlist
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8 backdrop-blur-sm bg-background/50" asChild>
                  <Link href="/dashboard">
                    Explore Current Features
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto max-w-4xl h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl flex items-center justify-center perspective">
                <div className="relative w-full max-w-[80%] aspect-[16/9] transform rotate-x-12 shadow-2xl rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/20 dark:bg-black/40 border border-white/20 rounded-xl">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-gray-900/80 flex items-center px-4 rounded-t-xl">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-white/70 text-xs">AI Health Assistant</div>
                    </div>
                    
                    <div className="absolute top-10 left-0 right-0 bottom-0 p-6 flex flex-col">
                      <div className="mb-4 text-white/80 text-left text-sm">What can I help you with today?</div>
                      
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-white text-sm max-w-[80%] text-left">
                          I can help with your medication schedule, check for potential drug interactions, or provide information about your medications. What would you like to know?
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 mb-4 justify-end">
                        <div className="bg-primary/20 rounded-lg p-3 text-white text-sm max-w-[80%] text-left">
                          Can you remind me when to take my medication today?
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <UserCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-white text-sm max-w-[80%] text-left">
                          <div className="mb-2">You have 3 medications scheduled for today:</div>
                          <div className="space-y-1 text-xs">
                            <div className="flex items-center">
                              <Pill className="h-3 w-3 mr-2 text-blue-300" />
                              <span>Atorvastatin: 8:00 PM with dinner</span>
                            </div>
                            <div className="flex items-center">
                              <Pill className="h-3 w-3 mr-2 text-purple-300" />
                              <span>Metformin: 8:00 AM with breakfast (✓ Taken)</span>
                            </div>
                            <div className="flex items-center">
                              <Pill className="h-3 w-3 mr-2 text-orange-300" />
                              <span>Vitamin D: 1:00 PM with lunch (✓ Taken)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-white/10 flex gap-2">
                        <div className="flex-1 bg-white/10 rounded-full h-10"></div>
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                          <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 right-[10%] w-16 h-16 bg-primary/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Key AI Features</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our AI-powered health assistant will transform how you manage your medications and health
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-full mb-4 flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <CardTitle>Health AI Assistant</CardTitle>
                  <CardDescription>Your personal AI health companion</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Chat with your AI assistant to ask health questions, get medication information, and receive personalized advice tailored to your health profile.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-full mb-4 flex items-center justify-center">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Smart Predictions</CardTitle>
                  <CardDescription>Anticipate health needs before they arise</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI analyzes your health patterns to predict potential issues, recommend preventative measures, and optimize your medication schedule.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-full mb-4 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle>Natural Language Interface</CardTitle>
                  <CardDescription>Talk to your app like you'd talk to a doctor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No more complex menus or confusing interfaces. Simply tell the app what you need using everyday language and get instant responses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">AI-Enhanced Medication Management</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Drug Interaction Alerts</h3>
                      <p className="text-muted-foreground">
                        Our AI automatically identifies potential drug interactions and alerts you before problems occur.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Symptom Analysis</h3>
                      <p className="text-muted-foreground">
                        Track symptoms and get AI-powered insights on potential causes and recommended actions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Medication Optimization</h3>
                      <p className="text-muted-foreground">
                        AI suggests the optimal times to take medications based on your schedule, meals, and other medications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg border flex flex-col items-center text-center">
                  <Pill className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium">Medication Scanner</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Identify pills using your camera
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border flex flex-col items-center text-center">
                  <CalendarClock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium">Smart Schedule</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    AI optimized reminder times
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border flex flex-col items-center text-center">
                  <BellRing className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium">Context Reminders</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Reminders based on your activity
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border flex flex-col items-center text-center">
                  <ShieldAlert className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium">Safety Monitoring</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Continuous health monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our AI Waitlist</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Be among the first to experience our revolutionary AI health assistant. Early access members will receive exclusive benefits and help shape the future of medication management.
            </p>
            <Button size="lg" className="px-8 group">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-card text-card-foreground border-t py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Logo size="md" />
            </div>
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} MediMate. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
} 