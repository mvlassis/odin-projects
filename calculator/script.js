function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	switch (operator) {
	case "+":
		return add(a, b);
	case "-":
		return subtract(a, b);
	case "*":
		return multiply(a, b);
	case "/":
		return divide(a, b)
	}
}

function updateDisplay(str) {
	let display = document.querySelector("#display");
	display.textContent = str;
}

let op1 = 0;
let op2 = 0;
let operator = undefined;
let current = "";
let currentOperand = "op1";
let displayContent = "";

function clearCalculator() {
	op1 = 0;
	op2 = 0;
	operator = undefined;
	current = "";
	currentOperand = "op1";
	displayContent = "";
}

let nums = document.querySelectorAll(".num");
nums.forEach((num) => {
	num.addEventListener("click", () => {
		current += num.textContent;
		displayContent += num.textContent;
		updateDisplay(displayContent);
	});
});

let operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
	operand.addEventListener("click", () => {
		if (currentOperand == "op2") {
			if (current == "") {
				operator = operand.textContent;
				displayContent = displayContent.slice(0, -2);
				displayContent += ` ${operand.textContent} `;
				updateDisplay(displayContent);
			} else {
				op2 = parseInt(current);
				let result = operate(operator, op1, op2);
				displayContent = result;
				updateDisplay(result);
				currentOperand = "op1";
				current = result;
				op2 = 0;	
			}
		}
		if (currentOperand == "op1") {
			op1 = parseInt(current);
			operator = operand.textContent;
			current = "";
			currentOperand = "op2";
			displayContent += ` ${operand.textContent} `;
			updateDisplay(displayContent);	
		}
	});
});

let clear = document.querySelector(".reset");
clear.addEventListener("click", () => {
	clearCalculator();
	updateDisplay("");
});


let equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
	op2 = parseInt(current);
	let result = operate(operator, op1, op2);
	updateDisplay(result);
	clearCalculator();
});
