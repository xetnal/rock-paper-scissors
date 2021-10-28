/*Make a game where the user inputs a choice between rock, paper and scissors and the computer
 chooses one at random. Depending on both the player choice and the pc outcome, decide the winner.
 Repeat 5 times.
*/
//ask the player for an input
//pc chooses a random option from the 3 possible choices
//compare both choices and declare a winner
//repeat 5 times

//declare a function that determines the computers choice
function computerPlay() {
  let pcPlay = Math.floor(Math.random() * 3) + 1
  if (pcPlay === 1) {
    pcPlay = 'rock'
  }
  else if (pcPlay === 2) {
    pcPlay = 'paper'
  }
  else {
    pcPlay = 'scissors'
  }

  return pcPlay

}
console.log(computerPlay())

// declare a function that determines the players choice
function playerPlay(){
  let playerChoice = prompt('Please choose between rock, paper or scissors')
  if ((playerChoice !== 'rock') && (playerChoice !== 'paper') && (playerChoice !== 'scissors')) {
    prompt('Please choose between rock, paper or scissors').toLowerCase()
  }

  return playerChoice

}

// Make a function that plays a round of RPS

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
    return 'lose'

  }
  else if ((playerSelection == 'rock') && (computerSelection === 'scissors')) {
    return 'win'

  }

  else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
    return 'lose'

  }
  else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    return 'win'

  }

  else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
    return 'lose'

  }
  else if ((playerSelection === ' scissors') && (computerSelection === 'paper')) {
    return 'win'

  }


}
// Make a function that plays the game 5 times and keeps a score
function game() {
  let playerScore = 0
  let computerScore = 0
  let outcome = playRound(playerPlay(), computerPlay())                 //play a round
    if (outcome === 'win') {   //if the player wins, add 1 to player score
      playerScore += 1
      console.log(playerScore)
  }
    else if (outcome === 'lose') { //if the pc wins, add 1 to pc score
     computerScore += 1
     console.log(computerScore)
  }
    alert('Your score: ' + playerScore + '. ' + 'Their score: ' + computerScore + '.')

    console.log(playerScore)

  outcome = playRound(playerPlay(), computerPlay())                 //play a round
    if (outcome === 'win') {   //if the player wins, add 1 to player score
      playerScore += 1
      console.log(playerScore)
  }
    else if (outcome === 'lose') { //if the pc wins, add 1 to pc score
     computerScore += 1
     console.log(computerScore)
  }
    alert('Your score: ' + playerScore + '. ' + 'Their score: ' + computerScore + '.')

    console.log(playerScore)

  outcome = playRound(playerPlay(), computerPlay())                 //play a round
    if (outcome === 'win') {   //if the player wins, add 1 to player score
      playerScore += 1
      console.log(playerScore)
  }
    else if (outcome === 'lose') { //if the pc wins, add 1 to pc score
     computerScore += 1
     console.log(computerScore)
  }
    alert('Your score: ' + playerScore + '. ' + 'Their score: ' + computerScore + '.')

    console.log(playerScore)

  outcome = playRound(playerPlay(), computerPlay())                 //play a round
    if (outcome === 'win') {   //if the player wins, add 1 to player score
      playerScore += 1
      console.log(playerScore)
  }
    else if (outcome === 'lose') { //if the pc wins, add 1 to pc score
     computerScore += 1
     console.log(computerScore)
  }
    alert('Your score: ' + playerScore + '. ' + 'Their score: ' + computerScore + '.')

    console.log(playerScore)

  outcome = playRound(playerPlay(), computerPlay())                 //play a round
    if (outcome === 'win') {   //if the player wins, add 1 to player score
      playerScore += 1
      console.log(playerScore)
  }
    else if (outcome === 'lose') { //if the pc wins, add 1 to pc score
     computerScore += 1
     console.log(computerScore)
  }
    alert('Your score: ' + playerScore + '. ' + 'Their score: ' + computerScore + '.')

    console.log(playerScore)

  if (playerScore > computerScore) {
    alert('YOU WIN!')
  }
  else if (playerScore < computerScore) {
    alert('YOU LOSE!')
  }
  else {
    alert('ITS A TIE!')
  }
}


game()


