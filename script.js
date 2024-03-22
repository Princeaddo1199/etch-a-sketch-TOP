let color = "black";
let click = false;
document.addEventListener("DOMContentLoaded", function () {
    creatBoard(16)
  selectSize();

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.ttagName != "BUTTON") {
      click = !click;
      let draw = document.querySelector(".draw");
      if (click) {
        draw.textContent = "You can draw now 🤗";
        draw.style.fontSize = "20px"
      } else {
        draw.textContent = "You are not allowed to draw 😔";
        draw.style.fontSize = "20px"
      }
    }
  });
});

function creatBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numOfDivs = size * size;

  for (let i = 0; i < numOfDivs; i++) {
    let gridDiv = document.createElement("gridDiv");
    //gridDiv.classList.add("gridDivs");
    gridDiv.addEventListener("mouseover", colorDiv);
    gridDiv.style.border = "1px solid lightgray";
    board.insertAdjacentElement("beforeend", gridDiv);
  }
}

function getSize(size) {
  let input = prompt("Please enter a size");
  let message = document.querySelector(".message");
  if (input == "") {
    message.textContent = "Please enter a size!!!";
    message.style.color = "red";
    message.style.fontSize = "20px";
  } else if (input < 0 || input > 100) {
    message.textContent = "Please enter a number between 0 and 100";
    message.style.color = "blue";
    message.style.fontSize = "20px";
  } else {
    message.textContent = "Please Enjoy Playing";
    message.style.color = "green";
    message.style.fontSize = "20px";
    return input;
  }
}

function selectSize() {
  let btnPopup = document.querySelector(".select-size");
  btnPopup.addEventListener("click", function () {
    let size = getSize();
    creatBoard(size);
  });
}
function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 300}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let resetBtn = document.querySelectorAll("gridDiv");
  resetBtn.forEach((gridDiv) => {
    gridDiv.style.background = "rgb(231, 229, 229)";
  });
}
