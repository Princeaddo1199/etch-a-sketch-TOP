document.addEventListener("DOMContentLoaded", function () {
  creatBoard(16);
});

function creatBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  console.log("hi");
}
