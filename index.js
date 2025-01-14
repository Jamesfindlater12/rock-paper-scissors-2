const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function getPlayerChoice() {
    let validatedInput = false
    while (validatedInput == false) {
        const choice = prompt('Rock, Paper or Scissors?');
        if (choice == null) {
        continue;
    }
    const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
        validatedInput = true;
        return choiceInLower;
        }
    }
}

const humanChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
                  (humanChoice === 'rock' && computerChoice === 'scissors') || 
                  (humanChoice === 'scissors' && computerChoice === 'paper') ||
                  (humanChoice === 'paper' && computerChoice === 'rock')
                  ){
                    console.log("You win!");
                    humanScore += 1;
        } else {
                console.log("Computer wins!")
                computerScore += 1;
               }
    
               console.log(`Computer chose ${computerChoice}`);
               console.log(`Player chose ${humanChoice}`);

               console.log(`Computer Score: ${computerScore}`);
               console.log(`Player Score: ${humanScore}`);
        }

    let i = 0;

    for (i = 0; i < 5; i++) {
        const humanChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Score:");
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${humanScore}`);

    if (humanScore > computerScore) {
        console.log("Player Wins!");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!");
    } else {
        console.log("It's a tie!");
    }
    
}


//playRound(humanChoice, computerChoice);
//console.log(humanScore);
//console.log(computerScore);
playGame();