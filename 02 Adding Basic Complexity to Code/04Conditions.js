var temp=35;

if(temp<30){
    console.log("its modarate outside");
}else{
    console.log("its very Hot OutSide");
}

//logical oprators

var logInEmail=true;
var google=false;
var facbook=false;

console.log(typeof google); //it will return the type of google var

if(logInEmail||google||facbook){
    console.log("logged succses");
}


//ternary oprators

suparman=false;

suparman?console.log("signOUt Btn"):console.log("Login Btn");


//swich Case

//layers of and any App

// create App with following rules
// admin-gets full access
// subadmin-gets access to create/delete the course
// testPrep-get access to create/delete the tests
// user-access to consume content


var user;

switch (user) {
    case "admin":
        console.log("gets full access")
        break;

    case "subadmin":
        console.log("gets access to create/delete the course")
        break;
    
    case "testPrep":
        console.log("get access to create/delete the tests")
        break;
    
    case "user":
        console.log("access to consume content");
        break;

    default:console.log("trial user");
        break;
}