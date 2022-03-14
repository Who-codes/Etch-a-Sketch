const container = document.querySelector(".container");

for (let i = 0; i < (16**2); i++) {
  let gridChilds = document.createElement("div");
  gridChilds.classList.add("grid");
  container.appendChild(gridChilds);
}

const grids = document.querySelectorAll('.grid');

grids.forEach(grid => grid.addEventListener('click', changeColor));

function changeColor(e){
  let target = e.target;
  target.style.backgroundColor = 'red';
}


