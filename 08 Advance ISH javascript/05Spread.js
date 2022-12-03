// TOPIC :: Spread and REST operators in Javascript

var maxValue = Math.max(5, 8, 1, 6, 9, 7, 3, 2);
console.log(maxValue);

var myObj = {};

//first para. is need to be an Empty Object 
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { x: 7, y: 8, z: 9 });
console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

myArray = [3, 6];
console.log(sumOne(...myArray)); //Spread operators

function sumTwo(a, b, ...args) { // REST operators
    let multi = a * b;
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return { multi: multi, sum: sum };
}

console.log(sumTwo(1, 2, 3, 4, 5, 6)); //first two args multipication and rest of all sum