const counterValue = document.getElementById("counter-value");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const resetButton = document.getElementById("reset");

let counter = localStorage.getItem("counter");

if (counter === null) {
  counter = 0; // Default value
} else {
  counter = parseInt(counter); // Convert to number from string
}

counterValue.textContent = counter;

function updateLocalStorage() {
  localStorage.setItem("counter", counter);
}

addButton.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
  updateLocalStorage();
});

subtractButton.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
  updateLocalStorage();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
  updateLocalStorage();
});
