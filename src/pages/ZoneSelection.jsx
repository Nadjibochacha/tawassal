import React from 'react';
import { Star } from 'lucide-react';
import { zones } from '../data/levels'; 
import { riddleLevels } from '../data/riddle';
import { oddOneOutLevels } from '../data/oddOut'; 

const ZoneSelection = ({ gameType, onSelectZone, completedZones = [], onBack }) => {
  const getActiveZones = () => {
    if (gameType === 'listen') return zones;
    if (gameType === 'riddle') return riddleLevels;
    if (gameType === 'odd') return oddOneOutLevels; 
    
    return zones; 
  };

  const currentZones = getActiveZones();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-gray-800">اختر مكاناً لنتعلم!</h2>
        <button onClick={onBack} className="text-xl cursor-pointer font-bold text-blue-500 bg-white px-6 py-2 rounded-full shadow-sm transition-all duration-200 hover:scale-110">
          ← العودة
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 3. Map over currentZones instead of the hardcoded 'zones' */}
        {currentZones.map((zone) => {
          const gameZoneId = `${gameType}_${zone.id}`;
          const isDone = completedZones.includes(gameZoneId);
          return (
            <button
              key={zone.id}
              onClick={() => onSelectZone(zone.id)}
              className={`group relative p-8 rounded-[40px] shadow-xl border-b-8 transition-all cursor-pointer
                ${isDone ? 'bg-green-50 border-green-400 text-green-700' : 'bg-white border-gray-100 text-blue-600'} 
                active:border-b-0 active:translate-y-2 hover:bg-yellow-50`}
            >
              {isDone && <Star fill="currentColor" size={32} className="absolute top-6 right-6 text-yellow-500 animate-bounce" />}
              <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">{zone.icon}</div>
              <div className="text-3xl font-bold uppercase">{zone.title}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ZoneSelection;