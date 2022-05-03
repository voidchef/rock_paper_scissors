const btn = document.querySelectorAll(".btn");
const playerSign = document.querySelector(".playerSign");
const computerSign = document.querySelector(".computerSign");
const gameStatus = document.querySelector(".gameStatus");
const description = document.querySelector(".description");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const resultContainer = document.querySelector(".resultContainer");
const results = document.querySelector(".results");

let player = 0;
let computer = 0;

btn.forEach((button) => {
  button.addEventListener("click", function () {
    game(button.value);
  });
});

function game(playerSelection) {
  const signs = { rock: "✊", paper: "✋", scissors: "✌" };

  let computerSelection = computerPlay();

  computerSign.textContent = signs[computerSelection];
  playerSign.textContent = signs[playerSelection];

  let state = playRound(playerSelection, computerSelection);

  if (state == "won") player++;
  else if (state == "lost") computer++;

  displayStatus(state, playerSelection, computerSelection);

  playerScore.textContent = player;
  computerScore.textContent = computer;

  if (player === 5 || computer === 5)
    displayResults(player === 5 ? "won" : "lost");
}

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "tie";
  else if (playerSelection === "rock" && computerSelection === "paper")
    return "lost";
  else if (playerSelection === "rock" && computerSelection === "scissors")
    return "won";
  else if (playerSelection === "paper" && computerSelection === "scissors")
    return "lost";
  else if (playerSelection === "paper" && computerSelection === "rock")
    return "won";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    return "lost";
  else if (playerSelection === "scissors" && computerSelection === "paper")
    return "won";
}

function displayStatus(state, playerSelection, computerSelection) {
  if (state === "tie") gameStatus.textContent = `It's a ${state}!`;
  else gameStatus.textContent = `You ${state}!`;

  if (state === "won")
    description.textContent = `${playerSelection} beats ${computerSelection}`;
  else if (state === "lost")
    description.textContent = `${computerSelection} beats ${playerSelection}`;
  else
    description.textContent = `${playerSelection} ties with ${computerSelection}`;
}

function displayResults(state) {
  document.querySelector(".header").style.filter = "blur(2px)";
  document.querySelector(".container").style.filter = "blur(2px)";
  resultContainer.style.display = "flex";
  results.textContent = `You ${state}`;

  btn.forEach((button) => {
    button.disabled = true;
  });
}
