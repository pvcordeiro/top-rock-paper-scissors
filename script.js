let humanScore = 0;
let computerScore = 0;

alert("Feeling lucky? The first to score 5 points wins!!!");
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    const choice = options[random];
    return choice;
};

const getHumanChoice = () => {
    let input = prompt("Please type Rock, Paper or Scissors");

    const choice = input.toLowerCase();

    if (choice === "") {
        alert("Please type something!!!");
        return getHumanChoice();
    } else if (
        choice !== "rock" &&
        choice !== "paper" &&
        choice !== "scissors"
    ) {
        alert("Please type only one of the three options");
        return getHumanChoice();
    } else {
        return choice;
    }
};

const playRound = () => {
    human = getHumanChoice();
    computer = getComputerChoice();

    if (human === computer) {
        alert("It's a tie, GO AGANE!");
    }

    if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        humanScore++;
        alert(`You win the round! ${human} beats ${computer}`);
    } else {
        computerScore++;
        alert(`You lose the round! ${computer} beats ${human}`);
    }
};

const playGame = () => {
    humanScore = 0;
    computerScore = 0;

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
