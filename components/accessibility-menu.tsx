"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accessibility,
  Type,
  Volume2,
  Sun,
  Moon,
  Contrast,
  Maximize,
  Minimize,
  RotateCcw,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useTheme } from "next-themes";
import { useAccessibility } from "./voice-assistant-wrapper";

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(100);
  const { theme, setTheme } = useTheme();
  const { voiceAssistantEnabled, toggleVoiceAssistant } = useAccessibility();
  
  const applyFontSize = (size: number) => {
    document.documentElement.style.setProperty("--font-size-multiplier", `${size}%`);
    setFontSize(size);
  };
  
  const resetSettings = () => {
    applyFontSize(100);
    document.documentElement.classList.remove("high-contrast");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5"
          title="Accessibility Options"
        >
          <Accessibility className="h-4 w-4 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px] border-l border-primary/20">
        <div className="py-6">
          <h2 className="text-xl font-medium text-primary mb-6">
            Accessibility
          </h2>
        
          <div className="space-y-10">
            {/* Voice Assistant Toggle */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                <h3 className="text-base font-medium">Voice Assistant</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Enable voice commands and screen reading
              </p>
              <div className="mt-2">
                <Switch
                  id="voice-assistant"
                  checked={voiceAssistantEnabled}
                  onCheckedChange={toggleVoiceAssistant}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
            </div>
            
            {/* Text Size */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Type className="h-5 w-5 text-primary" />
                <h3 className="text-base font-medium">Text Size</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between text-sm">
                  <span>Smaller</span>
                  <span>Default</span>
                  <span>Larger</span>
                </div>
                <Slider
                  min={80}
                  max={150}
                  step={10}
                  value={[fontSize]}
                  onValueChange={(value) => applyFontSize(value[0])}
                  className="[&>span]:bg-primary"
                />
                
                <div className="flex justify-between mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-10 w-10 p-0 border-primary/20"
                    onClick={() => applyFontSize(Math.max(80, fontSize - 10))}
                  >
                    <Minimize className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-10 px-4 text-sm border-primary/20"
                    onClick={() => applyFontSize(100)}
                  >
                    Reset (100%)
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-10 w-10 p-0 border-primary/20"
                    onClick={() => applyFontSize(Math.min(150, fontSize + 10))}
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Theme Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Contrast className="h-5 w-5 text-primary" />
                <h3 className="text-base font-medium">Color Theme</h3>
              </div>
              
              <div className="flex items-center justify-between gap-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  size="sm"
                  className={`flex-1 gap-2 ${theme === "light" ? "bg-primary" : "border-primary/20"}`}
                  onClick={() => setTheme("light")}
                >
                  <Sun className="h-4 w-4" />
                  <span>Light</span>
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  size="sm"
                  className={`flex-1 gap-2 ${theme === "dark" ? "bg-primary" : "border-primary/20"}`}
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="h-4 w-4" />
                  <span>Dark</span>
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  size="sm"
                  className={`flex-1 ${theme === "system" ? "bg-primary" : "border-primary/20"}`}
                  onClick={() => setTheme("system")}
                >
                  System
                </Button>
              </div>
            </div>
            
            {/* Reset All */}
            <Button
              variant="outline"
              className="w-full border-primary/20"
              onClick={resetSettings}
            >
              <RotateCcw className="h-4 w-4 mr-2" /> Reset All Settings
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 