////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log('Please choose either 'rock', 'paper', or 'scissors'.')
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return  move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove==computerMove) {
        winner='tie';
    } else if (playerMove=='rock') {
        winner = (computerMove=='paper' ?  'computer' : 'player');
    } else if (playerMove=='paper') {
        winner=(computerMove=='scissors' ? 'computer' : 'player');
    } else if (playerMove=='scissors') {
        winner=(computerMove=='rock' ? 'computer' : 'player');
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var maxScore = 5;
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins<maxScore && computerWins<maxScore) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner=='player') {
            playerWins++;
        } else if (winner=='computer') {
            computerWins++;
        }
        console.log("Player chose " + playerMove + ", Computer chose " + computerMove + ", so the winner is " + winner);
        console.log("The score stands at Player: " + playerWins + ", Computer: " + computerWins);
    }
    console.log("Game Over")
    if (playerWins > computerWins) {
        console.log("Player has won: " + playerWins + " to " + computerWins);
    } else {
        console.log("Computer has won: " + computerWins + " to " + playerWins);
    }
    return [playerWins, computerWins];
}

