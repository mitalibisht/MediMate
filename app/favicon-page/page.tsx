"use client";

import { FaviconGenerator } from "@/components/favicon-generator";

export default function FaviconPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <FaviconGenerator />
      <div className="fixed bottom-4 left-4 bg-card p-4 rounded-lg shadow-lg">
        <p className="text-sm text-muted-foreground">
          Right-click on the image and save it as a PNG, then convert to favicon formats.
        </p>
      </div>
    </div>
  );
} 