// src/utils/sfx.js
import useSound from 'use-sound';


const SOUND_URLS = {
  success: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
  wrong: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3',
  celebrate: '../assets/songs/celabrate.mp3',
};

export const useGameSounds = () => {
  const [playSuccess] = useSound(SOUND_URLS.success, { volume: 0.5 });
  const [playWrong] = useSound(SOUND_URLS.wrong, { volume: 0.3 });
  const [playCelebrate] = useSound(SOUND_URLS.celebrate, { volume: 0.5 });

  return { playSuccess, playWrong, playCelebrate };
};