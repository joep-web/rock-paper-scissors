const getComputerChoice = () => {
  const r = Math.floor(Math.random() * 3);
  if (r === 0){
    console.log("Rock");
  } else if (r === 1){
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
};

const oneRound = (playerSelection, computerSelection) => {
  
}


getComputerChoice();