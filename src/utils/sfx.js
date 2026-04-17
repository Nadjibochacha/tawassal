import useSound from 'use-sound';


const SOUND_URLS = {
  success: 'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/web-24dp/logo_googleg_color_24dp.png', // Wait, this is an image. 
  
  // Let's use these reliable GitHub-hosted or Wikimedia Commons assets:
  success: 'https://actions.google.com/sounds/v1/cartoon/clime.ogg',
  wrong: 'https://actions.google.com/sounds/v1/cartoon/pop.ogg',
  celebrate: 'https://actions.google.com/sounds/v1/human_voices/applause.ogg',
};

export const useGameSounds = () => {
  const [playSuccess] = useSound(SOUND_URLS.success, { volume: 0.5 });
  const [playWrong] = useSound(SOUND_URLS.wrong, { volume: 0.3 });
  const [playCelebrate] = useSound(SOUND_URLS.celebrate, { volume: 0.5 });

  return { playSuccess, playWrong, playCelebrate };
};