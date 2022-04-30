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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You draw! Rock draw Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Won! Rock beats scissors';
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Won! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You draw! Paper draw Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lost! Scissors beats paper';
    }


    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Won! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You draw! Scissors draw scissors';
    }

}

function game() {
    let user = prompt('Enter choice');
    let score = '';
    let counter = 0;

    for (let i = 0; i < 5; i++) {
        score = playRound(user, computerPlay());
        console.log(score);

        if (score === 'You draw! Rock draw Rock') {
            counter = counter + 0;
        } else if (score === 'You Lose! Paper beats Rock') {
            counter = counter - 1;
        } else if (score === 'You Won! Paper beats Rock') {
            counter = counter + 1;
        }

        if (score === 'You draw! Paper draw Paper') {
            counter = counter + 0;
        } else if (score === 'You Lost! Scissors beats paper') {
            counter = counter - 1;
        } else if (score === 'You Won! Rock beats scissors') {
            counter = counter + 1;
        }

        if (score === 'You draw! Scissors draw scissors') {
            counter = counter + 0;
        } else if (score === 'You lost! Rock beats Scissors') {
            counter = counter - 1;
        } else if (score === 'You Won! Scissors beats Paper') {
            counter = counter + 1;
        }

    }

    if (counter >= 1) {
        console.log('Congratulations YOU WON with a score of ' + counter)
    } else if (counter == 0) {
        console.log('Hmmm you have DRAWN');
    } else {
        console.log('Damn it YOU LOST with a score of ' + counter);
    }
}

game();