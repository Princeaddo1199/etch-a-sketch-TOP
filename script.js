document.addEventListener("DOMContentLoaded", function () {
  creatBoard(32);
});

function creatBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numOfDivs = size * size;

  for (let i = 0; i < numOfDivs; i++) {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    board.insertAdjacentElement("beforeend", div);
  }
}
