"use client";

import { useState } from "react";
import { VoiceAssistant } from "./voice-assistant";
import { createContext, useContext } from "react";

// Create context for accessibility settings
export const AccessibilityContext = createContext({
  voiceAssistantEnabled: false,
  toggleVoiceAssistant: () => {},
});

export function useAccessibility() {
  return useContext(AccessibilityContext);
}

export function VoiceAssistantWrapper() {
  const [voiceAssistantEnabled, setVoiceAssistantEnabled] = useState(false);

  const toggleVoiceAssistant = () => {
    setVoiceAssistantEnabled(prev => !prev);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        voiceAssistantEnabled,
        toggleVoiceAssistant,
      }}
    >
      {voiceAssistantEnabled && <VoiceAssistant />}
    </AccessibilityContext.Provider>
  );
} 