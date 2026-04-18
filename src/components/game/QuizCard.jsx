import React from 'react';
import { motion } from 'framer-motion';
import { useTextToSpeech } from "../../utils/audio";

const QuizCard = ({ question, options, onCorrectAnswer, onWrongAnswer }) => {
  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const { speak } = useTextToSpeech();

  const handleOptionClick = async (choice) => {
    speak(choice.name);
    await delay(1000);
    if (choice.id === question.id) {
      onCorrectAnswer();
    } else {
      onWrongAnswer(); 
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      {/* Main Image */}
      <motion.div 
        whileHover={{ rotate: -2 }}
        onClick={()=>speak(question.name)}
        className="w-64 h-64 bg-white rounded-[50px] border-8 border-yellow-400 shadow-2xl overflow-hidden flex items-center justify-center cursor-pointer"
      >
        
        <img src={question.image} alt="quiz" className="w-44 h-44 object-contain" />
      </motion.div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
        {options.map((choice) => (
          <motion.button
            key={choice.id}
            onClick={() => handleOptionClick(choice)}
            className="p-6 cursor-pointer text-3xl font-bold rounded-[30px] shadow-lg border-b-8 bg-white border-blue-100 text-blue-600 active:border-b-0 active:translate-y-2 transition-all"
          >
            {choice.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;