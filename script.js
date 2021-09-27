// starting scores
let playerScore = 0;
let computerScore = 0;

// computer random choice
const computerPlay = function () {
  let computerChoice = ['ROCK', 'PAPER', 'SCISSORS'];
  let random = Math.floor(Math.random() * 3);
  return computerChoice[random];
}

// play round of game
const playRound = function (playerSelection, computerSelection) {

  // convert player choices to uppercase
  playerSelection = playerSelection.toUpperCase();

  // game outcomes
  if (playerSelection === computerSelection) {
    return `it's a tie. both players chose ${playerSelection}`;
  } else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
    computerScore++;
    return `computer wins round. ${computerSelection} beats ${playerSelection}`
  } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
    playerScore++;
    return `player wins round. ${playerSelection} beats ${computerSelection}`;
  } else {
    return 'error'
  }
}

// winner message
const winner = function () {
  if (playerScore > computerScore) {
    console.log('player wins game');
  } else {
    console.log('computer wins game');
  }
}


const game = function () {

  // best out of 5 wins
  for (let i = 0; i < 5; i++) {

    // making choice of hand
    let computerSelection = computerPlay();
    let playerSelection = prompt('rock paper or scissors');

    // playing a round
    console.log(playRound(playerSelection, computerSelection));

    console.log(`player:  ${playerScore}`);
    console.log(`computer: ${computerScore}`);

  }
  winner();
}

game();