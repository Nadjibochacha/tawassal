import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ onSelectGame }) => {
  const games = [
    { id: 'listen', title: 'اِسْمَعْ وَاخْتَرْ', icon: '🎧', color: 'text-blue-600' },
    { id: 'odd', title: 'لُعْبَةُ الْغَرِيب', icon: '🔍', color: 'text-purple-600' },
    { id: 'riddle', title: 'لُعْبَةُ الْحَزَازِير', icon: '💡', color: 'text-orange-600' },
    {id: 'verbgame', title: 'لعبة الأفعال',icon: '🏃‍♂️',color: 'text-cyan-600'}
  ];

  const handleGameClick = (gameId) => {
    const probe = new SpeechSynthesisUtterance("");
    window.speechSynthesis.speak(probe);
    onSelectGame(gameId);
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-black text-center text-gray-800  mb-10">
        هَيَّا نَلْعَب يا بَطَل!
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => handleGameClick(game.id)}
            className="group relative cursor-pointer p-10 rounded-[40px] shadow-xl transition-all border-b-8 bg-white border-gray-100 active:border-b-0 active:translate-y-2 hover:bg-yellow-50 flex flex-col items-center"
          >
            <div className="text-9xl mb-6 group-hover:scale-110 transition-transform">
              {game.icon}
            </div>
            <div className={`text-3xl font-bold uppercase ${game.color}`}>
              {game.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;