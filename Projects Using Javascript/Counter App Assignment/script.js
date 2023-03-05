const counter = document.getElementById("counter");

const incrementButton = document.getElementById("increment");

const decrementButton = document.getElementById("decrement");

const resetButton = document.getElementById("reset");

let count = 0;

incrementButton.addEventListener("click", (e) => {
    count = count + 1;
    counter.innerText = count;
});

decrementButton.addEventListener("click", (e) => {
    count = count - 1;
    counter.innerText = count;
});

resetButton.addEventListener("click", (e) => {
    counter.innerText = 0;
});