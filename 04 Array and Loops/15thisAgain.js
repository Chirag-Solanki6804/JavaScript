//IMP:::For All regular function Calls,this is points to Window Object

console.log(this);

user = {
    firstName: "Chirag",
    LastName: "Solanki",
    courseCount: 4,
    getCouseCount: function () {
        console.log("Line 10", this);
        function PrintName() {
            console.log("Chirag");
        }
        PrintName();  //this is a regular function Call, so this is points to Window Object
    }
}

user.getCouseCount();  //this is not regular function call

function sayHello() {
    console.log("Hello", this);
}

sayHello(); //this is regular function call