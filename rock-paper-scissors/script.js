// This functions is for the computer to return one of the 3 options randomly from the array "arr".
const computerPlay = () => {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

// Global variables for keeping track of the game score.
let win = 0;
let lose = 0;
let draw = 0;

// Target the player UI buttons
let rock = document.getElementById('rock-btn');
let paper = document.getElementById('paper-btn');
let scissors = document.getElementById('scissors-btn');

// Target the computer UI buttons. Need this for css animation;
let cpuRock = document.getElementById('cpu-rock');
let cpuPaper = document.getElementById('cpu-paper');
let cpuScissors = document.getElementById('cpu-scissors');

let result = document.querySelector('main h3');
let finalResult = document.getElementById('finalResult');

// Plays a whole round of the game and console logs the winner. It also updates the global variables in case multiple rounds will be played.
const playRound = (e) => {
    playerSelection = e.target.value;
    let computerSelection = computerPlay().toLowerCase();

    addAnimation(computerSelection);
    setTimeout(removeAnimation, 1500);

    if (playerSelection == "rock" && computerSelection == "rock") {
        result.innerText = "Draw! You both selected Rock";
        updateDraw();
    };
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result.innerText = "You Win! Rock beats Scissors";
        updateWin();
    };
    if (playerSelection == "rock" && computerSelection == "paper") {
        result.innerText = "You Lose! Paper beats Rock";
        updateLoss();
    };
    if (playerSelection == "paper" && computerSelection == "paper") {
        result.innerText = "Draw! You both selected Paper";
        updateDraw();
    };
    if (playerSelection == "paper" && computerSelection == "rock") {
        result.innerText = "You Win! Paper beats Rock";
        updateWin();
    };
    if (playerSelection == "paper" && computerSelection == "scissors") {
        result.innerText = "You Lose! Scissors beats Paper";
        updateLoss();
    };
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        result.innerText = "Draw! You both selected Scissors";
        updateDraw();
    };
    if (playerSelection == "scissors" && computerSelection == "paper") {
        result.innerText = "You Win! Scissors beat Paper";
        updateWin();
    };
    if (playerSelection == 'scissors' && computerSelection == "rock") {
        result.innerText = "You Lose! Rock beats Scissors";
        updateLoss();
    };

    if (win === 5) {
        playAgain();
        disableEventListeners();
        return finalResult.innerText = `Congratulations you Won!`;
    };
    if (lose === 5) {
        playAgain();
        disableEventListeners();
        return finalResult.innerText = `Sorry, you Lost!`;
    };
    if (draw === 5) {
        playAgain();
        disableEventListeners();
        return finalResult.innerText = `It is a Draw!`;
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
};

// Adds animation for player and cpu 
const addAnimation = (result) => {
    rock.classList.add('rock');
    paper.classList.add('paper');
    scissors.classList.add('scissors');

    if (result === 'rock') {
        cpuRock.classList.add(`cpu-rock`);
    } else if (result === 'paper') {
        cpuPaper.classList.add(`cpu-paper`);
    } else if (result === 'scissors') {
        cpuScissors.classList.add(`cpu-scissors`);
    };
};

// Removes animation for player and cpu 
const removeAnimation = () => {
    rock.classList.remove(`rock`);
    paper.classList.remove(`paper`);
    scissors.classList.remove(`scissors`);

    cpuRock.classList.remove(`cpu-rock`);
    cpuPaper.classList.remove(`cpu-paper`);
    cpuScissors.classList.remove(`cpu-scissors`);
}

// Update scores
const updateWin = () => {
    win += 1;
    document.querySelector('.player h2').innerText = 'Player score: ' + win;
};

const updateLoss = () => {
    lose += 1;
    document.querySelector('.computer h2').innerText = 'Computer score: ' + lose;
};

const updateDraw = () => {
    draw += 1;
    document.querySelector('.draw-score h2').innerText = 'Draw: ' + draw;
};

// Play again
const playAgain = () => {
    const button = document.createElement('button');
    button.className = 'play';
    button.id = 'again';
    button.innerText = 'Play again';
    document.querySelector('.score-texts').insertAdjacentElement("beforeend", button);
    document.getElementById('again').addEventListener('click', () => location.reload());
};