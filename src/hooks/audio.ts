import { useEffect, useRef } from "react";
import { useTextToSpeech as useFallbackTTS } from "./audio2"; 

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
  const { speak: fallbackSpeak, stop: fallbackStop } = useFallbackTTS(); 

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
    return new Promise(async (resolve, reject) => {
      if (!text.trim()) {
        return resolve();
      }

      if (!("speechSynthesis" in window)) {
        console.warn("Speech API not supported. Using fallback...");
        await fallbackSpeak(text);
        return resolve();
      }
  
      window.speechSynthesis.cancel();
  
      const utt = new SpeechSynthesisUtterance(text);
      const allVoices = window.speechSynthesis.getVoices();
      const arabicVoice = allVoices.find(v => v.lang.startsWith("ar"));
      if (!arabicVoice) {
        console.warn("No native Arabic voice found. Using TTSMP3 fallback...");
        await fallbackSpeak(text);
        return resolve();
      }

      utt.voice = arabicVoice;
      utt.lang = arabicVoice.lang;
      
      utt.rate  = options.rate  ?? 1;
      utt.pitch = options.pitch ?? 1;
  
      utt.onend   = () => resolve();
      
      // 4. إذا حدث خطأ أثناء المحاولة بالصوت الأساسي، شغل البديل
      utt.onerror = async (e) => {
        console.warn(`Native speech error: ${e.error}. Switching to fallback...`);
        await fallbackSpeak(text);
        resolve();
      };
  
      window.speechSynthesis.speak(utt);
    });
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    fallbackStop();
  };

  return { speak, stop };
}