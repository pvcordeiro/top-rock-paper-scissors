let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    const choice = options[random];
    console.log(choice);
    return choice;
};

// getComputerChoice();

const getHumanChoice = () => {
    let input = prompt("Please type Rock, Paper or Scissors");

    const choice = input.toLowerCase();

    console.log(choice);
    return choice;
};

// getHumanChoice();

const playRound = (humanChoice, computerChoice) => {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return alert("It's a tie, GO AGANE!");
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return alert(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        return alert();
    }
};

const playGame = () => {};
