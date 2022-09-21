const playingField = document.getElementById('playingField');
let playingSquares = document.querySelectorAll('.playingSquare');
let playerTurn = document.getElementById('playerTurn');
const restartBtn = document.getElementById('restart');

playingField.addEventListener('click', clickedSquare);
restartBtn.addEventListener('click', restartGame);

let target;
let num = 0;

// gameBoard object to store all squares in
let gameBoard = {
  board: [],
};

// function to get code cleaner and checks where x/o is placed in gameBoard
function checkWinner(num, xOrY) {
  return gameBoard.board[num].classList.contains(xOrY);
}

// gameRules object to check when player wins
let gameRules = {
  bestPlayer: function () {
    let typesZero = document.querySelectorAll(`[data-type="0"]`);
    let typesOne = document.querySelectorAll(`[data-type="1"]`);
    let typesTwo = document.querySelectorAll(`[data-type="2"]`);

    // typesZero = Array.from(typesZero); // type
    // let check = typesZero.every((item) => { // type
    //   return item.classList.contains('o'); // x or y
    // });

    // if (check === true) {
    //   playerTurn.innerHTML = 'O wins';
    // }

    function testWinner(type, xO) {
      type = Array.from(type); // type
      let check = type.every((item) => {
        // type
        return item.classList.contains(xO); // x or y
      });

      if (check === true) {
        let playerWin = xO.toUpperCase(0);
        playerTurn.innerHTML = `${playerWin} wins`;
      }
    }
    testWinner(typesZero, 'x');
    testWinner(typesOne, 'x');
    testWinner(typesTwo, 'x');

    testWinner(typesZero, 'o');
    testWinner(typesOne, 'o');
    testWinner(typesTwo, 'o');

    // if (
    //   (checkWinner(0, 'x') && checkWinner(1, 'x') && checkWinner(2, 'x')) ||
    //   (checkWinner(0, 'o') && checkWinner(1, 'o') && checkWinner(2, 'o'))
    // ) {
    //   console.log('We have a winner!');
    //   console.log(gameBoard);
    //   return true;
    // } else if (
    //   (checkWinner(3, 'x') && checkWinner(4, 'x') && checkWinner(5, 'x')) ||
    //   (checkWinner(3, 'o') && checkWinner(4, 'o') && checkWinner(5, 'o'))
    // ) {
    //   console.log('We have a winner!');
    //   return true;
    // } else if (
    //   (checkWinner(6, 'x') && checkWinner(7, 'x') && checkWinner(8, 'x')) ||
    //   (checkWinner(6, 'o') && checkWinner(7, 'o') && checkWinner(8, 'o'))
    // ) {
    //   console.log('We have a winner!');
    //   return true;
    // } else if (
    //   (checkWinner(0, 'x') && checkWinner(3, 'x') && checkWinner(6, 'x')) ||
    //   (checkWinner(0, 'o') && checkWinner(3, 'o') && checkWinner(6, 'o'))
    // ) {
    //   console.log('We have a winner!');
    //   return true;
    // } else if (
    //   (checkWinner(1, 'x') && checkWinner(4, 'x') && checkWinner(7, 'x')) ||
    //   (checkWinner(1, 'o') && checkWinner(4, 'o') && checkWinner(7, 'o'))
    // ) {
    //   console.log('We have a winner!');
    //   return true;
    // } else if (
    //   (checkWinner(2, 'x') && checkWinner(5, 'x') && checkWinner(8, 'x')) ||
    //   (checkWinner(2, 'o') && checkWinner(5, 'o') && checkWinner(8, 'o'))
    // ) {
    //   console.log('We have a winner!');
    //   return true;
    // } else if (
    //   (checkWinner(0, 'x') && checkWinner(4, 'x') && checkWinner(8, 'x')) ||
    //   (checkWinner(0, 'o') && checkWinner(4, 'o') && checkWinner(8, 'o'))
    // ) {
    //   console.log('We have a winner!');
    //   return true;
    // } else if (
    //   (checkWinner(2, 'x') && checkWinner(4, 'x') && checkWinner(6, 'x')) ||
    //   (checkWinner(2, 'o') && checkWinner(4, 'o') && checkWinner(6, 'o'))
    // ) {
    //   console.log('We have a winner');
    //   return true;
    // }
  },

  tieGame: function () {
    let taken = document.getElementsByClassName('taken');
    if (taken.length === 9 && gameRules.bestPlayer() !== true) {
      console.log('tie game');
    }
  },
};

// loop over all squares and push them individually in the gameBoard array
for (const playingSquare of playingSquares) {
  gameBoard.board.push(playingSquare);
}

// check if square is already filled and make a new x/o
function clickedSquare(e) {
  target = e.target;

  if (target.classList.contains('taken')) {
    alert('This square is already taken');
    return;
  }
  num++;
  const player = playerType(num);
  gameRules.bestPlayer();
  gameRules.tieGame();
}

const playerType = (num) => {
  target.classList.add('taken');

  return num % 2 === 0
    ? ((target.innerHTML = 'x'),
      target.classList.add('x'),
      (playerTurn.innerHTML = "Player O's turn"))
    : ((target.innerHTML = 'o'),
      target.classList.add('o'),
      (playerTurn.innerHTML = "Player X's turn"));
};

function restartGame() {
  for (const playingSquare of playingSquares) {
    playingSquare.innerHTML = '';
    playingSquare.classList.remove('taken', 'x', 'o');
    playerTurn.innerHTML = "Player O's turn";
    num = 0;
  }
}
