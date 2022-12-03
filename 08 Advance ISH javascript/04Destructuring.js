// TOPIC :: Destructure the data in javascript

//#1 Destructuring in Array

const user = ["Chirag", 3, "Admin"];

// var role = user[2];
// var name = user[0];

var [name, couseCount, role] = user;

console.log(role);

//#2 Destructuring in Object
//Name should be same as object proprety name 

const myUser = {
    name: "Chirag",
    CourseCount: 6,
    role: "admin"
};

console.log(myUser.name);

const { name, CourseCount, role } = myUser;

console.log(name);