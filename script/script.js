// *****************************************************************************
// ********************** FUNCTION FOR COMPUTER SELECTION **********************
// *****************************************************************************

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


let roundCounter;
let playerScore = 0;
let computerScore = 0;

// *****************************************************************************
// ************************* MAIN FUNCTION OF THE GAME *************************
// *****************************************************************************

function playGame() {
    console.log(`play the game`);
    for (roundCounter = 1; roundCounter <= 5; roundCounter++) {
        console.log(`Round ${roundCounter}`);
        let computerSelection = getComputerChoice();
        let getPlayerSelection = prompt(`Round ${roundCounter}: Enter 'Rock', 'Paper', or 'Scissors'.`);
        let playerSelection = getPlayerSelection[0].toUpperCase() + getPlayerSelection.slice(1).toLowerCase();
        playRound(playerSelection, computerSelection);
    }
}

// *****************************************************************************
// ************ FUNCTION TO PLAY ONE ROUND AND COMPARE THE RESULTS *************
// *****************************************************************************

function playRound(player, computer) {
    console.log(`You have ${player}, Computer has ${computer}.`);
    if (player === 'Rock' && computer === 'Rock') {
        playerScore++;
        computerScore++;
        console.log(`It's a tie! ${player} vs. ${computer}.`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (player === 'Paper' && computer === 'Paper') {
        playerScore++;
        computerScore++;
        console.log(`It's a tie! ${player} vs. ${computer}.`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (player === 'Scissors' && computer === 'Scissors') {
        playerScore++;
        computerScore++;
        console.log(`It's a tie! ${player} vs. ${computer}.`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (player === 'Rock' && computer === 'Paper') {
        computerScore++;
        console.log(`You lose! ${computer} beats ${player}!`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (player === 'Rock' && computer === 'Scissors') {
        playerScore++;
        console.log(`You win! ${player} beats ${computer}!`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (player === 'Paper' && computer === 'Scissors') {
        computerScore++;
        console.log(`You lose! ${computer} beats ${player}!`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (player === 'Scissors' && computer === 'Rock') {
        computerScore++;
        console.log(`You lose! ${computer} beats ${player}!`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (player === 'Scissors' && computer === 'Paper') {
        playerScore++;
        console.log(`You win! ${player} beats ${computer}!`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    } else {
        console.log(`Somthing is wrong! What is ${player}?`);
    }
}

// playRound(playerSelection, computerSelection);

playGame();

function winnerSelection() {
    if (playerScore > computerScore) {
        console.log(`Player wins with the score of ${playerScore} vs. ${computerScore}! Congratulations!!!`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins with the score of ${computerScore} vs. ${playerScore}! Congratulations!!!`);
    } else {
        console.log(`It's a tie! Player scored ${playerScore} points. Computer scored ${computerScore} points.`);
    }
}

winnerSelection();