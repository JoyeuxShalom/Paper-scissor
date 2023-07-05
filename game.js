window.onload = beginningAnimation();
let computerSelection;
let playerSelection;
let computerScore;
let playerScore;
let buttons = document.querySelectorAll(".button");
const body = document.querySelectorAll("body");
const main = document.querySelectorAll("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
const desc = document.querySelector("#desc3");
const container = document.querySelector("#results-container");

body.addEventListener("click", skipAnime());
body.addEventListener("keyword", skipAnime());

function skipAnime() {
    const span = document.querySelectorAll("span");
    span.forEach((span) => span.classList.add("skip"));
}

function beginningAnimation() {
    fadeIn();
    const anime1 = document.querySelector("#anime1");
    let anime1Span = anime1.querySelectorAll("span");
    anime1Span = Array.from(anime1Span);

    const anime2 = document.querySelector("#anime2");
    const anime3 = document.querySelector("#anime3");

    anime1Span[anime1Span.length - 1].ontransitionend = () => {
        anime1.classList.add("fade-out");
        anime1.addEventListener("animationend", () => {
            anime1.classList.add("disappear");
            anime1.classList.remove("animate");
            anime2.classList.remove("disappear");
            anime2.classList.add("animate");
          fadeIn();
          
          let anime2Span = anime2.querySelectorAll("span");
      anime2Span = Array.from(anime2Span);

      anime2Span[anime2Span.length - 1].ontransitionend = () => {
        anime2.classList.add("fade-out");
        anime2.addEventListener("animationend", () => {
          anime2.classList.add("disappear");
          anime2.classList.remove("animate");
          anime3.classList.remove("disappear");
          anime3.classList.add("animate");
          fadeIn();

          let anime3Span = anime3.querySelectorAll("span");
          anime3Span = Array.from(anime3Span);

          anime3Span[anime3Span.length - 1].ontransitionend = () => {
            const cta = document.querySelector("#cta");

            cta.classList.add("drop-down");

            cta.addEventListener("animationend", () => {
              const gameCtn = document.querySelector("#game-container");

              setTimeout(function () {
                gameCtn.classList.add("fade-in");
        }, 300);
    });
    };
});
      };
    });
};
}
function fadeIn() {
    let text = document.querySelector(".animate");

  let strText = text.textContent;
  let splitText = strText.split("");
  text.textContent = "";
  //append span tags to each character in the string
  for (i = 0; i < splitText.length; i++) {
    text.innerHTML += `<span>${splitText[i]}</span>`;
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    //stops the function from running once the end of the string has been reached
    if (char === splitText.length) {
      complete();
      return;
    }
  }
  function complete() {
    clearInterval(timer);
    timer = null;
  }
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
  
      playRound(playerSelection, computerSelection);
  
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }
    });
  });

  const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    displayResults("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore = ++computerScore;
    keepCpuScore();
    if (computerScore === 1) {
      displayResults(
        `Oh no! You lost.
        ${capitalize(computerSelection)} beats ${playerSelection}.`
      );
    } else if (computerScore === 2) {
      displayResults(
        `Arghh. ${capitalize(
          computerSelection
        )} beats ${playerSelection}. Give it another shot!`
      );
    } else if (computerScore === 2) {
        displayResults(
          `Arghh. ${capitalize(
            computerSelection
          )} beats ${playerSelection}. Give it another shot!`
        );
      } else if (computerScore === 3) {
        displayResults(
          `${capitalize(
            computerSelection
          )} beats ${playerSelection}. It's ok. You got this!!`
        );
      } else if (computerScore === 4) {
        displayResults(
          `Oh no. It's match point!! ${capitalize(
            computerSelection
          )} beats ${playerSelection}. Don't let us down!`
        );
      } else {
        displayResults(`${computerSelection} beats ${playerSelection}`);
      }
    } else {
      playerScore = ++playerScore;
      keepPlayerScore();
      if (playerScore === 1) {
        displayResults(
          `Lets go!!! You won.
          ${capitalize(playerSelection)} beats ${computerSelection}.`
        );
      } else if (playerScore === 2) {
        displayResults(
          `You're pretty good at this. ${capitalize(
            playerSelection
          )} beats ${computerSelection}.`
        );
      } else if (playerScore === 3) {
        displayResults(
          `${capitalize(
            playerSelection
          )} beats ${computerSelection}! Has mankind found its savior??`
        );
      } else if (playerScore === 4) {
        displayResults(
          `${capitalize(
            playerSelection
          )} beats ${computerSelection}. One more and you're a hero!`
        );
      } else {
        displayResults(`${playerSelection} beats ${computerSelection}`);
      }
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
  container.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
  container.textContent = str;
}
function declareWinner() {
    rplContent();
    if (playerScore > computerScore) {
      endDesc.textContent = "You win! Mankind lives another day!!";
      returnMainBtn.innerText = "Play Again";
    } else {
      endDesc.textContent = "You lost...who will save mankind now?";
      returnMainBtn.innerText = "Try Again?";
    }
    fadeIn();

    let endDescSpan = endDesc.querySelectorAll("span");
    endDescSpan = Array.from(endDescSpan);
  
    endDescSpan[endDescSpan.length - 1].ontransitionend = () => {
      returnMainBtn.classList.add("fade-in");
    };
}

function rplContent() {
    main.classList.add("disappear");
    endAlrt.classList.remove("disappear");
    desc.classList.remove("animate");
    endDesc.classList.add("animate");
  
    returnMainBtn.addEventListener("click", () => {
      main.classList.remove("disappear");
      endAlrt.classList.add("disappear");
      desc.classList.add("animate");
      returnMainBtn.classList.remove("fade-in");
      resetGame();
    });
  }

  function resetGame() {
    fadeIn();
    container.textContent = "";
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepCpuScore();
  }

  function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
  
    playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
   playerScoreBox.textContent = playerScore;
}

function keepCpuScore() {
    let computerScoreBox = document.querySelector("#computer-score");
    computerScoreBox.animate([{opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        delay: 0,
        easing: "ease-out",
    });
    computerScoreBox.textContent = computerScore;
}
