//TOPIC 1 ::: Classes and module exports in javascript
// import User from './06Classjs'; 

const User = require("./06Classjs.js");

const chirag = new User("Chirag", "sc494802@gmail.com");

// console.log(chirag.getInfo());

chirag.enrollCourse("Pro Backend Developer");
chirag.enrollCourse("Angular Bootcamp 2023");

// console.log(chirag.getCourseList());

let course = chirag.getCourseList();

course.forEach((c) => console.log(c));

// console.log(chirag.getTOtalCourse());






