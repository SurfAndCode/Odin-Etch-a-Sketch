
const container = document.querySelector(".container");
const width = 900;
const height = 600;

function createGrid(rows) {

    for (let i =  1; i <= rows; i++) {
            let div = document.createElement("div");
            div.classList.add("row"); 
            for (let i = 1; i <= rows; i++) {
                let row = document.createElement("div");
                row.classList.add("square");
                row.style.width = (width/rows - 2) + "px";
                row.style.height = (height/rows - 2) +  "px";
                div.appendChild(row);
             } 
            container.appendChild(div);                  
        }
    }    
 
function colorGrid() {
        const squares = document.querySelectorAll(".square");
    const cb = document.getElementById("color");

    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            if (cb.checked) {
                let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                let r = randomBetween(0, 255);
                let g = randomBetween(0, 255);
                let b = randomBetween(0, 255);
                square.style.backgroundColor = `rgb(${r},${g},${b})`;
            } else {
                square.style.backgroundColor = "black";
            }
        }); 
    });
}

function resetGrid() {

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "";
    });

    const rows = prompt("How many rows and columns would you like to have?")

    if (rows) {
        while (container.firstChild) {
            container.firstChild.remove(); 
        } 
        createGrid(rows);
        colorGrid();
    }
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetGrid);

function init() {
    createGrid(16);
    colorGrid();
}

init();



