

function getComputerChoice () {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)]
    console.log("computer's choice: ", choice) 
    return choice;
}



function singleRound(playerSelection, computerSelection){
    if( playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You lose because paper beats rock';
    } else if( playerSelection == 'paper' && computerSelection == 'paper'){
        return 'It is a tie';
    } else if( playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'You win because scissors beats paper';
    }
    else if( playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'You lose because rock beats scissors';
    }
    else if( playerSelection == 'rock' && computerSelection == 'rock'){
        return 'It is a tie';
    }
    else if( playerSelection == 'paper' && computerSelection == 'rock'){
        return 'You lost because rock beats paper';
    }
    else if( playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'it is a tie';
    }
    else if( playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'You win because scissors beats rock';
    }
    else if( playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'You lose because scissors beats paper';
    } else {
        return 'please input a valid option'
    }
}

// const playerSelection = "rock";



function playGame(){
     for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What's your choice among rock, paper, scissors");
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection, computerSelection));

     }
}

playGame();
