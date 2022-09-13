// const table = document.getElementById('table');
// table.addEventListener('click', tableClick);

// ////////////////////////////////////////////////////////////
let playingField = document.getElementById('playingField');
let playingSquare = document.querySelectorAll('.playingSquare');

playingField.addEventListener('click', clickedSquare);

let target;
let num = 0;

function clickedSquare(e) {
  target = e.target;
  num++;
  const player = playerType(num);
}

const playerType = (num) => {
  if (num % 2 == 0) {
    target.innerHTML = 'x';
  } else {
    target.innerHTML = 'o';
  }
};
