"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { LogoAnimated } from "@/components/logo-animated"
import { ThemeToggle } from "@/components/theme-toggle"
import { AccessibilityMenu } from "@/components/accessibility-menu"
import { Clock, LineChart, Pill, Home as HomeIcon, Sparkles, LayoutDashboard, BrainCircuit, Shield, Heart, Zap, ArrowRight, Bot, Star, Rocket, Menu, X, LockIcon, CheckCircle2, BadgeCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-4 px-4 md:px-6 border-b border-primary/10 relative z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LogoAnimated size="md" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary flex items-center gap-1 transition-colors">
              <HomeIcon className="h-4 w-4" />
              HOME
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-primary flex items-center gap-1 transition-colors">
              <Sparkles className="h-4 w-4" />
              FEATURES
            </Link>
            <Link href="/ai" className="text-sm font-medium hover:text-primary flex items-center gap-1 transition-colors">
              <BrainCircuit className="h-4 w-4" />
              AI
              <Badge variant="outline" className="ml-1 text-xs py-0 h-5">Soon</Badge>
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary flex items-center gap-1 transition-colors">
              <LayoutDashboard className="h-4 w-4" />
              DASHBOARD
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <AccessibilityMenu />
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5" asChild>
                <Link href="/login">
                  Login
                </Link>
              </Button>
              <Button className="rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all" asChild>
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
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-primary/10 shadow-lg md:hidden z-50 animate-in slide-in-from-top-5">
            <nav className="flex flex-col p-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 py-3 px-4 hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link 
                href="/features" 
                className="flex items-center gap-2 py-3 px-4 hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="h-5 w-5" />
                <span>Features</span>
              </Link>
              <Link 
                href="/ai" 
                className="flex items-center gap-2 py-3 px-4 hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BrainCircuit className="h-5 w-5" />
                <span>AI</span>
                <Badge variant="outline" className="ml-auto text-xs">Soon</Badge>
              </Link>
              <Link 
                href="/dashboard" 
                className="flex items-center gap-2 py-3 px-4 hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-primary/10">
                <Button variant="outline" className="w-full justify-center border-primary/30 hover:border-primary hover:bg-primary/5" asChild>
                  <Link href="/login">
                    Login
                  </Link>
                </Button>
                <Button className="w-full justify-center shadow-sm hover:shadow-md" asChild>
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
        <section className="bg-gradient-to-b from-accent/80 via-accent/90 to-accent py-16 md:py-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-radial from-primary/5 to-transparent opacity-80 rounded-full"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary mb-6 backdrop-blur-sm shadow-sm">
                  <Heart className="h-3.5 w-3.5 mr-2 fill-primary" />
                  Your Personal Medication Assistant
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  The medication <span className="text-primary relative">tracker
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/40 rounded-full"></span>
                  </span> platform
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  MediMate helps you track medications, set reminders, and stay on top of your health. Everything you need in one secure platform.
                </p>

                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm p-4 rounded-lg border border-primary/20 mb-8 shadow-sm">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-1">Your data stays private and secure</h3>
                      <p className="text-xs text-muted-foreground">End-to-end encryption and strict privacy practices keep your health information safe.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-8 shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 group" asChild>
                    <Link href="/register">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="px-8 backdrop-blur-sm bg-background/70 border-primary/20 hover:border-primary/80 hover:bg-background/80 transition-all" asChild>
                    <Link href="/login">
                      Use Demo Account
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
                
                <div className="relative w-full max-w-[520px] aspect-[3/2] rounded-xl overflow-hidden shadow-2xl group perspective">
                  <div className="absolute inset-0 rotate-1 scale-105 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 group-hover:rotate-2 transition-transform duration-500"></div>
                  <div className="relative h-full w-full bg-card rounded-xl overflow-hidden shadow-lg z-10 transform group-hover:scale-[1.01] transition-transform duration-500">
                    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/30">
                      <div className="relative w-full h-full p-8 flex flex-col items-center justify-center">
                        {/* Logo in dashboard */}
                        <div className="mb-8 mt-4 scale-110">
                          <div className="flex flex-col items-center">
                            <Logo size="lg" asLink={false} />
                            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">Dashboard Interface</div>
                          </div>
                        </div>
                        
                        {/* Sample Dashboard Content */}
                        <div className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mt-8 border border-primary/20">
                          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                            <Pill className="h-4 w-4 mr-2 text-primary" /> Today's Medications
                          </h2>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-900/60 rounded-md border border-primary/10">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                  <Pill className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Ibuprofen</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">200mg, Once daily</p>
                                </div>
                              </div>
                              <div className="bg-primary/10 text-primary text-xs py-1 px-3 rounded-full">9:00 AM</div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-900/60 rounded-md border border-primary/10">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                  <Pill className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Vitamin D</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">1000 IU, Once daily</p>
                                </div>
                              </div>
                              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs py-1 px-3 rounded-full">Taken</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 dark:to-black/10"></div>
                    
                    {/* Device frame */}
                    <div className="absolute inset-0 border-[12px] border-white/70 dark:border-gray-800/70 rounded-xl pointer-events-none shadow-inner"></div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 flex space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/70"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400/70"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400/70"></div>
                    </div>
                  </div>
                </div>

                {/* Security badges */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/70 dark:bg-black/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary/20 flex items-center space-x-3">
                  <div className="flex items-center">
                    <LockIcon className="h-4 w-4 text-primary mr-1" />
                    <span className="text-xs font-medium">Secure</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="flex items-center">
                    <BadgeCheck className="h-4 w-4 text-primary mr-1" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-accent to-transparent"></div>
          <div className="absolute -top-32 right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
                Designed for Everyone
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Key Features</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Designed to simplify medication management with intuitive tools that work for you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 pt-10 rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 relative">Smart Reminders</h3>
                <p className="text-muted-foreground relative">
                  Get timely notifications when it's time to take your medications with our intelligent reminder system.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs text-primary/70">Never miss a dose</span>
                  <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">Popular</Badge>
                </div>
              </div>
              
              <div className="bg-card p-6 pt-10 rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LineChart className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 relative">Adherence Tracking</h3>
                <p className="text-muted-foreground relative">Monitor your medication adherence with detailed charts and statistics.</p>
                <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs text-primary/70">Stay on schedule</span>
                  <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">Easy to use</Badge>
                </div>
              </div>
              
              <div className="bg-card p-6 pt-10 rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Pill className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 relative">Medication Scanner</h3>
                <p className="text-muted-foreground relative">
                  Upload images of your medications to identify them and get detailed information instantly.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs text-primary/70">Quick identification</span>
                  <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">New</Badge>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button size="lg" className="px-8 shadow-md hover:shadow-lg group relative overflow-hidden" asChild>
                <Link href="/login">
                  <span className="relative z-10">Try Demo Account</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-accent/70 via-accent/60 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-primary border-primary/30 shadow-sm">
                <Rocket className="h-3.5 w-3.5 mr-1 text-primary" />
                Launching Soon
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Health Assistant</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our next-generation AI will revolutionize the way you manage your health
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personalized AI Health Coach</h3>
                      <p className="text-muted-foreground">
                        Get personalized recommendations and insights based on your medication history and health data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                      <p className="text-muted-foreground">
                        Anticipate health trends and get proactive alerts before issues arise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-4 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Smart Interaction</h3>
                      <p className="text-muted-foreground">
                        Chat naturally with our AI to ask health questions, get medication information, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <Button className="group shadow-md hover:shadow-lg" asChild>
                    <Link href="/ai">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <LockIcon className="h-3.5 w-3.5 text-primary" />
                    <span>Secure AI processing</span>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/50 rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6 backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-xl shadow-lg border border-white/20 dark:border-white/10">
                    <div className="w-20 h-20 rounded-full bg-primary/30 mx-auto mb-4 flex items-center justify-center group perspective animate-pulse">
                      <BrainCircuit className="h-10 w-10 text-primary/90" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AI Module</h3>
                    <p className="text-sm font-medium mb-3">Coming Q3 2023</p>
                    <div className="flex justify-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-100"></span>
                      <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse delay-200"></span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose MediMate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex gap-4 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <div className="mt-1">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart AI</h3>
                  <p className="text-muted-foreground">Our AI-powered system learns your patterns and provides personalized reminders.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <div className="mt-1">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                  <p className="text-muted-foreground">Your health data is encrypted and secure, always under your control.</p>
                  <div className="mt-2 flex items-center text-xs text-primary/70">
                    <LockIcon className="h-3 w-3 mr-1" />
                    <span>HIPAA Compliant</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <div className="mt-1">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Health Insights</h3>
                  <p className="text-muted-foreground">Gain valuable insights about your medication routine and overall health.</p>
                  <div className="mt-2 flex items-center text-xs text-primary/70">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    <span>Doctor Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card text-card-foreground border-t border-primary/10 py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Logo size="md" />
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <LockIcon className="h-3.5 w-3.5 text-primary/70 mr-1" />
              <span>Secure & Private</span>
              <span>•</span>
              <span>© {new Date().getFullYear()} MediMate. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
