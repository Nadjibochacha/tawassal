import { useState, useRef, useCallback } from 'react';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef(null);

  const speak = useCallback(async (text, lang = 'Zeina') => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (!text) return;

    setIsSpeaking(true);

    try {
      // تم تغيير الرابط هنا لاستخدام الـ Proxy الذي أعددناه في Vite
      const response = await fetch('/tts-api/makemp3_new.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          msg: text,
          lang: lang,
          source: 'ttsmp3'
        })
      });

      const data = await response.json();

      if (data.Error === 0 && data.URL) {
        const audio = new Audio(data.URL);
        audioRef.current = audio;

        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => setIsSpeaking(false);

        await audio.play();
      } else {
        console.error('TTS API Error:', data);
        setIsSpeaking(false);
      }
    } catch (error) {
      console.error('Network or TTS error:', error);
      setIsSpeaking(false);
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsSpeaking(false);
    }
  }, []);

  return { speak, stop, isSpeaking };
};