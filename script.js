const soundsByCategory = {
  animals: [
    { id: "cat", label: "Cat Meow", file: "sounds/animals/cat.mp3", image: "images/cat.png" },
    { id: "dog", label: "Dog Bark", file: "sounds/animals/dog.mp3", image: "images/dog.png" }
  ],
  memes: [
    { id: "bruh", label: "Bruh", file: "sounds/memes/bruh.mp3", image: "images/bruh.png" },
    { id: "wow", label: "Wow", file: "sounds/memes/wow.mp3", image: "images/wow.png" }
  ]
};

let currentAudio = null;

document.addEventListener("DOMContentLoaded", () => {
  const categoryGrid = document.getElementById("category-grid");

  Object.keys(soundsByCategory).forEach(category => {
    const tile = document.createElement("div");
    tile.className = "category-tile";
    tile.onclick = () => renderSoundList(soundsByCategory[category]);

    const image = document.createElement("img");
    image.src = `images/${category}.png`;
    image.alt = category;

    const label = document.createElement("p");
    label.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    tile.appendChild(image);
    tile.appendChild(label);
    categoryGrid.appendChild(tile);
  });
});

function renderSoundList(sounds) {
  const container = document.getElementById("sound-list");
  container.innerHTML = "";

  sounds.forEach(sound => {
    const item = document.createElement("div");
    item.className = "sound-item";
    
    // Make the label itself the button to play the sound
    const labelButton = document.createElement("button");
    labelButton.textContent = sound.label;
    labelButton.onclick = () => playSound(sound.file);
    
    item.appendChild(labelButton);
    container.appendChild(item);
  });
}
function playSound(filePath) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(filePath);
  currentAudio.play();
}