import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizCard from '../components/game/QuizCard';
import confetti from 'canvas-confetti';
import { zones } from '../data/levels'; 
import { showFeedback } from '../utils/feedback';
import { useGameSounds } from '../utils/sfx';

const ListenGame = ({ zoneId, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { playSuccess, playWrong, playCelebrate } = useGameSounds();
  // Get questions for the selected zone
  const currentZone = zones.find(z => z.id === zoneId);
  const questions = currentZone.levels[0].questions; // Simplified for Level 1
  const currentQuestion = questions[currentStep];

  const handleCorrect = async () => {
    setScore(prev => prev + 1);
    
    // Pass the sound function into the feedback utility
    await showFeedback.correct(playSuccess); 
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      finishGame();
    }
  };

  const handleWrong = () => {
    // Pass the sound function here too
    showFeedback.wrong(playWrong);
  };

  const finishGame = async () => {
    setIsFinished(true);
    // Pass the celebration sound
    await showFeedback.celebrate(currentZone.title, playCelebrate);
    onComplete();
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

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Progress Header */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm">
        <div className="text-2xl font-bold text-blue-500">
          السؤال: {currentStep + 1} / {questions.length}
        </div>
        {/* Progress Bar */}
        <div className="w-1/2 bg-gray-200 h-4 rounded-full overflow-hidden">
          <motion.div 
            className="bg-green-400 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <QuizCard 
          key={currentQuestion.id}
          question={currentQuestion}
          options={currentQuestion.options} 
          onCorrectAnswer={handleCorrect}
          onWrongAnswer={handleWrong}
        />
      </AnimatePresence>
    </div>
  );
};

export default ListenGame;