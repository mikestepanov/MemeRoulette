let chambers;
let round;

const playground = document.querySelector(".playground");
const intro = document.querySelector(".intro");
const output = document.querySelector(".output");
const playButton = document.querySelector(".play-button");
const spinButton = document.querySelector(".spin-button");

playground.style.display = "none";

const enterGame = () => {
  playground.style.display = "block";
  intro.style.display = "none";
};

const play = () => {
  if (!chambers[round]) {
    output.className = "lucky";
    output.innerHTML = "You are lucky. For now.";
  } else {
    getMemed();
    output.className = "memed";
    output.innerHTML = "lol get memed!!! <br /> Please sit back and relax while your important files get deleted.";
    playButton.onclick = "";
    spinButton.onclick = "";
  }
  round++;
};

const spin = () => {
  let randSpins = rand(chambers.length * 3);
  let mod = randSpins % chambers.length;
  for (let i = 0; i < mod; i++) {
    chambers.push(chambers.shift());
  }
  round = 0;
};

const setUpGame = max => {
  round = 0;
  let idx = rand(max);
  chambers = [];
  for (let i = 0; i < max; i++) {
    if (i !== idx) {
      chambers.push(false);
    } else {
      chambers.push(true);
    }
  }
};

const rand = max => {
  return Math.floor(Math.random() * max);
};

setUpGame(6);
