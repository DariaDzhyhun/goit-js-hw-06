const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementClick);
function onDecrementClick() {
  counterValue -= 1;
  span.textContent = counterValue;
}
incrementBtn.addEventListener("click", onIncrementClick);
function onIncrementClick() {
  counterValue += 1;
  span.textContent = counterValue;
}
