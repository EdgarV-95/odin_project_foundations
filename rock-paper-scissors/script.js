// This functions is for the computer to return one of the 3 options randomly from the array "arr".
const computerPlay = () => {
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

let result = document.querySelector('main h3');
let finalResult = document.getElementById('finalResult');

// Plays a whole round of the game and console logs the winner. It also updates the global variables in case multiple rounds will be played.
const playRound = (e) => {
    playerSelection = e.target.value;
    let computerSelection = computerPlay().toLowerCase();
    document.querySelector('.draw-score h2').innerText = 'Draw: ' + draw;
    document.querySelector('.player h2').innerText = 'Player score: ' + win;
    document.querySelector('.computer h2').innerText = 'Computer score: ' + lose;

    if (win === 5) {
        createButton();
        playAgain();
        disableEventListeners();
        return finalResult.innerText = `Congratulations you Won!`;
    };
    if (lose === 5) {
        createButton();
        playAgain();
        disableEventListeners();
        return finalResult.innerText = `Sorry, you Lost!`;
    };
    if (draw === 5) {
        createButton();
        playAgain();
        disableEventListeners();
        return finalResult.innerText = `It is a Draw!`;
    };

    if (playerSelection == "rock" && computerSelection == "rock") {
        result.innerText = "Draw! You both selected Rock";
        draw += 1;
    };
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result.innerText = "You Win! Rock beats Scissors";
        win += 1;
    };
    if (playerSelection == "rock" && computerSelection == "paper") {
        result.innerText = "You Lose! Paper beats Rock";
        lose += 1;
    };
    if (playerSelection == "paper" && computerSelection == "paper") {
        result.innerText = "Draw! You both selected Paper";
        draw += 1;
    };
    if (playerSelection == "paper" && computerSelection == "rock") {
        result.innerText = "You Win! Paper beats Rock";
        win += 1;
    };
    if (playerSelection == "paper" && computerSelection == "scissors") {
        result.innerText = "You Lose! Scissors beats Paper";
        lose += 1;
    };
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        result.innerText = "Draw! You both selected Scissors";
        draw += 1;
    };
    if (playerSelection == "scissors" && computerSelection == "paper") {
        result.innerText = "You Win! Scissors beat Paper";
        win += 1;
    };
    if (playerSelection == 'scissors' && computerSelection == "rock") {
        result.innerText = "You Lose! Rock beats Scissors";
        lose += 1;
    };
};

// Event listeners for the buttons
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Disable event listeners after game is over
const disableEventListeners = () => {
    rock.removeEventListener('click', playRound);
    paper.removeEventListener('click', playRound);
    scissors.removeEventListener('click', playRound);
}

// Create Play again button
const createButton = () => {
    const button = document.createElement('button');
    button.className = 'play';
    button.id = 'again';
    button.innerText = 'Play again';
    document.querySelector('.score-texts').insertAdjacentElement("beforeend", button);
};

// Play again
const playAgain = () => {
    document.getElementById('again').addEventListener('click', () => location.reload());
};