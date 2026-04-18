import { useState } from 'react';

export const useSpeech = () => {
  // 1. Function to Speak (Listen Branch)
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA'; 
    window.speechSynthesis.speak(utterance);
  };

  // 2. Logic for Listening (Speak Branch)
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'ar';
    
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.start();
  };

  return { speak, startListening, transcript, isListening };
};