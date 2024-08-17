export const playSound = (sound: HTMLAudioElement): void => {
    sound.currentTime = 0;
    sound.play();
  };