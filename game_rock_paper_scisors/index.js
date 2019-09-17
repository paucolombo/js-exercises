const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("error");
  }
}

function getComputerChoice() {
  var randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return "scissors";
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie game";
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Wins"
    } else if (computerChoice === "rock") {
      return "User Wins"
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Wins"
    } else if (computerChoice === "paper") {
      return "User Wins"
    }
  }
  else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Wins"
    } else if (computerChoice === "scissors") {
      return "User Wins"
    }
  } else if (userChoice === "bomb") {
    return "User Wins"
  }
}

function playGame() {
  var userChoice = getUserChoice("bomb");
  var computerChoice = getComputerChoice();
  console.log("usuario:  " + userChoice);
  console.log("PC: " + computerChoice);
  console.log("El resultado del juego es " + determineWinner(userChoice, computerChoice));
}
playGame();