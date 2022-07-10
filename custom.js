const btnDiv = document.createElement('div');
    container.appendChild(btnDiv);

const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    btnDiv.appendChild(rockBtn);
    rockBtn.addEventListener('click', () => generate('Rock'));
const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    btnDiv.appendChild(paperBtn);
    paperBtn.addEventListener('click', () => generate('Paper'));
const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors';
    btnDiv.appendChild(scissorsBtn);
    scissorsBtn.addEventListener('click', () => generate('Scissors'));

const resultsDiv = document.createElement('div');
    container.appendChild(resultsDiv);

const scoreDiv = document.createElement('div');
    container.appendChild(scoreDiv);

const gameWinner = document.createElement('div');
    container.appendChild(gameWinner);

var playerScore = 0;
var computerScore = 0;

function generate(playersInput) {
    if (playersInput === 'Rock' || playersInput === 'Paper' || playersInput === 'Scissors') {
        let moveArray = [ 'Rock', 'Paper', 'Scissors' ];
        let computerPlay = moveArray[Math.floor(Math.random()*moveArray.length)];
        playRound(computerPlay, playersInput);
    };
};

function playRound(a, b) { 
    let result;
    if (a === 'Rock' && b === 'Scissors') {
        result = "You lose the round! Rock beats Scissors";
    } else if (a === 'Rock' && b === 'Paper') {
        result = "You win the round! Paper beats Rock"; 
    } else if (a === 'Scissors' && b === 'Rock') {
        result = "You win the round! Rock beats Scissors";
    } else if (a === 'Scissors' && b === 'Paper') {
        result = "You lose the round! Scissors beats Paper";
    } else if (a === 'Paper' && b === 'Scissors') {
        result = "You win the round! Scissors beats Paper";
    } else if (a === 'Paper' && b === 'Rock') {
        result = "You lose the round! Paper beats Rock";
    } else {
        result = "The round is a tie! Both players chose the same move";
    }
    resultsDiv.textContent = result;
    return gameScore(result);
};

function gameScore(outcome) {
    let win = /win/;
    let lose = /lose/;

    if (win.test(outcome) == true) {
        ++playerScore; 
    } else if (lose.test(outcome) == true) {
        ++computerScore;
    }  
    scoreDiv.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    return findWinner(playerScore, computerScore);
};

function findWinner(playerScore, computerScore) {
    if (playerScore > computerScore && playerScore >= 5) {
        gameResult = "You win the game!";
    } else if (computerScore > playerScore && computerScore >= 5) {
        gameResult = "You lose the game!"; 
    } else if (playerScore === computerScore && playerScore === 5) {
        gameResult = "The game is a tie! What an even match.";
    } 
    gameWinner.textContent = gameResult;
    return;
};