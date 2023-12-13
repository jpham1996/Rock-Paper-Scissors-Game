// DOM Nodes for the Rock Paper Scissors Game
const playerScoreBoard = document.querySelector(".player-scoreBoard");
const computerScoreBoard = document.querySelector(".computer-scoreBoard");
const gameButtons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const scoreBoardSection = document.querySelector(".scoreboard-section");
const gameSection = document.querySelector(".game-section");
const playerChoiceText = document.querySelector(".playerChoiceText");
const computerChoiceText = document.querySelector(".computerChoiceText");

// Player and Computer initial scores
let playerScore = 0;
let computerScore = 0;

function choicesText(playerChoice, computerChoice) {
  playerChoiceText.innerText = `Player Choice: ${playerChoice}`;
  computerChoiceText.innerText = `Computer Choice: ${computerChoice}`;
}

function chooseRock(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "rock") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Draw!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Paper beats Rock (Computer wins the round!)";
    computerScore++;
    computerScoreBoard.innerText = computerScore;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Rock beats Scissors (Player wins the round!)";
    playerScore++;
    playerScoreBoard.innerText = playerScore;
  }
}

function choosePaper(playerChoice, computerChoice) {
  if (playerChoice === "paper" && computerChoice === "paper") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Draw!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Paper beats Rock (Player wins the round!)";
    playerScore++;
    playerScoreBoard.innerText = playerScore;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Scissors beats Paper (Computer wins the round!)";
    computerScore++;
    computerScoreBoard.innerText = computerScore;
  }
}

function chooseScissors(playerChoice, computerChoice) {
  if (playerChoice === "scissors" && computerChoice === "scissors") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Draw!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Scissors beats Paper (Player wins the round!)";
    playerScore++;
    playerScoreBoard.innerText = playerScore;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    choicesText(playerChoice, computerChoice);
    result.innerText = "Rock beats Scissors (Computer wins the round!)";
    computerScore++;
    computerScoreBoard.innerText = computerScore;
  }
}

// Start Round once the buttons are clicked
function playRound(e) {
  const playerChoice = e.target.id;
  console.log(playerChoice);

  const choices = ["rock", "paper", "scissors"];
  const randomComputerChoice = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomComputerChoice];

  chooseRock(playerChoice, computerChoice);
  choosePaper(playerChoice, computerChoice);
  chooseScissors(playerChoice, computerChoice);
  checkWinner(playerScore, computerScore);
}

// Check Player and Computer Scores
function checkWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    resetButton();
    winnerDisplay();
  } else if (computerScore === 5) {
    resetButton();
    winnerDisplay();
  }
}

// Reset the Game
function resetButton() {
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Game";
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
  scoreBoardSection.insertAdjacentElement("afterend", resetButton);
}

// Display the winner
function winnerDisplay() {
  gameSection.classList.add("hide");
  const winnerMessage = document.createElement("div");
  winnerMessage.style.fontWeight = "bold";
  winnerMessage.style.fontSize = "32px";

  if (playerScore === 5) {
    winnerMessage.textContent = "Player won the game!";
  } else if (computerScore === 5) {
    winnerMessage.textContent = "Computer won the game!";
  }

  winnerMessage.style.marginBottom = "25px";
  scoreBoardSection.insertAdjacentElement("afterend", winnerMessage);
}

// Loops through Buttons
for (let i = 0; i < gameButtons.length; i++) {
  gameButtons[i].addEventListener("click", playRound);
}
