import { Heart } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "white"
  asLink?: boolean
}

export function Logo({ size = "md", variant = "default", asLink = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  }

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }

  const LogoContent = (
    <div className="flex items-center">
      <div className={cn(
        "relative mr-3",
        iconSizes[size]
      )}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={cn(
            "relative w-full h-full",
            variant === "default" ? "text-primary" : "text-white"
          )}>
            <Heart 
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5", 
                "fill-current opacity-90"
              )} 
            />
            <Heart 
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-[55%] -translate-y-[45%] rotate-12 w-4/5 h-4/5", 
                "fill-current opacity-40"
              )} 
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className={cn(
          sizeClasses[size],
          "font-bold tracking-tight",
          variant === "white" ? "text-white" : "text-gray-900 dark:text-white"
        )}>
          Medi<span className={cn(
            "font-bold",
            variant === "default" ? "text-primary" : "text-white"
          )}>Mate</span>
        </span>
      </div>
    </div>
  )

  if (asLink) {
    return <Link href="/" className="hover:opacity-90 transition-opacity">{LogoContent}</Link>
  }

  return LogoContent
}
