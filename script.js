let playingField = document.getElementById('playingField');
let playingSquares = document.querySelectorAll('.playingSquare');

playingField.addEventListener('click', clickedSquare);

let target;
let num = 0;
let gameBoard = [];

for (const playingSquare of playingSquares) {
  gameBoard.push(playingSquare);
}

function checkWinner(num, xOrY) {
  return gameBoard[num].classList.contains(xOrY);
}

function clickedSquare(e) {
  target = e.target;
  if (target.classList.contains('taken')) {
    alert('This square is already taken');
    return;
  }

  num++;
  const player = playerType(num);
}

const playerType = (num) => {
  target.classList.add('taken');
  if (num % 2 == 0) {
    target.innerHTML = 'x';
    target.classList.add('x');
  } else {
    target.innerHTML = 'o';
    target.classList.add('o');
  }

  if (
    (checkWinner(0, 'x') && checkWinner(1, 'x') && checkWinner(2, 'x')) ||
    (checkWinner(0, 'o') && checkWinner(1, 'o') && checkWinner(2, 'o'))
  ) {
    console.log('We have a winner!');
  } else if (
    (checkWinner(3, 'x') && checkWinner(4, 'x') && checkWinner(5, 'x')) ||
    (checkWinner(3, 'o') && checkWinner(4, 'o') && checkWinner(5, 'o'))
  ) {
    console.log('We have a winner!');
  } else if (
    (checkWinner(6, 'x') && checkWinner(7, 'x') && checkWinner(8, 'x')) ||
    (checkWinner(6, 'o') && checkWinner(7, 'o') && checkWinner(8, 'o'))
  ) {
    console.log('We have a winner!');
  } else if (
    (checkWinner(0, 'x') && checkWinner(3, 'x') && checkWinner(6, 'x')) ||
    (checkWinner(0, 'o') && checkWinner(3, 'o') && checkWinner(6, 'o'))
  ) {
    console.log('We have a winner!');
  } else if (
    (checkWinner(1, 'x') && checkWinner(4, 'x') && checkWinner(7, 'x')) ||
    (checkWinner(1, 'o') && checkWinner(4, 'o') && checkWinner(7, 'o'))
  ) {
    console.log('We have a winner!');
  } else if (
    (checkWinner(2, 'x') && checkWinner(5, 'x') && checkWinner(8, 'x')) ||
    (checkWinner(2, 'o') && checkWinner(5, 'o') && checkWinner(8, 'o'))
  ) {
    console.log('We have a winner!');
  } else if (
    (checkWinner(0, 'x') && checkWinner(4, 'x') && checkWinner(8, 'x')) ||
    (checkWinner(0, 'o') && checkWinner(4, 'o') && checkWinner(8, 'o'))
  ) {
    console.log('We have a winner!');
  } else if (
    (checkWinner(2, 'x') && checkWinner(4, 'x') && checkWinner(6, 'x')) ||
    (checkWinner(2, 'o') && checkWinner(4, 'o') && checkWinner(6, 'o'))
  ) {
    console.log('We have a winner');
  }
};
