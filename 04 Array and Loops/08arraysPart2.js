//ARROW FUNCTION AND CALLBACK FUNCTION

var isEven = (element) => {
    // if(element%2===0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}

// console.log(isEven(5));

//Different Technicnic two Write Code

var result = ["2", "4", "7", "8"].every(isEven);
// console.log(result);

var result = ["2", "4", "6", "8"].every((elem) => {
    return elem % 2 === 0;
});
// console.log(result);

var result = ["2", "4", "6", "8"].every((elem) => elem % 2 === 0);
// console.log(result);

var result = ["2", "4", "6", "8"].every((elem) => (elem % 2 === 0));
// console.log(result);


