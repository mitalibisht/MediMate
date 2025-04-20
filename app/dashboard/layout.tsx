"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { 
  CalendarClock, 
  LayoutDashboard, 
  PillIcon, 
  Bell,
  Settings, 
  UserCircle, 
  LogOut,
  Menu,
  Gauge,
  BrainCircuit
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      href: "/dashboard/medications",
      label: "Medications",
      icon: <PillIcon className="h-5 w-5" />,
    },
    {
      href: "/dashboard/schedule",
      label: "Schedule",
      icon: <CalendarClock className="h-5 w-5" />,
    },
    {
      href: "/dashboard/reminders",
      label: "Reminders",
      icon: <Bell className="h-5 w-5" />,
    },
    {
      href: "/ai",
      label: "AI Assistant",
      icon: <BrainCircuit className="h-5 w-5" />,
      badge: "Soon"
    },
  ]

  const accountItems = [
    {
      href: "/dashboard/profile",
      label: "Profile",
      icon: <UserCircle className="h-5 w-5" />,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between p-4">
        <Logo size="md" />
        <ThemeToggle />
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-4">
          <div className="text-sm text-muted-foreground mb-2 mt-2">Main</div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
              )}
            >
              {item.icon}
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <Badge variant="outline" className="ml-auto text-xs py-0 h-5">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
          <div className="text-sm text-muted-foreground mb-2 mt-4">Account</div>
          {accountItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </>
  )

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen bg-background">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-card min-h-screen">
          <SidebarContent />
        </aside>

        {/* Mobile sidebar */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 max-w-[280px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>

        <div className="flex-1 overflow-auto">
          <div className="flex md:hidden items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <Logo size="sm" />
            </div>
            <ThemeToggle />
          </div>
          <div className="container py-6 px-4 md:px-6 max-w-7xl">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
} 