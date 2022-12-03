// TOPIC :: Closure in javascript

// function init() {
//     var firstName = "Chirag Solanki";
//     console.log("I'm Init")
//     function sayfirstName() {
//         console.log(firstName);
//     }
//     return sayfirstName;
// }

// var value=init();
// value();


function doAddition(x) {
    return function (y) {
        return x + y;
    }
}

var add7 = doAddition(7);
console.log(add7(2));

console.log(doAddition(6)(9));

// doAddition()()() //its Know as curring