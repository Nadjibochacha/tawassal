export const playArabicSpeech = (text) => {
  console.log("Attempting to speak:", text);
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA'; 
  
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    
    const arVoice = voices.find(v => v.lang.includes('ar'));
    if (arVoice) utterance.voice = arVoice;
  }

  window.speechSynthesis.speak(utterance);
};