import React from 'react';
import { zones } from '../data/levels';
import { Star } from 'lucide-react'; 

const Home = ({ onSelectZone, completedZones = [] }) => {
  const handleZoneClick = (zoneId) => {
    const probe = new SpeechSynthesisUtterance("");
    window.speechSynthesis.speak(probe);
    onSelectZone(zoneId);
  };
  return (
    <div className="p-6">
      <h2 className="text-4xl font-black text-center text-gray-800 mb-10">
        اختر مكاناً لنتعلم!
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {zones.map((zone) => {
          const isDone = completedZones.includes(zone.id);
          
          return (
            <button
              key={zone.id}
              onClick={() => handleZoneClick(zone.id)}
              className={`group relative cursor-pointer p-8 rounded-[40px] shadow-xl transition-all border-b-8 
                ${isDone 
                  ? 'bg-green-50 border-green-400 text-green-700' 
                  : 'bg-white border-gray-100 text-blue-600'
                } 
                active:border-b-0 active:translate-y-2 hover:bg-yellow-50`}
            >
              {isDone && (
                <div className="absolute top-6 right-6 text-yellow-500 animate-bounce">
                  <Star fill="currentColor" size={32} />
                </div>
              )}

              <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">
                {zone.icon}
              </div>
              
              <div className="text-3xl font-bold uppercase tracking-wide">
                {zone.title}
              </div>
              <div className="mt-2 text-sm opacity-60">
                {isDone ? 'تم الإكمال!' : '١٢ كلمة جديدة'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;