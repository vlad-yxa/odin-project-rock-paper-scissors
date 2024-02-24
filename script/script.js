// const playerSelection = prompt(`Enter 'Rock', 'Paper', or 'Scissors'`);
let getPlayerSelection = prompt(`Enter 'Rock', 'Paper', or 'Scissors'.`);
let playerSelection = getPlayerSelection[0].toUpperCase() + getPlayerSelection.slice(1).toLowerCase();
// console.log(playerSelection);


function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    // console.log(`This is a random number between 1 and 3: ${computerChoice}`);

    if (computerChoice === 1) {
        computerChoice = 'Rock';
    } else if (computerChoice === 2) {
        computerChoice = 'Paper';
    } else if (computerChoice === 3) {
        computerChoice = 'Scissors';
    } else {
        computerChoice = `Something is wrong!`;
    }
    return computerChoice;
}

let computerSelection = getComputerChoice();
// console.log(`${computerSelection} - this is the result of the function getComputerChoice`);

function playRound(player, computer) {
    console.log(`You have ${player}, Computer has ${computer}.`);
    if (player === 'Rock' && computer === 'Rock') {
        console.log(`It's a tie! ${player} vs. ${computer}.`);
    } else if (player === 'Paper' && computer === 'Paper') {
        console.log(`It's a tie! ${player} vs. ${computer}.`);
    } else if (player === 'Scissors' && computer === 'Scissors') {
        console.log(`It's a tie! ${player} vs. ${computer}.`);
    } else if (player === 'Rock' && computer === 'Paper') {
        console.log(`You lose! ${computer} beats ${player}!`);
    } else if (player === 'Rock' && computer === 'Scissors') {
        console.log(`You win! ${player} beats ${computer}!`);
    } else if (player === 'Paper' && computer === 'Scissors') {
        console.log(`You lose! ${computer} beats ${player}!`);
    } else if (player === 'Scissors' && computer === 'Rock') {
        console.log(`You lose! ${computer} beats ${player}!`);
    } else if (player === 'Scissors' && computer === 'Paper') {
        console.log(`You win! ${player} beats ${computer}!`);
    } else {
        console.log(`Somthing is wrong! What is ${player}?`);
    }
}

playRound(playerSelection, computerSelection);

