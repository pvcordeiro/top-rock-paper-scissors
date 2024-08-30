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

    if (!input) return alert("Please type something!!!");

    input = input.toLowerCase();

    if (!options.includes(input)) return alert("Please type something valid");

    return options[input];
};

const playRound = () => {
    human = getHumanChoice();
    computer = getComputerChoice();

    if (human === computer) {
        alert("It's a tie, GO AGANE!");
        return;
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
