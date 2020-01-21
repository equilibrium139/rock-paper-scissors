const choices = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

let roundWinner = document.querySelector("#roundWinner");
let gameWinner = document.querySelector("#gameWinner");

let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
console.log(roundWinner);
let computerWins = 0;
let playerWins = 0;
const rounds = 5;
let roundsSoFar = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        roundsSoFar++;
        let winner = playRound(button.textContent, computerPlay());
        if(winner.includes("You")) { playerScore.textContent = `Player: ${++playerWins}`;}
        else if(winner.includes("Computer")) {computerScore.textContent = `Computer: ${++computerWins}`;}
        roundWinner.textContent = winner;
        if(roundsSoFar >= rounds)
        {
            announceWinner();
        }
    });
});

function announceWinner()
{
    if(playerWins > computerWins) {
        gameWinner.textContent = "You win the game!";
    }
    else if(computerWins > playerWins) {
        gameWinner.textContent = "Computer wins the game";
    }
    else {
        gameWinner.textContent = "It's a tie! Good game.";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection) {return "It's a tie!"}
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock'    ||
            playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}