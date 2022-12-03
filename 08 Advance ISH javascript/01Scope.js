//Topic :: Solution of Scope problem in javascript?? ==>let Keyword

//Diffrence BetWeen let VS var vs Const

//Remember 3 LINES:

// 1 : let Keyword have Block Scope 

{
    let name = "chirag";
    // console.log(name);
}

// console.log(name);
// ReferenceError: name is not defined

// 2 : var Keyword have Functional Scope

function abc() {
    var name = "chirag solanki";
    {
        console.log("Line 21 :" + name);
    }
    console.log("Line 23 :" + name);
}
// console.log("Line 25 :" + name);  
//ReferenceError: name is not defined

abc();


// 3 : const is like final Keyword in java

const Fullname = "Chirag Solanki";

// Fullname = "Hiral Vaniya";
//TypeError: Assignment to constant variable.

console.log(Fullname);

