// useTextToSpeech.ts
import { useEffect, useRef } from "react";

interface TTSOptions {
  rate?: number;   
  pitch?: number; 
}

interface TTSResult {
  speak: (text: string, options?: TTSOptions) => Promise<void>;
  stop: () => void;
}

export function useTextToSpeech(): TTSResult {
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = (text: string, options: TTSOptions = {}): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!("speechSynthesis" in window)) {
        return;
      }
  
      if (!text.trim()) {
        return;
      }
  
      window.speechSynthesis.cancel();
  
      const utt = new SpeechSynthesisUtterance(text);
  
      const allVoices = window.speechSynthesis.getVoices();
      const arabicVoice = allVoices.find(v => v.lang === "ar-SA")
        ?? allVoices.find(v => v.lang.startsWith("ar"))
        ?? allVoices[0]   // fallback: just use whatever is available
        ?? null;
  
      console.log("Using voice:", arabicVoice); // remove after debugging
  
      utt.voice = arabicVoice;
      utt.lang  = "ar-SA"; // always force Arabic, regardless of voice
      utt.rate  = options.rate  ?? 1;
      utt.pitch = options.pitch ?? 1;
  
      utt.onend   = () => resolve();
      utt.onerror = (e) => {
        reject(new Error(`Speech error: ${e.error}`));
      };
  
      window.speechSynthesis.speak(utt);
    });
  };

  const stop = () => {
    window.speechSynthesis.cancel();
  };

  return { speak, stop };
}