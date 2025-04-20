"use client";

import { useState, useEffect, useRef } from 'react';
import { Volume2, Mic, MicOff, X } from 'lucide-react';
import { Button } from './ui/button';
import { useAccessibility } from './voice-assistant-wrapper';
import { useToast } from './ui/use-toast';

// Add TypeScript declaration for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface SpeechRecognitionEvent {
  resultIndex: number;
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
        confidence: number;
      }
    }
  }
}

// Add interface for speech recognition error events
interface SpeechRecognitionErrorEvent {
  error: string;
  message?: string;
}

export function VoiceAssistant() {
  const { voiceAssistantEnabled } = useAccessibility();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showAssistant, setShowAssistant] = useState(false);
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (!voiceAssistantEnabled) {
      if (isListening) stopListening();
      if (showAssistant) setShowAssistant(false);
    }
  }, [voiceAssistantEnabled]);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript;
          setTranscript(transcript);
          // Auto stop listening when we have a result
          stopListening();
          // Process command
          handleSubmit();
        };

        recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error', event.error);
          stopListening();
        };

        recognitionRef.current.onend = () => {
          if (isListening) {
            recognitionRef.current?.start();
          }
        };
      } else {
        console.error('Speech recognition not supported in this browser');
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
      }
    };
  }, [isListening]);

  const startListening = () => {
    setTranscript('');
    setResponse('');
    setIsListening(true);
    setIsProcessing(true);
    setShowAssistant(true);
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    stopListening();
    setShowAssistant(false);
    setTranscript('');
    setResponse('');
  };

  const handleSubmit = () => {
    if (transcript.trim() === '') return;
    
    // Process command
    const lowerTranscript = transcript.toLowerCase();
    
    if (lowerTranscript.includes('go to dashboard') || lowerTranscript.includes('open dashboard')) {
      setResponse('Navigating to dashboard...');
      setTimeout(() => window.location.href = '/dashboard', 1500);
    } else if (lowerTranscript.includes('go to features') || lowerTranscript.includes('show features')) {
      setResponse('Navigating to features page...');
      setTimeout(() => window.location.href = '/features', 1500);
    } else if (lowerTranscript.includes('go home') || lowerTranscript.includes('go to home')) {
      setResponse('Navigating to home page...');
      setTimeout(() => window.location.href = '/', 1500);
    } else if (lowerTranscript.includes('go to ai') || lowerTranscript.includes('show ai')) {
      setResponse('Navigating to AI assistant page...');
      setTimeout(() => window.location.href = '/ai', 1500);
    } else if (lowerTranscript.includes('what can you do') || lowerTranscript.includes('help me')) {
      setResponse('I can help you navigate the site, show information about medications, or assist with scheduling. Try saying "Go to dashboard" or "Show my medications".');
    } else if (lowerTranscript.includes('dark mode') || lowerTranscript.includes('switch to dark')) {
      setResponse('Switching to dark mode...');
      document.documentElement.classList.add('dark');
      toast({
        title: "Dark mode enabled",
        description: "Display settings updated via voice command",
      });
    } else if (lowerTranscript.includes('light mode') || lowerTranscript.includes('switch to light')) {
      setResponse('Switching to light mode...');
      document.documentElement.classList.remove('dark');
      toast({
        title: "Light mode enabled",
        description: "Display settings updated via voice command",
      });
    } else {
      setResponse(`I heard: "${transcript}". I'm not sure how to help with that. Try asking for navigation or medications help.`);
    }
    
    // Reset transcript after processing
    setTranscript('');
    setIsProcessing(false);
  };

  // Don't render if not enabled
  if (!voiceAssistantEnabled) {
    return null;
  }

  return (
    <>
      {!showAssistant && (
        <Button
          onClick={startListening}
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 z-50"
        >
          <Volume2 size={24} />
        </Button>
      )}

      {showAssistant && (
        <div className="fixed bottom-6 right-6 w-80 bg-card rounded-lg shadow-lg border border-border z-50">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Voice Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={handleClose} className="h-7 w-7">
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-4 max-h-[300px] overflow-y-auto">
            {response && (
              <div className="bg-muted p-3 rounded-lg mb-4">
                <p className="text-sm">{response}</p>
              </div>
            )}
            
            <div className="flex items-center gap-2 bg-background p-3 rounded-lg border border-border">
              {isListening ? (
                <>
                  <div className="w-full">
                    <p className="text-sm text-muted-foreground mb-1">Listening...</p>
                    <p className="text-sm">{transcript || "Say something..."}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className="h-1 w-1 rounded-full bg-primary animate-pulse" 
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    className="h-8 w-8 shrink-0" 
                    onClick={stopListening}
                  >
                    <MicOff className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  <div className="w-full">
                    <p className="text-sm">{transcript || "Press mic to speak"}</p>
                  </div>
                  <Button 
                    variant="default" 
                    size="icon"
                    className="h-8 w-8 bg-primary shrink-0" 
                    onClick={startListening}
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
          
          <div className="p-4 border-t border-border">
            <Button 
              onClick={handleSubmit} 
              disabled={!transcript}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Submit
            </Button>
            <div className="mt-2 text-xs text-muted-foreground">
              <p>Try saying: "Go to dashboard", "Show features", "Switch to dark mode"</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 