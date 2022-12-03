var testArry = [2, 4, 8, 7, 5, 8, 9, 5, 6, 10];


// Fill Method syntax
// ArrayName.fill("value",start,end);
// start value is include in above example
// end value is not include 


// console.log(testArry.fill("Hiral"));
// console.log(testArry.fill("Hiral",3));
// console.log(testArry.fill("Hiral", 3, 6));

//filter method

const myNumber = [23, 24, 25, 55, 24, 56, 98, 15];

const result = myNumber.filter((num) => (num < 30));

// console.log(result);

//Slice Method in javascript

// Syntax
// ArrayName.slice(start,end);
// start value is include in above example
// end value is not include 

const user = ["chirag", "hiral", "abhi", "anjali"];

const result2 = user.slice(0, 2);
// console.log(result2);

const result3 = user.slice(1);
// console.log(result3);


//splice Method in javascript

// Syntax
// ArrayName.splice(start,deletingCount,"valueTOInsert");
// start value is include in above example
//deletingCount Start from start value 

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months);

