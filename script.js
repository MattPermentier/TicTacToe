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
  pushToArray: function () {
    for (const playingSquare of playingSquares) {
      gameBoard.board.push(playingSquare);
    }
  },
  board: [],
};
gameBoard.pushToArray();

// message when a player wins the game
function winnerMessage(xO) {
  let playerWin = xO.toUpperCase(0);
  playerTurn.innerHTML = `${playerWin} wins`;
}

// gameRules object to check when player wins
let gameRules = {
  bestPlayer: function () {
    let typesZero = document.querySelectorAll(`[data-type="0"]`);
    let typesOne = document.querySelectorAll(`[data-type="1"]`);
    let typesTwo = document.querySelectorAll(`[data-type="2"]`);

    // check for vertical winners
    function verticalWinner(type, xO) {
      type = Array.from(type);
      let check = type.every((item) => {
        return item.classList.contains(xO);
      });
      return check === true ? winnerMessage(xO) : '';
    }
    verticalWinner(typesZero, 'x');
    verticalWinner(typesOne, 'x');
    verticalWinner(typesTwo, 'x');
    verticalWinner(typesZero, 'o');
    verticalWinner(typesOne, 'o');
    verticalWinner(typesTwo, 'o');

    function horizontalCrossWinner(type1, type2, type3, xO) {
      let one = typesZero[type1].classList.contains(xO);
      let two = typesOne[type2].classList.contains(xO);
      let three = typesTwo[type3].classList.contains(xO);

      if (one && two && three) {
        winnerMessage(xO);
      }
    }
    // horizontal winners
    horizontalCrossWinner(0, 0, 0, 'o');
    horizontalCrossWinner(1, 1, 1, 'o');
    horizontalCrossWinner(2, 2, 2, 'o');
    horizontalCrossWinner(0, 0, 0, 'x');
    horizontalCrossWinner(1, 1, 1, 'x');
    horizontalCrossWinner(2, 2, 2, 'x');

    // cross winners
    horizontalCrossWinner(0, 1, 2, 'x');
    horizontalCrossWinner(0, 1, 2, 'o');
    horizontalCrossWinner(2, 1, 0, 'x');
    horizontalCrossWinner(2, 1, 0, 'o');
  },
  tieGame: function () {
    let taken = document.getElementsByClassName('taken');
    if (taken.length === 9 && gameRules.bestPlayer() !== true) {
      console.log('tie game');
    }
  },
};

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

// choose between player 'x' or 'o'
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

// onclick restart the game
function restartGame() {
  for (const playingSquare of playingSquares) {
    playingSquare.innerHTML = '';
    playingSquare.classList.remove('taken', 'x', 'o');
    playerTurn.innerHTML = "Player O's turn";
    num = 0;
  }
}
