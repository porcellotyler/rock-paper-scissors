
/* pseudocode

create 3 variables for each move in the game

computerPlay (randomly pick 1 of 3 variables)
playerPlay (prompt user to pick a move)

computerSelection (converts computerPlay into RPS move)
playerSelection (converts playerPlay into RPS move)

round (compares computerSelection and playSelection)
    if computer beats player, display "You Lose! Paper beats Rock"
    else if player beats computer, display "You Win! Paper beats Rock"
    else display "It's a tie! Both players chose paper"

computer displays who won and what player and computer picked

*/

let moveArray = [
    'Rock',
    'Paper',
    'Scissors'
];

let randomNumber = Math.floor(Math.random()*moveArray.length);

computerPlay = moveArray[randomNumber];

let playerPick = prompt('Enter your move', '');

let playerSelection = playerPick.charAt(0).toUpperCase() + playerPick.slice(1).toLowerCase(); /* this takes playPick and formats it to first letter capitalized, rest lowercase so the function below can use it */

let round = play(computerPlay, playerSelection); 

function play(a, b) {
    let result;
    if (a === 'Rock' && b === 'Scissors') {
       result = console.log("You Lose! Rock beats Scissors");
    } else if (a === 'Rock' && b === 'Paper') {
        result = console.log("You Win! Paper beats Rock"); 
    } else if (a === 'Scissors' && b === 'Rock') {
        result = console.log("You Win! Rock beats Scissors");
    } else if (a === 'Scissors' && b === 'Paper') {
        result = console.log("You Lose! Scissors beats Paper");
    } else if (a === 'Paper' && b === 'Scissors') {
        result = console.log("You Win! Scissors beats Paper");
    } else if (a === 'Paper' && b === 'Rock') {
        result = console.log("You Lose! Paper beats Rock");
    } else {
        result = console.log("It's a tie! Both players chose the same move");
    }
    return result;
};