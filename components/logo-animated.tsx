import { Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoAnimatedProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white";
  asLink?: boolean;
}

export function LogoAnimated({ size = "md", variant = "default", asLink = true }: LogoAnimatedProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
    xl: "text-5xl",
  };

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const LogoContent = (
    <div className="flex items-center group">
      <div className={cn(
        "relative mr-4 group-hover:-rotate-6 transition-transform duration-700",
        iconSizes[size]
      )}>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className={cn(
            "relative w-full h-full rounded-full",
            variant === "default" ? "text-primary" : "text-white"
          )}>
            {/* Base heart */}
            <Heart 
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5", 
                "fill-current opacity-90 group-hover:scale-110 transition-all duration-500"
              )} 
            />
            
            {/* Shadow heart */}
            <Heart 
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-[55%] -translate-y-[45%] rotate-12 w-4/5 h-4/5", 
                "fill-current opacity-40 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700"
              )} 
            />
            
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="flex items-center">
        <span className={cn(
          sizeClasses[size],
          "font-bold tracking-tight",
          variant === "white" ? "text-white" : "text-gray-900 dark:text-white"
        )}>
          Medi<span className={cn(
            "font-bold relative",
            variant === "default" ? "text-primary" : "text-white"
          )}>Mate
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </span>
        </span>
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
        <div className="absolute inset-0 translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </div>
  );

  if (asLink) {
    return <Link href="/" className="relative hover:opacity-95 transition-opacity">{LogoContent}</Link>;
  }

  return <div className="relative">{LogoContent}</div>;
} 