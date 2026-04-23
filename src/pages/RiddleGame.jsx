import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { riddleLevels } from '../data/riddle';
import { showFeedback } from '../utils/feedback';
import { useGameSounds } from '../utils/sfx';
import { useTextToSpeech } from '../hooks/audio';
import { Volume2 } from 'lucide-react';

const RiddleGame = ({ zoneId, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  const { playSuccess, playWrong, playCelebrate } = useGameSounds();
  const { speak } = useTextToSpeech();

  const currentZone = riddleLevels.find(z => z.id === zoneId);
  const questions = currentZone?.levels[0].questions || []; 
  const currentQuestion = questions[currentStep];

  useEffect(() => {
    if (!isFinished && currentQuestion) {
      speak(currentQuestion.riddle);
    }
  }, [currentStep, isFinished, currentQuestion]);

  const handleCorrect = async () => {
    setScore(prev => prev + 1);
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
    celebrateSound.play().catch((err) => {
      console.log("Browser blocked the celebration sound:", err);
    });
    await showFeedback.celebrate(currentZone.title, playCelebrate);
    onComplete();
  };

  const handleChoice = (optionId) => {
    if (optionId === currentQuestion.correctAnswerId) {
      handleCorrect();
    } else {
      handleWrong();
    }
  };

  // 1. The Finish Screen (Matches the other games exactly)
  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <motion.h2 initial={{scale:0}} animate={{scale:1}} className="text-5xl font-bold text-orange-500 mb-4">
          أحسنت! 🌟
        </motion.h2>
        <p className="text-2xl mb-8">لقد أنهيت مستوى {currentZone.title}</p>
        <button 
          onClick={onComplete}
          className="bg-green-500 text-white px-10 py-4 rounded-full text-2xl shadow-xl hover:bg-green-600"
        >
          العودة للرئيسية
        </button>
      </div>
    );
  }

  if (!currentQuestion) return <div>جاري التحميل...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 2. Progress Header */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm">
        <div className="text-2xl font-bold text-orange-500">
          اللغز: {currentStep + 1} / {questions.length}
        </div>
        <div className="w-1/2 bg-gray-200 h-4 rounded-full overflow-hidden flex-row-reverse">
          <motion.div 
            className="bg-orange-400 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* 3. The Animated Card Container (Mode="wait" ensures old card leaves before new one enters) */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white rounded-[40px] shadow-xl p-8 text-center border-b-8 border-gray-100"
        >
          
          {/* Riddle Display & Audio Button */}
          <div className="mb-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
              {currentQuestion.riddle}
            </h2>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => speak(currentQuestion.riddle)}
              className="bg-orange-100 text-orange-600 p-6 rounded-full shadow-md border-4 border-orange-200 hover:bg-orange-200 flex items-center justify-center"
            >
              <Volume2 size={48} />
            </motion.button>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {currentQuestion.options.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice(option.id)}
                className="bg-gray-50 p-4 rounded-3xl shadow-md border-4 border-transparent hover:border-orange-400 focus:outline-none transition-colors"
              >
                <img 
                  src={option.image} 
                  alt={option.name} 
                  className="w-full h-40 object-cover rounded-2xl mb-4"
                />
                <span className="text-2xl font-bold text-gray-700">{option.name}</span>
              </motion.button>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RiddleGame;