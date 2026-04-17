import "./App.css"
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ListenGame from './pages/ListenGame';
import { getProgress, saveProgress } from './utils/storage';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [screen, setScreen] = useState('home'); // 'home' or 'playing'
  const [activeZone, setActiveZone] = useState(null);
  const [userProgress, setUserProgress] = useState({ stars: 0, completedZones: [] });

  // Load progress when app starts
  useEffect(() => {
    setUserProgress(getProgress());
  }, []);

  const handleStartGame = (zoneId) => {
    setActiveZone(zoneId);
    setScreen('playing');
  };

  const handleLevelComplete = () => {
    // Reward 10 stars for finishing a level
    const updated = saveProgress(activeZone, 10);
    setUserProgress(updated);
    setScreen('home');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FFFBEB] font-arabic selection:bg-yellow-200">
      {/* Global Header */}
      <header className="p-4 flex justify-between items-center max-w-6xl mx-auto">
        <motion.h1 
          whileHover={{ rotate: -2 }}
          className="text-4xl font-black text-orange-500 drop-shadow-sm cursor-pointer"
          onClick={() => setScreen('home')}
        >
          ماذا أنا؟
        </motion.h1>

        {/* Star Counter */}
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md border-2 border-yellow-400">
          <Star className="text-yellow-400 fill-yellow-400" size={28} />
          <span className="text-2xl font-bold text-gray-700">{userProgress.stars}</span>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <AnimatePresence mode="wait">
          {screen === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Home 
                onSelectZone={handleStartGame} 
                completedZones={userProgress.completedZones}
              />
            </motion.div>
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <ListenGame 
                zoneId={activeZone} 
                onComplete={handleLevelComplete} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;