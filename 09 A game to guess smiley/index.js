const cards = document.querySelectorAll(".card");
console.log(cards);

// variables
var isFliped = false;
var firstCard;
var secondCard;

cards.forEach((card) => { card.addEventListener("click", flip) })

function flip() {
    // console.log("Card Flipped");
    // console.log(this);
    this.classList.add("flip");
    if (!isFliped) {
        isFliped = true;
        firstCard = this;
        console.log(firstCard);
    } else {
        secondCard = this;
        console.log(secondCard);
        checkIt();
    }
}

function checkIt() {
    // console.log("Checking...");
    firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
}

function success() {
    // console.log("Success")
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

function fail() {
    // console.log("Failed");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}

function reset() {
    isFliped = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    });
})();