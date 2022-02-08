//pick all the inputs, reset button and print element references
const b1El = document.getElementById("b1");
const b2El = document.getElementById("b2");
const b3El = document.getElementById("b3");
const b4El = document.getElementById("b4");
const b5El = document.getElementById("b5");
const b6El = document.getElementById("b6");
const b7El = document.getElementById("b7");
const b8El = document.getElementById("b8");
const b9El = document.getElementById("b9");
const resetBtn = document.getElementById("reset");
const printArea = document.getElementById("print");

//attach click event listener to all inputs

/*
b1El.addEventListener("click", handleClick);
b2El.addEventListener("click", handleClick);
b3El.addEventListener("click", handleClick);
b4El.addEventListener("click", handleClick);
b5El.addEventListener("click", handleClick);
b6El.addEventListener("click", handleClick);
b7El.addEventListener("click", handleClick);
b8El.addEventListener("click", handleClick);
b9El.addEventListener("click", handleClick);
*/

[b1El, b2El, b3El, b4El, b5El, b6El, b7El, b8El, b9El].forEach((el) => {
  el.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", reset);

//set current player to X  and winner to null --> to initate the game
let currentPlayer = "X";
let winner = null;
printArea.innerText = `Player ${currentPlayer} turns`;

//handling click when user click on any input
function handleClick(e) {
  e.target.value = currentPlayer;
  changeCurrentPlayer();
  printArea.innerText = `Player ${currentPlayer} turns`;
  if (isWinnerDeclared()) {
    //disabled all the others input and display who is winner
    disableAllInputs();
    printArea.innerText = `Player ${winner} won`;
  }
  //check for draw
  else if (isDraw()) {
    disableAllInputs();
    printArea.innerText = `Draw`;
  }
}

//change current player after every click on input
function changeCurrentPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

//check is winnerDeclared
function isWinnerDeclared() {
  if (isWinner("X")) {
    winner = "X";
    return true;
  } else if (isWinner("O")) {
    winner = "O";
    return true;
  }
  return false;
}

//matching winnerid(whether it is "X" or "O") in rows or columns or diagonals
function isWinner(id) {
  if (
    //rows//colums//diagonals
    (b1El.value === id && b2El.value === id && b3El.value === id) ||
    (b4El.value === id && b5El.value === id && b6El.value === id) ||
    (b7El.value === id && b8El.value === id && b9El.value === id) ||
    (b1El.value === id && b4El.value === id && b7El.value === id) ||
    (b2El.value === id && b5El.value === id && b8El.value === id) ||
    (b3El.value === id && b6El.value === id && b9El.value === id) ||
    (b1El.value === id && b5El.value === id && b9El.value === id) ||
    (b3El.value === id && b5El.value === id && b7El.value === id)
  ) {
    return true;
  }
  return false;
}

//disable allinputs by default value set to true
function disableAllInputs(value = true) {
  b1El.disabled = value;
  b2El.disabled = value;
  b3El.disabled = value;
  b4El.disabled = value;
  b5El.disabled = value;
  b6El.disabled = value;
  b7El.disabled = value;
  b8El.disabled = value;
  b9El.disabled = value;
}

//reset function will handle when user click on reset Btn
function reset() {
  disableAllInputs(false); //this will make all inputs again enable
  resetAllInputValues(); //reset all input values
  winner = null; //set winner back to null
  currentPlayer = "X"; //set currentplayer back to X
  printArea.innerText = `Player ${currentPlayer} turns`; //remove any declarations and set it to player X turn
}

//reset all input values i.e. remove "X" or "O" mark form them
function resetAllInputValues() {
  b1El.value = "";
  b2El.value = "";
  b3El.value = "";
  b4El.value = "";
  b5El.value = "";
  b6El.value = "";
  b7El.value = "";
  b8El.value = "";
  b9El.value = "";
}

function isDraw() {
  //if all inputs filled it  whether  with "X" or "O" and no winner is declared yet, it means it's a draw
  return (
    b1El.value !== "" &&
    b2El.value !== "" &&
    b3El.value !== "" &&
    b4El.value !== "" &&
    b5El.value !== "" &&
    b6El.value !== "" &&
    b7El.value !== "" &&
    b8El.value !== "" &&
    b9El.value !== ""
  );
}
