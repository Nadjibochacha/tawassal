import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { actionLevels } from '../data/actionLevels'; 
import { showFeedback } from '../utils/feedback';
import { useGameSounds } from '../utils/sfx';
import { useTextToSpeech } from '../hooks/audio'; 
import { Volume2 } from 'lucide-react';

const VerbGame = ({ zoneId, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const { playSuccess, playWrong, playCelebrate } = useGameSounds();
  const { speak } = useTextToSpeech();

  const currentZone = actionLevels.find(z => z.id === zoneId) || actionLevels[0];
  const questions = currentZone?.levels?.[0]?.questions || [];
  const currentQuestion = questions[currentStep];

  useEffect(() => {
    if (!isFinished && currentQuestion) {
      speak(currentQuestion.instructions);
    }
  }, [currentStep, isFinished, currentQuestion]);

  const handleCorrect = async () => {
    await showFeedback.correct(playSuccess); 
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      finishGame();
    }
  };

  const handleWrong = () => {
    showFeedback.wrong(playWrong);
  };

  const finishGame = async () => {
    setIsFinished(true);
    const celebrateSound = new Audio('../assets/songs/celabrate.mp3');
    celebrateSound.play().catch(() => {});
    await showFeedback.celebrate(currentZone.title, playCelebrate);
    onComplete();
  };

  const handleChoice = async (optionName) => {
    speak(optionName);
    await delay(1500);
    if (optionName === currentQuestion.correctAnswer) {
      handleCorrect();
    } else {
      speak("حَاوِلْ ثانِيَتَنْ");
      handleWrong();
    }
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <motion.h2 initial={{scale:0}} animate={{scale:1}} className="text-5xl font-bold text-purple-600 mb-4">
          بطل متميز! 🌟
        </motion.h2>
        <p className="text-2xl mb-8">لقد تعلمت أفعال مستوى {currentZone.title}</p>
        <button 
          onClick={onComplete}
          className="bg-purple-500 text-white px-10 py-4 rounded-full text-2xl shadow-xl hover:bg-purple-600"
        >
          العودة للرئيسية
        </button>
      </div>
    );
  }

  if (!currentQuestion) return <div className="text-center p-10">جاري التحميل...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4" dir="rtl">
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border-b-4 border-purple-100">
        <div className="text-2xl font-bold text-purple-600">
          السؤال: {currentStep + 1} / {questions.length}
        </div>
        <div className="w-1/2 bg-gray-200 h-4 rounded-full overflow-hidden">
          <motion.div 
            className="bg-purple-400 h-full float-right"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-[40px] shadow-2xl p-6 text-center border-b-8 border-gray-100"
        >
          <div className="flex flex-col items-center mb-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => speak(currentQuestion.instructions)}
              className="bg-purple-50 text-purple-600 p-4 rounded-full mb-6 shadow-md"
            >
              <Volume2 size={32} />
            </motion.button>

            <img 
              src={currentQuestion.image} 
              alt="Action" 
              className="w-full max-h-72 object-contain rounded-3xl mb-4 border-4 border-dashed border-purple-100 p-2" 
            />
            
            <h2 className="text-3xl font-bold text-gray-800">
              {currentQuestion.instructions}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentQuestion.options.map((opt) => (
              <motion.button
                key={opt.id} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice(opt.name)} 
                className="bg-white cursor-pointer hover:bg-purple-50 text-gray-700 text-3xl font-bold py-6 px-4 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-purple-400 transition-all"
              >
                {opt.name} 
              </motion.button>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VerbGame;