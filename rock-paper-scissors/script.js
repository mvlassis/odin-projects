function getComputerChoice() {
	let ran = Math.floor((Math.random() * 3));
	switch (ran) {
	case 0:
		return "rock";
	case 1:
		return "paper";
	case 2:
		return "scissors";
	}
	
}

function getHumanChoice() {
	let option = prompt("Choose your option");

	option = option.toLowerCase();
	switch (option) {
	case "rock":
	case "paper":
	case "scissors":
		return option;
	default:
		return null;
	}
}

function playRound(humanChoice, computerChoice) {
	console.log(`You chose: ${humanChoice}`);
	console.log(`Computer chose: ${computerChoice}`);
	if (humanChoice == "rock") {
		switch (computerChoice) {
		case "rock":
			return "tie";
		case "paper":
			return "computer";
		case "scissors":
			return "human";
		}
	}
	else if (humanChoice == "paper") {
		switch (computerChoice) {
		case "rock":
			return "human";
		case "paper":
			return "tie";
		case "scissors":
			return "computer";
		}
	}
	else if (humanChoice == "scissors") {
		switch (computerChoice) {
		case "rock":
			return "computer";
		case "paper":
			return "human";
		case "scissors":
			return "tie";
		}
	}
}

function runRound(humanChoice, computerChoice) {
	let result = playRound(humanChoice, computerChoice);
	let humanScore = document.querySelector("#human");
	let computerScore = document.querySelector("#computer");
	switch (result) {
	case "human":
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
		break;
	case "computer":
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
		break;
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	while (humanScore < 5 && computerScore < 5) {
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();
		let result = playRound(humanChoice, computerChoice);
		switch (result) {
		case "human":
			humanScore++;
			break;
		case "computer":
			computerScore++;
			break;
		}

		console.log(`${humanScore} - ${computerScore}`);
	}
}

let btn1 = document.querySelector("#rock");
btn1.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	runRound("rock", computerChoice);
});

let btn2 = document.querySelector("#paper");
btn2.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	runRound("paper", computerChoice);
});

let btn3 = document.querySelector("#scissors");
btn3.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	runRound("scissors", computerChoice);
});
