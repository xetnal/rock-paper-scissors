

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click',(e) => playRound(playerPlay('rock'), computerPlay()));
paperBtn.addEventListener('click', (e) => playRound(playerPlay('paper'), computerPlay()));
scissorsBtn.addEventListener('click', (e) => playRound(playerPlay('scissors'), computerPlay()));

const content = document.querySelector('.score');

const playerScoreRef = document.getElementById("player1");
const pcScoreRef = document.getElementById("player2");

const outcomeRef = document.getElementById('outcome');

function displayScore(outcome) {
  let playerScore = parseInt(playerScoreRef.textContent);
  let computerScore = parseInt(pcScoreRef.textContent);
  if (outcome === 'win') {
    playerScore += 1;
    playerScoreRef.innerText = playerScore;
  }
  else if (outcome === 'lose') {
    computerScore += 1;
    pcScoreRef.innerText = computerScore;
  }
  outcomeRef.innerText = outcome;
  determineWinner(playerScore, computerScore);
} 

function determineWinner(playerScore, pcScore) {
  if (playerScore === 5) {
    alert ('YOU WIN!')
    resetGame();
  }
  else if (pcScore === 5) {
    alert ('YOU LOSE!, LOSER')
    resetGame();
  }

}

function resetGame() {
  setTimeout(function() {
    pcScoreRef.innerText = 0;
    playerScoreRef.innerText = 0;
    outcomeRef.innerText = '';
  }, 100)
}

function computerPlay() {
  let pcPlay = Math.floor(Math.random() * 3) + 1;
  if (pcPlay === 1) {
    pcPlay = 'rock'
  }
  else if (pcPlay === 2) {
    pcPlay = 'paper'
  }
  else {
    pcPlay = 'scissors'
  }
  console.log(pcPlay)
  return pcPlay

}



// declare a function that determines the players choice
function playerPlay(rps){
  let playerChoice = rps;
  console.log(playerChoice);
  return playerChoice;

}

// Make a function that plays a round of RPS

function playRound(playerSelection, computerSelection) {
  let outcome;
  
  if ((playerSelection === 'rock') && (computerSelection === 'paper')) {    
    outcome = 'lose';
  }
  else if ((playerSelection == 'rock') && (computerSelection === 'scissors')) {    
    outcome = 'win';
  }
  else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {    
    outcome = 'lose';
  }
  else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {    
    outcome = 'win';
  }
  else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {    
    outcome = 'lose';
  }
  else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {    
    outcome = 'win';
  }
  else if (playerSelection === computerSelection) {    
    outcome = 'draw'; 
  }

  displayScore(outcome);
}



