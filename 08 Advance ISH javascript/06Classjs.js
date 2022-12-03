//TOPIC 1 ::: Classes and module exports in javascript
//TOPIC 2 ::: Private props getters and setters in javascript

//to declare Private props in javascript use # 

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo() {
        return { Name: this.name, Email: this.email }
    }

    enrollCourse(Coursename) {
        this.#courseList.push(Coursename);
        this.TotalCourse++;
    }

    getCourseList() {
        return this.#courseList;
    }

    TotalCourse = 0;
    getTOtalCourse() {
        return this.TotalCourse;
    }
}

module.exports = User;

//New User Object

const arjun = new User("Arjun", "abcd123@gmail.com");

console.log(arjun.getInfo());
arjun.enrollCourse("Python course");
arjun.enrollCourse("Flutter Bootcamp");   //here enrollCourse is setters method

console.log(arjun.getCourseList());    //here getCourseList is getters method 
console.log(arjun.courseList);        //here courseList is private so,we can not access direcly       
console.log(arjun.TotalCourse);       //here TotalCourse is not Private so , we can direcly access it!!

//getters and setters methods are Used when the objects property are private
//in javascript we use # to declare any datatyape private