console.log('hello world')


function getComputerChoice () {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)]
    console.log(choice)
}

function singleRound(playerSelection, computerSelection){
    return "You Lose! Paper beats Rock"
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame(){
    for(let i = 0; i < 5; i++){
        singleRound();
    }
}
let userInput = prompt("What's your choice among rock, paper, scissors");
getComputerChoice();