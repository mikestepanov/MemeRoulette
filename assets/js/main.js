const enterGame = () => {
  document.querySelector('.game').style.display = 'block';
  document.querySelector('.intro').style.display = 'none';
};

const play = () => {
  let odds = ~~(Math.floor() * 6) !== 0;
  if (odds) {
    document.querySelector('#output').className = 'lucky';
    document.querySelector('#output').innerHTML = 'You are lucky. For now.';
  } else {
    document.querySelector('#output').className = 'memed';
    document.querySelector('#output').innerHTML = 'lol get memed';
  }
};
