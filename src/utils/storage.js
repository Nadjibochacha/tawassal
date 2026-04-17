const STORAGE_KEY = import.meta.env.STORAGE_KEY;

export const getProgress = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { stars: 0, completedZones: [] };
};

export const saveProgress = (zoneId, starsEarned) => {
  const current = getProgress();
  const updated = {
    stars: current.stars + starsEarned,
    completedZones: current.completedZones.includes(zoneId) 
      ? current.completedZones 
      : [...current.completedZones, zoneId]
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};