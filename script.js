// Generate random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const hintBtn = document.getElementById("hintBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

checkBtn.addEventListener("click", () => {
  const guess = parseInt(userInput.value);

  if (!guess || guess < 1 || guess > 10) {
    message.textContent = "Please enter a number between 1 and 10!";
    message.style.color = "orange";
  } else if (guess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    message.style.color = "green";
  } else {
    message.textContent = guess > randomNumber ? "Too high! 📈" : "Too low! 📉";
    message.style.color = "red";
  }
});

hintBtn.addEventListener("click", () => {
  const hintElement = document.createElement("p");
  hintElement.textContent = `Hint: The number is ${randomNumber % 2 === 0 ? "even" : "odd"}`;
  hintElement.id = "hint";
  hintElement.style.color = "blue";

  // Avoid duplicate hints
  if (!document.getElementById("hint")) {
    document.querySelector(".game").appendChild(hintElement);
  }
});

resetBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  userInput.value = "";
  message.textContent = "";
  
  const hint = document.getElementById("hint");
  if (hint) hint.remove();
});
