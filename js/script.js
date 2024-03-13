let round = "X";
let juniors = document.querySelectorAll(".junior");

juniors.forEach((e) => {
  e.addEventListener("click", () => {
    switchRound();
    e.textContent = round;
  });
});

function switchRound() {
  round = round == "X" ? "O" : "X";
}
