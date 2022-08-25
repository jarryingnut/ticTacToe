const Player = (sign) => {
  const symbol = sign;

  const getSymbol = () => {
    return symbol;
  };

  return { getSymbol };
};

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const setGridCell = (index, symbol) => {
    if (index > board.length) return;
    board[index] = symbol;
    console.log("ray", board);
  };

  const getGridCell = (index) => {
    if (index > board.length) return;
    console.log("indu", index);
    return board[index];
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };

  return { reset, setGridCell, getGridCell };
})();

// function updateCell(e) {
//   e.target.textContent = "X";
//   console.log("why", e.target.dataset.index);
// }

const gameController = (() => {
  let playerX = Player("X");
  let playerO = Player("O");
  let round = 0;

  const playRound = (index) => {
    gameBoard.setGridCell(index, getPlayerSymbol());
    round++;
    console.log("round", round);
  };

  const getPlayerSymbol = () =>
    round % 2 === 1 ? playerX.getSymbol() : playerO.getSymbol();

  return {
    playRound,
  };
})();

const displayController = (() => {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!e.target.textContent) {
        gameController.playRound(item.dataset.index);
        e.target.textContent = gameBoard.getGridCell(item.dataset.index);
      }
    });
  });
})();

// symbol should be placed in random places
//figure out why the grid cells are getting blank on clicking
