let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerChoicesRandomize =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerChoicesRandomize;
}

function playRound(playerSelection, computerSelection) {
  // If playerSelection is not 'rock', 'scissor', or 'paper'
  let i = 0;

  while (i === 0) {
    if (playerSelection === "rock") {
      i = 1;
    } else if (playerSelection === "scissors") {
      i = 1;
    } else if (playerSelection === "paper") {
      i = 1;
    } else {
      playerSelection = prompt(
        "Please choose Rock, Paper, or Scissors"
      ).toLowerCase();
    }
  }

  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Draw");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Draw");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("Draw");
  }

  // playerSelection beats computerSelection
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Rock beats scissors (Player wins!)");
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Scissors beats paper (Player wins!)");
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Paper beats rock (Player wins!)");
    playerScore++;
  }

  // computerSelection beats playerSelection
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("Rock beats scissors (Computer wins!)");
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("Scissors beats paper (Computer wins!)");
    computerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("Paper beats rock (Computer wins!)");
    computerScore++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose Rock, Paper, or Scissors"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
  }

  checkWinner();
}

function checkWinner() {
  if (playerScore > computerScore) {
    alert("Player won the game!");
  } else if (playerScore < computerScore) {
    alert("Computer won the game!");
  } else {
    alert("It's a draw!");
  }
}

game();
