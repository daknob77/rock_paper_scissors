"use strict";

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const initBtn = document.querySelector(".init");

let playerScore = document.getElementById("player-score");
let compScore = document.querySelector("#computer-score");

let gameStatus = document.querySelector(".rule");
let roundStatus = document.querySelector(".choice");

const choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let computerChoice = "";
let playing = true;
let scores = [0, 0];

function init() {
  playing = true;
  scores = [0, 0];
  compScore.textContent = scores[0];
  playerScore.textContent = scores[1];

  roundStatus.textContent = "Rock Paper or Scissors?";
  gameStatus.textContent = "First to get 5 points wins";
  document.querySelector(".player-icon").src = `./assets/question-mark.svg`;
  document.querySelector(".computer-icon").src = `./assets/question-mark.svg`;
}

function gameMech(playerChoice, compChoice) {
  switch (playerChoice) {
    case "rock":
      switch (compChoice) {
        case "rock":
          roundStatus.textContent = "TIE";
          break;
        case "paper":
          roundStatus.textContent = "YOU LOSE THE ROUND";
          scores[1] += 1;
          compScore.textContent = scores[1];
          break;
        case "scissors":
          roundStatus.textContent = "YOU WIN THE ROUND";
          scores[0] += 1;
          playerScore.textContent = scores[0];
          break;
      }
      break;
    case "paper":
      switch (compChoice) {
        case "rock":
          roundStatus.textContent = "YOU WIN THE ROUND";
          scores[0] += 1;
          playerScore.textContent = scores[0];
          break;
        case "paper":
          roundStatus.textContent = "TIE";
          break;
        case "scissors":
          roundStatus.textContent = "YOU LOSE THE ROUND";
          scores[1] += 1;
          compScore.textContent = scores[1];
          break;
      }
      break;
    case "scissors":
      switch (compChoice) {
        case "rock":
          roundStatus.textContent = "YOU LOSE THE ROUND";
          scores[1] += 1;
          compScore.textContent = scores[1];
          break;
        case "paper":
          roundStatus.textContent = "YOU WIN THE ROUND";
          scores[0] += 1;
          playerScore.textContent = scores[0];
          break;
        case "scissors":
          roundStatus.textContent = "TIE";
          break;
      }
      break;
  }
  boolGame(scores);
}

function boolGame(scores) {
  if (scores[0] === 5) {
    gameStatus.textContent = "YOU WON THE GAME!!!";
    playing = false;
    return;
  } else if (scores[1] === 5) {
    gameStatus.textContent = "YOU LOST THE GAME";
    playing = false;
    return;
  }
}

rockBtn.addEventListener("click", function () {
  if (playing) {
    playerChoice = choices[0];
    computerChoice = choices[rand1To3()];
    changeImg(playerChoice, computerChoice);
    gameMech(playerChoice, computerChoice);
  }
});

paperBtn.addEventListener("click", function () {
  if (playing) {
    playerChoice = choices[1];
    computerChoice = choices[rand1To3()];
    changeImg(playerChoice, computerChoice);
    gameMech(playerChoice, computerChoice);
  }
});

scissorsBtn.addEventListener("click", function () {
  if (playing) {
    playerChoice = choices[2];
    computerChoice = choices[rand1To3()];
    changeImg(playerChoice, computerChoice);
    gameMech(playerChoice, computerChoice);
  }
});

function changeImg(playerChoice, computerChoice) {
  document.querySelector(".player-icon").src = `./assets/${playerChoice}.svg`;
  document.querySelector(
    ".computer-icon"
  ).src = `./assets/${computerChoice}.svg`;
}

const rand1To3 = function () {
  return Math.trunc(Math.random() * 3);
};

initBtn.addEventListener("click", init);
