let boxes = document.querySelectorAll(".choise");
let my = document.querySelector(".you");
let comp = document.querySelector(".comp");
let mm = document.querySelector(".m");
let cc = document.querySelector(".c");

let myScore = 0;
let compScore = 0;

const choices = ["stone", "paper", "scissor"];

function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
}

function getWinner(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "stone" && computer === "scissor") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissor" && computer === "paper")
  ) {
    return "user";
  }
  return "computer";
}

boxes.forEach((choiceButton) => {
  choiceButton.addEventListener("click", () => {
    let userChoice = choiceButton.innerText.toLowerCase();
    let computerChoice = getComputerChoice();
    let winner = getWinner(userChoice, computerChoice);

    // Display choices
    mm.innerText = `your choice: ${userChoice}`;
    cc.innerText = `computer chose: ${computerChoice}`;

    // Handle result
    if (winner === "user") {
      myScore++;
      alert(`You chose ${userChoice}, Computer chose ${computerChoice} — You win this round!`);
    } else if (winner === "computer") {
      compScore++;
    }

    my.textContent = `YOUR SCORE : ${myScore}`;
    comp.textContent = `COMP SCORE : ${compScore}`;

    console.log(`You: ${userChoice}, Computer: ${computerChoice}, Winner: ${winner}`);
  });
});
