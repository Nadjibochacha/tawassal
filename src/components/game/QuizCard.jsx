import React from 'react';
import { motion } from 'framer-motion';
import { playArabicSpeech } from '../../utils/audio';


const QuizCard = ({ question, options, onCorrectAnswer, onWrongAnswer }) => {
  
  const handleOptionClick = (choice) => {
    if (choice.id === question.id) {
      onCorrectAnswer();
    } else {
      onWrongAnswer(); 
      playArabicSpeech(choice.name); 
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="w-64 h-64 bg-white rounded-full border-8 border-yellow-400 shadow-xl overflow-hidden flex items-center justify-center cursor-pointer"
        onClick={() => playArabicSpeech(question.name)}
      >
        <img 
          src={question.image} 
          alt="quiz" 
          className="w-40 h-40 object-contain"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {options.map((choice) => (
          <motion.button
            key={choice.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOptionClick(choice)}
            className="p-6 text-3xl font-bold rounded-2xl shadow-lg border-b-8 bg-white border-gray-200 text-blue-600 active:border-b-0 active:translate-y-1 transition-all"
          >
            {choice.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;