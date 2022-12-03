//scope Chaning is just like ICECREAM EXAMPLE

var name = "chirag";
console.log("Name At Line 4: "+name);

function sayName(){
    // var name="MR. C"
    console.log("Name At Line 8: "+name);
    sayNameTwo();
    function sayNameTwo(){
        // var name="MR. CS"
        console.log("Name At Line 11: "+name);
    }
}
sayName();