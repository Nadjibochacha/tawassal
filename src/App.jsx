import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ZoneSelection from './pages/ZoneSelection';
import ListenGame from './pages/ListenGame';
import OddOneOutGame from './pages/OddOneOutGame';
import RiddleGame from './pages/RiddleGame';
import { getProgress, saveProgress } from './utils/storage';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import "./App.css"

function App() {
  const [screen, setScreen] = useState('home'); // 'home', 'zones', 'playing'
  const [gameMode, setGameMode] = useState(null); // 'listen', 'odd', 'riddle'
  const [activeZone, setActiveZone] = useState(null);
  const [userProgress, setUserProgress] = useState({ stars: 0, completedZones: [] });

  useEffect(() => {
    setUserProgress(getProgress());
  }, []);

  const handleSelectGame = (gameId) => {
    setGameMode(gameId);
    setScreen('zones');
  };

  const handleStartGame = (zoneId) => {
    setActiveZone(zoneId);
    setScreen('playing');
  };

  const handleLevelComplete = () => {
    // Save progress with a unique key for game + zone
    const updated = saveProgress(`${gameMode}_${activeZone}`, 10);
    setUserProgress(updated);
    setScreen('home');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#FFFBEB] font-arabic">
      <header className="p-4 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-orange-500 cursor-pointer" onClick={() => setScreen('home')}>توَاصَل</h1>
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md border-2 border-yellow-400">
          <Star className="text-yellow-400 fill-yellow-400" size={28} />
          <span className="text-2xl font-bold text-gray-700">{userProgress.stars}</span>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <AnimatePresence mode="wait">
          {screen === 'home' && (
            <Home key="home" onSelectGame={handleSelectGame} />
          )}

          {screen === 'zones' && (
            <ZoneSelection 
              key="zones"
              gameType={gameMode}
              onSelectZone={handleStartGame}
              completedZones={userProgress.completedZones}
              onBack={() => setScreen('home')}
            />
          )}

          {screen === 'playing' && (
            <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {gameMode === 'listen' && <ListenGame zoneId={activeZone} onComplete={handleLevelComplete} />}
              {gameMode === 'odd' && <OddOneOutGame zoneId={activeZone} onComplete={handleLevelComplete} />}
              {gameMode === 'riddle' && <RiddleGame zoneId={activeZone} onComplete={handleLevelComplete} />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;