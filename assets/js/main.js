let chambers;
let round;

const enterGame = () => {
  document.querySelector('.game').style.display = 'block';
  document.querySelector('.intro').style.display = 'none';
};

const play = () => {
  if (chambers[round]) {
    document.querySelector('#output').className = 'lucky';
    document.querySelector('#output').innerHTML = 'You are lucky. For now.';
  } else {
    document.querySelector('#output').className = 'memed';
    document.querySelector('#output').innerHTML = 'lol get memed';
  }
  round++;
  console.log(round);
};

const spin = () => {
  let randSpins = Math.floor(Math.random() * chambers.length * 3);
  let mod = randSpins % chambers.length;
  console.log(mod);
  for (let i = 0; i < mod; i++) {
    chambers.push(chambers.shift());
  }
  round = 0;
  console.log(chambers, round);
};

const setUp = (max) => {
  round = 0;
  let idx = Math.floor(Math.random() * max);
  chambers = [];
  for (let i = 0; i < max; i++) {
    if (i !== idx) {
      chambers.push(false);
    } else {
      chambers.push(true);
    }
  }
};

setUp(6);
console.log(chambers);
