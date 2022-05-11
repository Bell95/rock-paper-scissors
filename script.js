/* 
computerPlay will RANDOMLY pick rock, 
paper or scissors and return it

computer will randomly select any number 1 - 3
assign 1 to rock, 2 to paper, 3 to scissors
and return it as String rock, paper or scissors

function called roundPlay to test it out
it will have 2 arguments, playerSelection and comSelect
and it will return a string statement 
that declare a winner of a round

test out roundPlay by manually entering arguments
passed in string of 'rock' and variable comSe(string)

function called game() will call the playRound function inside
to play 5 round games with loop
keeps score
report winner or loser at the end

*/

function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {

    let computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('draw');


    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose');
        computerScore++;


    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('you win');
        playerScore++;

    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win');
        playerScore++;

    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('draw');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose');
        computerScore++;
    }


    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose');
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win');
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('You draw');
    }

    console.log(computerScore);
    console.log(playerScore);

}

const container = document.querySelector('#container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerScoreUpdate = document.querySelector('#computerScore');
const playerScoreUpdate = document.querySelector('#playerScore');

rock.addEventListener('click', () => {
    playRound('rock');
    if (computerScore === 5) {
        alert('Game over Computer WON!')
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore === 5) {
        alert('Game over You WON!');
        computerScore = 0;
        playerScore = 0;
    }
    computerScoreUpdate.textContent = 'This is computer score: ' + computerScore;
    playerScoreUpdate.textContent = 'This is Your score: ' + playerScore;
});

paper.addEventListener('click', () => {
    playRound('paper');
    if (computerScore === 5) {
        alert('Game over Computer WON!')
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore === 5) {
        alert('Game over You WON!');
        computerScore = 0;
        playerScore = 0;
    }
    computerScoreUpdate.textContent = 'This is computer score: ' + computerScore;
    playerScoreUpdate.textContent = 'This is Your score: ' + playerScore;
});

scissors.addEventListener('click', () => {
    playRound('scissors');
    if (computerScore === 5) {
        alert('Game over Computer WON!')
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore === 5) {
        alert('Game over You WON!');
        computerScore = 0;
        playerScore = 0;
    }
    computerScoreUpdate.textContent = 'This is computer score: ' + computerScore;
    playerScoreUpdate.textContent = 'This is Your score: ' + playerScore;
});

computerScoreUpdate.textContent = 'This is computer score: 0';
playerScoreUpdate.textContent = 'This is Your score: 0';
