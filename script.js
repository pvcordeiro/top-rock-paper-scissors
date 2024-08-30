let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

alert("Feeling lucky? The first to score 5 points wins!!!");

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

const getHumanChoice = () => {
    let input = prompt("Please type Rock, Paper or Scissors");
    input = input.toLowerCase();

    if (!input) {
        alert("Please type something!!!");
        return getHumanChoice();
    } else if (!options.includes(input)) {
        alert("Please type only one of the three options!");
        return getHumanChoice();
    } else {
        return input;
    }
};

const playRound = () => {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alert(`It's a tie, both chose ${humanChoice} GO AGANE!`);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        alert(`You win the round! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        alert(`You lose the round! ${computerChoice} beats ${humanChoice}`);
    }
};

const playGame = () => {
    while (humanScore < 5 && computerScore < 5) {
        playRound();
        alert(`Your Score: ${humanScore}. Computer score: ${computerScore}.`);
    }
    if (humanScore === 5) {
        alert("Nice! You're lucky");
    } else {
        alert("You lose! RIP BOZO");
    }
};

playGame();
