let currentPlayer = "X";
let board = Array(9).fill("");

function makeMove(index) {
  if (board[index] === "" && !checkWinner()) {
    board[index] = currentPlayer;
    document.querySelectorAll('.cell')[index].innerText = currentPlayer;

    if (checkWinner()) {
      document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
    } else if (board.every(cell => cell !== "")) {
      document.getElementById('result').innerText = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}
function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}
function resetGame() {
  board.fill("");
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = "");
  currentPlayer = "X";
  document.getElementById('result').innerText = "";
}
