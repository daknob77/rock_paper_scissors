"use strict";

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let playerIcon = document.getElementsByClassName("player-icon");
let compIcon = document.getElementsByClassName("computer-icon");

let playerScore = document.getElementById("player-score");
let compScore = document.querySelector("#computer-score");
let player = 0;
let comp = 0;

let gameStatus = document.querySelector(".rule");
let roundStatus = document.querySelector(".choice");

const choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let computerChoice = "";
let playing = true;

function init() {
  playing = true;
  player = 0;
  comp = 0;
}

function gameMech(playerChoice, compChoice) {
  if (player === 5) {
    boolGame();
    return;
  } else if (comp === 5) {
    boolGame();
    return;
  } else {
    switch (playerChoice) {
      case "rock":
        switch (compChoice) {
          case "rock":
            roundStatus.textContent = "TIE";
            break;
          case "paper":
            roundStatus.textContent = "YOU LOSE";
            comp += 1;
            compScore.textContent = comp;
            break;
          case "scissors":
            roundStatus.textContent = "YOU WIN";
            player += 1;
            playerScore.textContent = player;
            break;
        }
        break;
      case "paper":
        switch (compChoice) {
          case "rock":
            roundStatus.textContent = "YOU WIN";
            player += 1;
            playerScore.textContent = player;
            break;
          case "paper":
            roundStatus.textContent = "TIE";
            break;
          case "scissors":
            roundStatus.textContent = "YOU LOSE";
            comp += 1;
            compScore.textContent = comp;
            break;
        }
        break;
      case "scissors":
        switch (compChoice) {
          case "rock":
            roundStatus.textContent = "YOU LOSE";
            comp += 1;
            compScore.textContent = comp;
            break;
          case "paper":
            roundStatus.textContent = "YOU WIN";
            player += 1;
            playerScore.textContent = player;
            break;
          case "scissors":
            roundStatus.textContent = "TIE";
            break;
        }
        break;
    }
  }
}

rockBtn.addEventListener("click", function () {
  if (playing) {
    playerChoice = choices[0];

    computerChoice = choices[Math.trunc(Math.random() * 3)];
    changeImg(playerChoice, computerChoice);

    gameMech(playerChoice, computerChoice);
  }
});

paperBtn.addEventListener("click", function () {
  if (playing) {
    playerChoice = choices[1];

    computerChoice = choices[Math.trunc(Math.random() * 3)];
    changeImg(playerChoice, computerChoice);

    gameMech(playerChoice, computerChoice);
  }
});

scissorsBtn.addEventListener("click", function () {
  if (playing) {
    playerChoice = choices[2];

    computerChoice = choices[Math.trunc(Math.random() * 3)];
    changeImg(playerChoice, computerChoice);

    gameMech(playerChoice, computerChoice);
  }
});

function boolGame(bool) {
  playing = false;
  if (bool) {
    gameStatus.textContent = "YOU HAVE WON!!!";
  } else {
    gameStatus.textContent = "YOU LOST";
  }
}

function changeImg(playerChoice, computerChoice) {
  document.querySelector(".player-icon").src = `./assets/${playerChoice}.svg`;
  document.querySelector(
    ".computer-icon"
  ).src = `./assets/${computerChoice}.svg`;
}
