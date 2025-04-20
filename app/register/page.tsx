import Link from "next/link"
import { RegisterForm } from "@/components/register-form"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <RegisterForm />
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Already have an account? Use our demo:</p>
            <p>Email: demo@medimate.com</p>
            <p>Password: demopass</p>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} MediMate. All rights reserved.</p>
      </footer>
    </div>
  )
} 