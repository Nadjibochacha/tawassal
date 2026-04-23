import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { oddOneOutLevels } from '../data/oddOut'; 
import { showFeedback } from '../utils/feedback';
import { useGameSounds } from '../utils/sfx';
import { useTextToSpeech } from '../hooks/audio';
import { Volume2 } from 'lucide-react';

const OddOneOutGame = ({ zoneId, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  const { playSuccess, playWrong, playCelebrate } = useGameSounds();
  const { speak } = useTextToSpeech();

  // Get questions for the selected zone
  const currentZone = oddOneOutLevels.find(z => z.id === zoneId);
  const questions = currentZone?.levels[0].questions || [];
  const currentQuestion = questions[currentStep];

  useEffect(() => {
    if (!isFinished && currentQuestion) {
      speak(currentQuestion.instructions);
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
    celebrateSound.play().catch(() => {});
    await showFeedback.celebrate(currentZone.title, playCelebrate);
    onComplete();
  };

  const handleChoice = async (option) => {
    if (option.isOdd) {
      // Explain WHY it's correct, then trigger success
      await speak("أَحْسَنْت! " + currentQuestion.explanation);
      handleCorrect();
    } else {
      speak("حَاوِلْ مَرَّةً أُخْرَى");
      handleWrong();
    }
  };

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
      
      {/* 2. Your Exact Progress Header from ListenGame */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm">
        <div className="text-2xl font-bold text-blue-500">
          السؤال: {currentStep + 1} / {questions.length}
        </div>
        {/* Progress Bar */}
        <div className="w-1/2 bg-gray-200 h-4 rounded-full overflow-hidden flex-row-reverse">
          <motion.div 
            className="bg-green-400 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* 3. The Animated Card container mimicking QuizCard */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white rounded-[40px] shadow-xl p-8 text-center border-b-8 border-gray-100"
        >
          
          {/* Header & Audio Button */}
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {currentQuestion.instructions}
            </h2>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => speak(currentQuestion.instructions)}
              className="bg-blue-50 text-blue-600 p-4 rounded-full shadow-md hover:bg-blue-100"
            >
              <Volume2 size={36} />
            </motion.button>
          </div>

          {/* 4. Options Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {currentQuestion.options.map((opt) => (
              <motion.button
                key={opt.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice(opt)}
                className="bg-gray-50 p-4 rounded-3xl shadow-md border-4 border-transparent hover:border-blue-400 transition-colors"
              >
                <img 
                  src={opt.image} 
                  alt={opt.name} 
                  className="w-full h-40 sm:h-56 object-cover rounded-2xl mb-4" 
                />
                <span className="text-2xl font-bold text-gray-700">{opt.name}</span>
              </motion.button>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default OddOneOutGame;