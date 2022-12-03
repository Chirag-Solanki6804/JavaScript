//GOAL:38.New keyword in Javascript

var User = function (firstName, CouseCount) {
    this.firstName = firstName;
    this.CouseCount = CouseCount;
    this.getCouseCount = function () {
        console.log(`Couse Count is : ${CouseCount}`);
    }
}

// 41.Better code with object chain in javascript
//TMP:EXPORE PROTO OBJECT IN CONSOLE
User.hasOwnProperty("firstName");  //if user has the property called firstName then it will return Boolean value true
User.hasOwnProperty("lastName");  //if user does not has the property called lastName then it will return Boolean value False

//39.What is proto in javascript //IMP :For framework like React & Angular

//when you want to add anything into User like getFirstName() you can inject with out touching User Like Using Prototype

User.prototype.getFirstName = function () {
    console.log(`First Name is :${this.firstName}`);
}

//when you use a new keyword means this is not a regular function call 
var chirag = new User("chirag", 12);
chirag.getCouseCount();
if (User.hasOwnProperty("firstName")) {
    chirag.getFirstName(); //we have add this method to User Using prototype 
}
// console.log(chirag);

var hiral = new User("hiral", 10);
hiral.getCouseCount();
hiral.getFirstName(); //we have add this method to User Using prototype 
// console.log(hiral);



