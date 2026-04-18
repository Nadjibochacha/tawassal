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
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const waitForVoices = (): Promise<SpeechSynthesisVoice[]> => {
    return new Promise((resolve) => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) return resolve(voices);

      const handler = () => {
        const updatedVoices = window.speechSynthesis.getVoices();
        if (updatedVoices.length) {
          window.speechSynthesis.onvoiceschanged = null;
          resolve(updatedVoices);
        }
      };

      window.speechSynthesis.onvoiceschanged = handler;
    });
  };

  const speak = async (
    text: string,
    options: TTSOptions = {}
  ): Promise<void> => {
    if (!("speechSynthesis" in window)) {
      throw new Error("Speech synthesis not supported");
    }

    if (!text.trim()) {
      return;
    }

    // Ensure voices are loaded
    let allVoices =
      voicesRef.current.length > 0
        ? voicesRef.current
        : await waitForVoices();

    if (!allVoices.length) {
      throw new Error("No voices available");
    }

    window.speechSynthesis.cancel();

    const utt = new SpeechSynthesisUtterance(text);

    // Filter Arabic voices
    const arabicVoices = allVoices.filter((v) =>
      v.lang.toLowerCase().startsWith("ar")
    );

    // Voice selection strategy
    const preferredVoice =
      arabicVoices.find((v) => v.lang === "ar-SA") ||
      arabicVoices[0] ||
      allVoices[0] ||
      null;

    console.log("Using voice:", preferredVoice);

    if (preferredVoice) {
      utt.voice = preferredVoice;
      utt.lang = preferredVoice.lang; // keep consistent
    }

    utt.rate = options.rate ?? 1;
    utt.pitch = options.pitch ?? 1;

    return new Promise((resolve, reject) => {
      utt.onend = () => resolve();
      utt.onerror = (e) =>
        reject(new Error(`Speech error: ${e.error}`));

      window.speechSynthesis.speak(utt);
    });
  };

  const stop = () => {
    window.speechSynthesis.cancel();
  };

  return { speak, stop };
}