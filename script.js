const playerScoreBoard = document.querySelector(".player-scoreBoard");
const computerScoreBoard = document.querySelector(".computer-scoreBoard");
const gameButtons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const scoreBoardSection = document.querySelector(".scoreboard-section");
const gameSection = document.querySelector(".game-section");

let playerScore = 0;
let computerScore = 0;

function playRound(e) {
  const playerChoice = e.target.className;
  const choices = ["rock", "paper", "scissors"];
  const randomComputerChoice = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomComputerChoice];

  if (playerChoice === "rock" && computerChoice === "rock") {
    result.textContent = "Draw!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    result.textContent = "Paper beats Rock (Computer wins the round!)";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result.textContent = "Rock beats Scissors (Player wins the round!)";
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }

  if (playerChoice === "scissors" && computerChoice === "scissors") {
    result.textContent = "Draw!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result.textContent = "Scissors beats Paper (Player wins the round!)";
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    result.textContent = "Rock beats Scissors (Computer wins the round!)";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }

  if (playerChoice === "paper" && computerChoice === "paper") {
    result.textContent = "Draw";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result.textContent = "Paper beats Rock (Player wins the roud!)";
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    result.textContent = "Scissors beats Paper (Computer wins the round!)";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }

  checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore = 5, computerScore = 5) {
  if (playerScore === 5) {
    resetButton();
    winnerDisplay();
  } else if (computerScore === 5) {
    resetButton();
    winnerDisplay();
  }
}

function resetButton() {
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Game";
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
  scoreBoardSection.insertAdjacentElement("afterend", resetButton);
}

function winnerDisplay() {
  gameSection.classList.add("hide");
  const winnerMessage = document.createElement("div");

  if (playerScore === 5) {
    winnerMessage.textContent = "Player won the game!";
  } else if (computerScore === 5) {
    winnerMessage.textContent = "Computer won the game!";
  }

  winnerMessage.style.marginBottom = "25px";
  scoreBoardSection.insertAdjacentElement("afterend", winnerMessage);
}

for (let i = 0; i < gameButtons.length; i++) {
  gameButtons[i].addEventListener("click", playRound);
}
