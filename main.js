
const options = ["rock","paper","scissors"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
  return choice
}
function CheckWinner(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "computer";
    }
}

function playRound(playerSelection,computerSelection){
    const result = CheckWinner(playerSelection,computerSelection);
    if(result == "Tie"){
        return "It's a tie"
    }
    else if(result == "Player"){
        return `Player wins! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `Computer wins! ${computerSelection} beats ${playerSelection}`
    }
} 

function getPlayerChoice() {
    let validateInput = false
    while(validateInput == false){
        const choice = prompt("rock paper scissors");
        if(choice == null){
            continue;
        }
        const chocieInLower = choice.toLowerCase();
        if(options.includes(chocieInLower)){
            validateInput = true;
            return chocieInLower
        }
    }

    }


function game() {
    let scorePlayer = 0
    let scoreComputer = 0
    console.log("welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if (CheckWinner(playerSelection,computerSelection) == "Player"){
             scorePlayer++;
        }
        else{
            scoreComputer++;
        }
     }
     console.log ("Game Over!")
     if(scorePlayer > scoreComputer){
        console.log("Player is the winner!")
        alert("player  wins!!")
     }
     else if(scorePlayer < scoreComputer){
        console.log("Computer wins!")
        alert("Computer wins!")
     }
     else{
        console.log("its a tie!!")
        alert("its at Tie!!")
     }
}

game()