let globalStart = prompt('Would you like to play?', '');
let globalStartAnswer = globalStart.charAt(0).toUpperCase() + globalStart.slice(1).toLowerCase();
let startGame = letsPlay(globalStartAnswer);

var gameResult = 'a string';

function letsPlay(answer) {
    let gameLoop = gamePlay(globalStartAnswer)

    function gamePlay(z) {
        if (z != 0) {
            var playerScore = 0;
            var computerScore = 0;
            for (let i = 0; i < 5; i++) {
                if (i <= 5) { 
                    if (answer === 'Yes') {
                        
                        let playerPick = prompt('Enter your move', '');
                        let playerSelection = playerPick.charAt(0).toUpperCase() + playerPick.slice(1).toLowerCase(); /* this takes playPick and formats it to first letter capitalized, rest lowercase so the function below can use it */   

                        let goComputer = generate(playerSelection);

                        function generate(x) {
                            if (x === 'Rock' || x === 'Paper' || x === 'Scissors') {
                                let moveArray = [ 'Rock', 'Paper', 'Scissors' ];
                                let computerPlay = moveArray[Math.floor(Math.random()*moveArray.length)];
                                playRound(computerPlay, playerSelection);
                            } else { prompt ("You're playing a different game.") }
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
                            console.log(result);
                            return gameScore(result);
                        }

                        function gameScore(y) {
                            let win = /win/;
                            let lose = /lose/;

                            if (win.test(y) == true) {
                                ++playerScore; 
                            } else if (lose.test(y) == true) {
                                ++computerScore;
                            }  
                        }
                    }
                } else if (i >= 5) {
                    break; 
                }
            }
            if (playerScore > computerScore) {
                gameResult = "You win the game!";
            } else if (computerScore > playerScore) {
                gameResult = "You lose the game!"; 
            } else if (playerScore === computerScore) {
                gameResult = "The game is a tie! What an even match.";
            } 
        
            console.log(gameResult);            
        }
    }    
};