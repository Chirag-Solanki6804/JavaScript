"use strict";

//*  this in global space

// - this keyword in global space always have value of global object(window)

// - global object value is different based on where you are runing js.

// - if js runing inside browser then this == windows

// - if js runing inside nodejs then this == global

// this keyword behave diffrently in strict and non-strict(default) mode

console.log(this);

//* this inside a function

// value of this insie a function depends on strict/non-strict mode

// strict mode => this == undefined

// non-strict mode => this == window

// why??

function hello() {
  console.log(this);
}

//* this in a strict mode - (this substitution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject ONLY in non strict mode

//* this value depends on how the function is called (window)

// if the function is called without any reference then value will be undefined
hello(); // undefined

// if the function is called with reference then value if this will be the reference object
window.hello(); // global object

//* this inside a object's method

const student = {
  name: "chirag",
  printName: function () {
    console.log(this.name);
    // console.log(this.name + " login to website");
  },
};

const student2 = {
  name: "divyesh",
};

// student2.printName(); // error

//* call apply bind methods (sharing methods)

// call function is used to override the value of this keyword
// call function take value of this keyword as argument

student.printName(); // chirag

// below value of this will be student2
student.printName.call(student2); // divyesh

//* this inside arrow function

const user = {
  name: "mahi",
  printName: () => {
    console.log(this); // global object (because user object is inside global space)
  },
};

user.printName();

// the value of this keyword inside a arrow function will be the inclosing lexical context

// arrow function don't provide there own this binding

//* this inside nested arrow function

const user2 = {
  name: "mahi",
  printInfo: function () {
    // inclosing lexical context
    const printName = () => {
      console.log(this); // user2 (due to inclosing lexical context)
    };
    printName();
  },
};

user2.printInfo();

//* this inside DOM

// this inside a DOM refrence to html element

// {/* <button onclick="alert(this.tagName)"></button> */} // BUTTON

//* this inside OOP (skip for now)
