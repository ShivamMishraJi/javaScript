const startGameBtn = document.getElementById("start-game");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = 'ROCK';

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

//get Computer Choice
const getComputerChoice = () => {
    console.log("inside getComputerChoice")
    const randomValue = Math.random();
    if(randomValue<0.34){
        return ROCK;
    }else if (randomValue < 0.67){
        return PAPER;
    }else{
        return SCISSOR;
    } 
};

//get Player Choice
const getPlayerChoice = () => {
    const selection = prompt(`${ROCK},${PAPER} or ${SCISSOR}?`,'').toUpperCase();
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSOR
    ){
        alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

//get WINNER
const getWinner = (cChoice,pChoice) => {

    if(cChoice === pChoice){
        return RESULT_DRAW ;
    }else if(cChoice == ROCK && pChoice == PAPER || cChoice==PAPER && pChoice==SCISSOR ||cChoice == SCISSOR && pChoice == ROCK ){
        return RESULT_PLAYER_WINS;
    }else{
        return RESULT_COMPUTER_WINS;
    }
};

//START GAME
const startGame = () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;

    console.log("Game is starting....");
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    console.log("Player Choice"+playerSelection);
    console.log("Computer Choice"+computerSelection);

    const winner = getWinner(computerSelection,playerSelection);
    console.log("winner is: "+winner);
}


startGameBtn.addEventListener('click',startGame);

