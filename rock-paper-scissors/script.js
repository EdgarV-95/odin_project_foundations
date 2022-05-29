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

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Plays a whole round of the game and console logs the winner. It also updates the global variables in case multiple rounds will be played.
function playRound(e, computerSelection) {
    playerSelection = prompt('Choose one from Rock, Paper or Scissors').toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection == "rock" && computerSelection == "rock") {console.log("Draw! You both selected Rock"); draw += 1}
    else if (playerSelection == "rock" && computerSelection == "scissors") {console.log( "You Win! Rock beats Scissors"); win += 1}
    else if (playerSelection == "rock" && computerSelection == "paper") {console.log("You Lose! Paper beats Rock"); lose += 1}
    else if (playerSelection == "paper" && computerSelection == "paper") {console.log("Draw! You both selected Paper"); draw += 1}
    else if (playerSelection == "paper" && computerSelection == "rock") {console.log("You Win! Paper beats Rock"); win += 1}
    else if (playerSelection == "paper" && computerSelection == "scissors") {console.log("You Lose! Scissors beats Paper"); lose += 1}
    else if (playerSelection == "scissors" && computerSelection == "scissors") {console.log("Draw! You both selected Scissors"); draw += 1}
    else if (playerSelection == "scissors" && computerSelection == "paper") {console.log("You Win! Scissors beat Paper"); win += 1}
    else if (playerSelection == 'scissors' && computerSelection == "rock") {console.log("You Lose! Rock beats Scissors"); lose += 1}
    else console.log('There was an error');
}

// Plays multiple rounds of the game depending on the for loop. Prints out the winner and final score of the game.
function game() {
    // Plays 5 rounds
    // for (let i = 0; i < 5; i++) {
    //     playRound();
    // }
    if (win > lose && draw) {console.log("Congratulations! You won")}
    else if (lose > win && draw) {console.log("Sorry, you lost")}
    else {console.log("It is a draw!")}
    console.log(`Total wins: ${win} || Total losses: ${lose} || Total draws: ${draw}`);
}

game();