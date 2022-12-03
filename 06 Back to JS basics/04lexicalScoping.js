//VERY EASY ::: JUST GO THROW DOCX ONE TIME
//TOPIC:Lexical scoping in javascript

function init() {
    var firstName = "Chirag Solanki";
    function sayfirstName() {
        console.log(firstName);
    }
    sayfirstName();
}

init();

// console.log(firstName); //Error : Scoping concept