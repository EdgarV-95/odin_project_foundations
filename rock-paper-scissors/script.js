// This functions is for the computer to return one of the 3 options randomly from the array "arr".
function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

// Global variables for keeping track of the game score.
let win = 0;
let lose = 0;
let draw = 0;

// Target the UI buttons
let rock = document.getElementById('rock-btn');
let paper = document.getElementById('paper-btn');
let scissors = document.getElementById('scissors-btn');

let result = document.getElementById('result');
let runningScore = document.getElementById('running-score');
let finalResult = document.getElementById('finalResult');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Plays a whole round of the game and console logs the winner. It also updates the global variables in case multiple rounds will be played.
function playRound(e, computerSelection) {
    playerSelection = e.target.value;
    computerSelection = computerPlay().toLowerCase();
    runningScore.innerText = `Draw: ${draw} || Win: ${win} || Lose: ${lose}`;

    if (win == 5) {
        return finalResult.innerText = `Congratulations you Won!`;
    };
    if (lose == 5) {
        return finalResult.innerText = `Sorry, you Lost!`;
    };
    if (draw == 5) {
        return finalResult.innerText = `It is a Draw!`;
    };

    if (playerSelection == "rock" && computerSelection == "rock") {
        result.innerText = "Draw! You both selected Rock";
        draw += 1
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result.innerText = "You Win! Rock beats Scissors";
        win += 1
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        result.innerText = "You Lose! Paper beats Rock";
        lose += 1
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        result.innerText = "Draw! You both selected Paper";
        draw += 1
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result.innerText = "You Win! Paper beats Rock";
        win += 1
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result.innerText = "You Lose! Scissors beats Paper";
        lose += 1
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result.innerText = "Draw! You both selected Scissors";
        draw += 1
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result.innerText = "You Win! Scissors beat Paper";
        win += 1
    }
    else if (playerSelection == 'scissors' && computerSelection == "rock") {
        result.innerText = "You Lose! Rock beats Scissors";
        lose += 1
    }
    else result.innerText = 'There was an error';

}

let refreshButton = document.getElementById('again')
refreshButton.addEventListener('click', reloadPage);

function reloadPage() {
    location.reload();
}