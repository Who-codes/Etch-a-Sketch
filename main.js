const container = document.querySelector(".container");
const controller = document.querySelector(".controller");
const slider = document.querySelector("#slider");
const rangevalueDispaly = document.querySelector(".range-value");

rangevalueDispaly.textContent = `${slider.value} X ${slider.value}`;
let sliderValue;

let grids = document.querySelectorAll(".grid");


slider.addEventListener("input", gridNumber);

function defaultGrid() {
  for (i = 0; i < slider.value ** 2; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  }
  container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.addEventListener("mousemove", paint));
  console.log(grids);
}

function paint(e) {
  let target = e.target;
  target.style.backgroundColor = "red";
}

function gridNumber() {
  noGrid();
  defaultGrid();
  rangevalueDispaly.textContent = `${slider.value} X ${slider.value}`;
}

function noGrid() {
  grids.forEach((grid) => container.removeChild(grid));
}

defaultGrid();
