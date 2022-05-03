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
}

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
