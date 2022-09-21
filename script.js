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

    // check for vertical winners
    function verticalWinner(type, xO) {
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
    // check for horizontal & cross winners
    function horizontalCrossWinner(row, xO) {
      let horizontal = typesZero[row] && typesOne[row] && typesTwo[row];
      if (horizontal.classList.contains(xO)) {
        let playerWin = xO.toUpperCase(0);
        playerTurn.innerHTML = `${playerWin} wins`;
      }
    }
    verticalWinner(typesZero, 'x');
    verticalWinner(typesOne, 'x');
    verticalWinner(typesTwo, 'x');

    verticalWinner(typesZero, 'o');
    verticalWinner(typesOne, 'o');
    verticalWinner(typesTwo, 'o');

    horizontalCrossWinner(0, 'x');
    horizontalCrossWinner(1, 'x');
    horizontalCrossWinner(2, 'x');

    horizontalCrossWinner(0, 'o');
    horizontalCrossWinner(1, 'o');
    horizontalCrossWinner(2, 'o');

    horizontalCrossWinner(0, 1, 2, 'o');
    horizontalCrossWinner(0, 1, 2, 'x');
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
