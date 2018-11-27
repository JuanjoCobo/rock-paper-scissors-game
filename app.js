

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const smallUserWord = "user".fontsize(5).sup();
const smallComputerWord = "cpu".fontsize(5).sup();

function getComputerChoice(){
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = `${userChoice} ${smallUserWord} beats ${computerChoice} ${smallComputerWord}. You win.`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}

function lose(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = `${userChoice} ${smallUserWord} loses to ${computerChoice} ${smallComputerWord}. You lost...`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	result_div.innerHTML = `${userChoice} ${smallUserWord} equals ${computerChoice} ${smallComputerWord}. It is a draw.`;
	userChoice_div.classList.add('yellow-glow');
	setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 1000);
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	
	switch(userChoice + computerChoice){

		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice,computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice,computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice,computerChoice);
			break;
	}
}


function main(){

	rock_div.addEventListener('click', () => game("rock"));

	paper_div.addEventListener('click', () => game("paper"));

	scissors_div.addEventListener('click', () => game("scissors"));

}



main();