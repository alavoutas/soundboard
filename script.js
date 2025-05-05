let currentAudio = null;

function playSound(soundId) {
  // If there's already a sound playing, stop it
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset to the beginning of the sound
  }

  // Create a new audio object for the selected sound
  currentAudio = new Audio(`sounds/${soundId}.mp3`);
  currentAudio.play();

  // Optionally: Display the sound being played
  console.log(`Now playing: ${soundId}`);
}