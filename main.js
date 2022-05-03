const btn = document.querySelectorAll(".btn");
const playerSign = document.querySelector(".playerSign");
const computerSign = document.querySelector(".computerSign");

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
