// Initial game state
let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btn");
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to handle player moves
const ticTacToe = (element, index) => {
  // Check if the cell is already occupied
  if (cells[index] !== "") {
    return;
  }

  // Update the game state
  cells[index] = currentPlayer;
  element.value = currentPlayer;

  // Check for winning conditions
  for (let i = 0; i < conditions.length; i++) {
    const [a, b, c] = conditions[i];
    if (cells[a] !== "" && cells[a] === cells[b] && cells[a] === cells[c]) {
      result.textContent = `Player ${currentPlayer} Won 🎉`;
      btns.forEach((btn) => (btn.disabled = true));
      return;
    }
  }

  // Check for a draw
  if (cells.every((cell) => cell !== "")) {
    result.textContent = "It's a draw!";
    return;
  }

  // Switch to the next player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  result.textContent = `Player ${currentPlayer}'s Turn`;
};

// Function to reset the game
const resetGame = () => {
  // Reset the game state
  cells = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";

  // Reset the button values
  btns.forEach((btn) => {
    btn.value = "";
    btn.disabled = false;
  });

  // Update the result element
  result.textContent = `Player ${currentPlayer}'s Turn`;
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => ticTacToe(btn, i));
});

document.querySelector("#reset-btn").addEventListener("click", resetGame);
