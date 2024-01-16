let clickAudio = new Audio("/sources/ting.mp3");
let turnStatement = document.querySelector(".info");
let turn = "X";

// Change Turn
function changeTurn() {
  if (turn === "X") {
    turn = "O";
    turnStatement.innerText = "Turn of O";
  } else {
    turn = "X";
    turnStatement.innerText = "Turn of X";
  }
}

// Checkwin
function winChecker(boxtext) {
  let win = [
    // Horizontal Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      turnStatement.innerText = boxtext[e[0]].innerText + " wins!";
      let boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {});
    }
  });
}

// Game Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", function (box) {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      changeTurn();
      winChecker(boxes);
    }
    clickAudio.currentTime = 1;
    clickAudio.play();
  });
});

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
