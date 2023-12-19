//             CONSTANTS


const btn = document.querySelector("button");

const CompChoice = document.querySelector(".Computer div");

const humanChoice = document.querySelector(".Human div");

const cRock = CompChoice.querySelector("#cRock");

const cPaper = CompChoice.querySelector("#cPaper");

const cScissors = CompChoice.querySelector("#cScissors");

const cSpan = document.querySelector("#cSpan");

const hSpan = document.querySelector("#hSpan");

const roundsText = document.querySelector("#Rounds")
  
const choicesArr = [];

let barrier = false;

let rounds = 0;

let hScore = 0;

let cScore = 0;

let comResult = "";

//             LISTENERS


humanChoice.addEventListener("click", (e) => {
  let choice = e.target;
  
  if(/^(R|P|S)\w/.test(choice.id)) {
    scaleChoices(choice);
    choicesArr.push(choice.id);
    CompChoice.style.borderColor = humanChoice.style.borderColor = "gray";
    roundsText.innerText = `Rounds: ${rounds+=1}`;
      
    for(let img of humanChoice.children) {
      if(img.id !== choice.id) {
      scaleDown(img);
    }
      
    if(barrier === false){
      createBarrier();
      barrier = true;
    }
  }
}});

btn.addEventListener("click", () => {
  CompChoice.querySelectorAll("img").forEach((img) => {
    scaleDown(img);
  });
  
  if(choicesArr.length === 0) {
    chooseOptionWarning();
  }
  if(barrier === true) {
    barrierAnimationOut(CompChoice.querySelector("div"));
    getComputerChoice();
  }
});



//           FUNCTIONS


const scaleChoices = c => {
  c.style.opacity = "1";
  c.style.transform = "scale(1.1)";
  c.style.transition = "all .3s";
}

const scaleDown = c => {
  c.style.opacity = "0.7";
  c.style.transform = "scale(1.0)";
  c.style.transition = "all .3s";
}

const chooseOptionWarning = () => {
  const warning = document.createElement("div");
  const txt = document.createElement("p");
  
  txt.innerText = "Please choose an option first!";
  warning.className = "warning";
  document.body.appendChild(warning);
  warning.appendChild(txt);
  barrierAnimationIn(warning);
  barrierAnimationOut(warning);
};

const createBarrier = () => {
  const barrier = document.createElement("div");
  createElementBarrier(barrier);
  CompChoice.appendChild(barrier);
  barrierAnimationIn(barrier);
};

const createElementBarrier = (barrier) => {
  barrier.style.transition = "all .3s";
  barrier.style.position = "absolute";
  barrier.style.width = "100%";
  barrier.style.height = "100%";
  barrier.style.left = "0";
  barrier.style.transform = "translateY(-100%)";
  barrier.style.background = "#34495E";
}

const barrierAnimationIn = b => {
  setTimeout(() => {
    b.style.transform = "translateY(-13%)";
  });
};

const barrierAnimationOut = b => {
  setTimeout(() => {
    b.style.transform = "translateY(-100%)";
  }, 900);
  
  setTimeout(() => {
    b.parentElement.removeChild(b);
    choicesArr.length = 0;
    barrier = false;
    for(let c of humanChoice.children) {
      scaleDown(c);
    }
  }, 1200);
};


const getComputerChoice = () => {
  const r = Math.floor(Math.random() * 3);
  if (r === 0){
    scaleChoices(cRock);
    comResult = "Rock";
  } else if (r === 1){
    scaleChoices(cPaper);
    comResult = "Paper";
  } else {
    scaleChoices(cScissors);
    comResult = "Scissors";
  }

  Winner(comResult);
};

const Winner = (r) => {
  const winConditions = {
    "Rock": "Scissors",
    "Paper": "Rock",
    "Scissors": "Paper"
  };

  const enemyChoice = r; // Assuming r is the enemy's choice
  const yourChoice = choicesArr[choicesArr.length - 1];

  if (enemyChoice === yourChoice) {
    CompChoice.style.borderColor = humanChoice.style.borderColor = "blue";
    CompChoice.style.transition = humanChoice.style.transition = "all .3s";
    console.log("Tie");
  } else if (winConditions[enemyChoice] === yourChoice) {
    WinnerBorder(CompChoice, humanChoice)
    console.log("Enemy Win");
    cSpan.innerText = `Score: ${cScore+=1}`;
  } else {
    WinnerBorder(humanChoice, CompChoice);
    console.log("You Win");
    hSpan.innerText = `Score: ${hScore+=1}`;
  }
};

const WinnerBorder = (w, l) => {
  w.style.borderColor = "green";
  w.style.transition = "all .3s";
  l.style.borderColor = "#800000";
  l.style.transition = "all .3s";
}



  
/*

dapat may mapili muna yung player sa 3 choices pag wala hindi masstart game and may lalabas sa taas? na please select one ✓✓✓✓

pag pinindot yung choice magiging opacity 1 tapos mag sscale using event listener then may lalabas na before/after na mag tatakip sa choice ng computer. ✓✓✓✓

when the shoot is clicked matatawag yung function na mag rarandom sa choice ng computer tas ioopacity 1 then scale ang choice tapos tsaka mawawala yung takip


pag same choices tie

rock beats scissors

paper beats rock

scissors beat paper

*/

