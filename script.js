//             CONSTANTS

const humanChoice = document.querySelector(".Human div");

const btn = document.querySelector("button");

const CompChoice = document.querySelector(".Computer div");

const choicesArr = [];

//             LISTENERS

humanChoice.addEventListener("click", (e) => {
  let choice = e.target;
  
  if(/^h\w/.test(choice.id)) {
    choice.style.opacity = "1";
    choice.style.transform = "scale(1.1)";
    choice.style.transition = "all .3s";
    choicesArr.push(choice.id);

    for(let img of humanChoice.children) {
      if(img.id !== choice.id) {
      img.style.opacity = "0.7";
      img.style.transform = "scale(1.0)";
      img.style.transition = "all .3s";
    }
  }
}});

btn.addEventListener("click", () => {
  if(choicesArr.length === 0) {
    chooseOptionWarning();
  } else {
    createBarrier();
  }
});



//           FUNCTIONS

const chooseOptionWarning = () => {
  const warning = document.createElement("div");
  const txt = document.createElement("p");
  
  txt.innerText = "Please choose an option first!";
  warning.className = "warning";
  document.body.appendChild(warning);
  warning.appendChild(txt);
  barrierAnimations(warning);
};

const createBarrier = () => {
  const barrier = document.createElement("div");
  barrier.style.transition = "all .3s";
  barrier.style.position = "absolute";
  barrier.style.width = "100%";
  barrier.style.height = "100%";
  barrier.style.left = "0";
  barrier.style.transform = "translateY(-100%)";
  barrier.style.background = "#34495E";
  CompChoice.appendChild(barrier);
  barrierAnimations(barrier);
};

const barrierAnimations = (b) => {
  setTimeout(() => {
    b.style.transform = "translateY(-13%)";
  });

  setTimeout(() => {
    b.style.transform = "translateY(-100%)";
  }, 1500);
  
  setTimeout(() => {
    b.parentElement.removeChild(b);
    choicesArr.length = 0;
    for(let c of humanChoice.children) {
      c.style.opacity = "0.7";
      c.style.transform = "scale(1.0)";
      c.style.transition = "all .3s";
    }
  }, 1800);
};

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

getComputerChoice();


/*


when the shoot is clicked matatawag yung function na mag rarandom sa choice ng computer tas ioopacity 1 then scale ang choice tapos tsaka mawawala yung takip


pag same choices tie

rock beats scissors

paper beats rock

scissors beat paper

*/

