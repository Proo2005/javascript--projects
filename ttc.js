document.addEventListener('DOMContentLoaded', () => {
  let boxes = document.querySelectorAll('.box');
  let rst = document.querySelector('#reset-game'); 
  let turnO = true;

  let p = document.querySelector('#msg');
  let cm = document.querySelector('#msg-container');

  const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
  ];

  const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
  };

  const enableBoxes = () => {
    boxes.forEach(box => {
      box.disabled = false;
      box.innerText = "";
    });
  };

  const resetGame = () => {
    turnO = true;
    enableBoxes();
    cm.classList.add('hide');
  };

  const showWinner = (winner) => {
    p.innerText = `Congratulations, winner is ${winner}`;
    cm.classList.remove("hide");
    disableBoxes();
  };

  const checkWinner = () => {
    for (let pattern of winningCombinations) {
      let p1 = boxes[pattern[0]].innerText.trim();
      let p2 = boxes[pattern[1]].innerText.trim();
      let p3 = boxes[pattern[2]].innerText.trim();

      if (p1 !== '' && p1 === p2 && p2 === p3) {
        console.log("Winner:", p1);
        showWinner(p1);
        return;
      }
    }
  };

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        box.innerText = 'O';
        turnO = false;
      } else {
        box.innerText = 'X';
        turnO = true;
      }
      box.disabled = true;
      checkWinner();
    });
  });

  rst.addEventListener('click', resetGame);
});
