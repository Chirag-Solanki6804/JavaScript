// IMP:
// Function declarations are Scanned and made Available
// Variable declarations are Scanned and made undefined

// Ex-1
tipper("20");
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// Ex-2
// bigTipprt("95");
var bigTipprt = function (a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// Ex-3
console.log(name);
var name = "chirag";

// Ex-4
console.log(surname);
var surname = "solanki";

function printSurname() {
    var surname = "vaniya"
    console.log(surname);
}

printSurname();

console.log(surname);
