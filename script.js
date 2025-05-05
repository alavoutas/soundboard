function playSound(soundId) {
  const audio = new Audio(`sounds/${soundId}.mp3`);
  audio.play();
}
