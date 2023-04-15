/*
What you Learn ? :
1. What is Higher Order Function (HOF)
2. Callback, Returning function
3. Setting time (Setinterval, SetTimeout)
*/

const powerTwo = (n) => {
    return n ** 2;
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n;
}

// console.log(powerCube(powerTwo, 3));

function sayHello() {
    return () => {
        console.log("Hello Chirag");
    }
}

let guessValue = sayHello();

// console.log(guessValue);

// guessValue();


const higherOrder = (x) => {
    const oneFun = (y) => {
        const twoFun = (z) => {
            return x + y + z;
        }
        return twoFun;
    }
    return oneFun;
}

// console.log(higherOrder(10)(20)(30));


const myNums = [2, 3, 4, 5, 6];

const sumArray = (arr) => {
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}

// console.log(sumArray(myNums));


function sayNamaste() {
    console.log("Namaste from India", Math.random());
}

// setInterval(sayNamaste, 1000);

// setTimeout(sayNamaste, 5000);





