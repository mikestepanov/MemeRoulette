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
  console.log(round, chambers[round]);
};

const spin = () => {
  let randSpins = rand(chambers.length * 3);
  console.log('randSpins', randSpins);
  let mod = randSpins % chambers.length;
  for (let i = 0; i < mod; i++) {
    chambers.push(chambers.shift());
  }
  round = 0;
  console.log(chambers, round);
};

const setUp = (max) => {
  round = 0;
  let idx = rand(max);
  console.log('idx', idx);
  chambers = [];
  for (let i = 0; i < max; i++) {
    if (i !== idx) {
      chambers.push(false);
    } else {
      chambers.push(true);
    }
  }
};

const rand = (max) => {
  return Math.floor(Math.random() * max);
}

setUp(6);
console.log(chambers, round);
