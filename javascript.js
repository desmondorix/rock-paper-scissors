console.log("hello");

var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
  var computer = Math.random();
  if (computer >= 0 && computer <= 0.33) {
    computer = "rock";
  } else if (computer > 0.33 && computer <= 0.67) {
    computer = "paper";
  } else if (computer > 0.67 && computer < 1) {
    computer = "scissors";
  }
  return computer;
}

function getHumanChoice() {
  var human = prompt("Select rock / paper / scissors = ");
  return human.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  var result;
  var finalResult;
  var playerWin = `You Win, Computer Lose! ${humanChoice} beats ${computerChoice}`;
  var playerLose = `You Lose, Computer Win! ${computerChoice} beats ${humanChoice}`;
  var draw = `Draw! You Choose ${humanChoice}, and Computer Choose ${computerChoice}`;

  if (humanChoice == "rock" && computerChoice == "rock") {
    result = draw;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    result = playerLose;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    result = playerWin;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    result = playerWin;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    result = draw;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    result = playerLose;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    result = playerLose;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    result = playerWin;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    result = draw;
  }

  if (result == playerWin) {
    humanScore++;
  } else if (result == playerLose) {
    computerScore++;
  }

  finalResult = `${result}. Your Score : ${humanScore}, Computer Score : ${computerScore}`;
  console.log(finalResult);
  return finalResult;
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  playGame();
}
if (humanScore > computerScore) {
  console.log("Kamu Menang!");
} else if (humanScore < computerScore) {
  console.log("Kamu Kalah!");
} else {
  console.log("Draw!");
}
