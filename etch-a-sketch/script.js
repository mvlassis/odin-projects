let container = document.querySelector(".container");

const GRID_LENGTH = 640;

function generateGrid(rowSize) {
	for (let i = 0; i < rowSize; i++) {
		for (let j = 0; j < rowSize; j++) {
			let square = document.createElement("div");
			square.classList.add("square");
			let size = 100 / rowSize;
			square.style.width = `${size}%`;
			square.style.height = `${size}%`;
			square.addEventListener("mouseover", () => {
				square.classList.add("selected");
			});

			container.appendChild(square);
		}	
	}	
}

function resetBoard() {
	let squares = document.querySelectorAll(".selected");
	squares.forEach((element) => {
		element.classList.remove("selected");
	});
}

function deleteBoard() {
	container.innerHTML = "";
}

let recreateButton = document.querySelector("#recreate");
recreateButton.addEventListener("click", () => {
	let answer = prompt("Please enter the number of boxes per row: ", 16)
	let gridSize = parseInt(answer);
	deleteBoard();
	generateGrid(gridSize);
});

let resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click", () => {
	resetBoard();
});

generateGrid(32);
