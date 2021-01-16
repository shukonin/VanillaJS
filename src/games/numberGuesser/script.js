let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (number, target) => {
  return Math.abs(number - target);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (humanGuess > 9 || humanGuess < 0) {
    return alert('Unvalid input, please check it is between 0 and 9');
  }
  if (
    getAbsoluteDistance(humanGuess, target) <=
    getAbsoluteDistance(computerGuess, target)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  winner === 'human' ? humanScore++ : computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};
