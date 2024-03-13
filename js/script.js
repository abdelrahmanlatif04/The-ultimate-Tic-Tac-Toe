let round = "X";
let juniors = document.querySelectorAll(".junior");

juniors.forEach((e) => {
  e.addEventListener("click", () => {
    if(!e.textContent){
    e.textContent = round;
    switchRound();
  }
  });
});

function switchRound() {
  round = round == "X" ? "O" : "X";
}
