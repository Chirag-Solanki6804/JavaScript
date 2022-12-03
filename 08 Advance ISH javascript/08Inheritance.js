// TOPIC :: Inheritance in javascript

//Super Keyword is used to pass value to above class ..expore more about super
//static keyword is used for privacy of class..you can't inherit static method or property from the class

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    TotalCourse = 0;

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

    static myPrivateMethod() {
        return "this is my Private method";
    }

    login() {
        return "You Are logged In";
    }
}

class SubAdmin extends User {
    constructor(name, email) {
        super(name, email);
    }
    getSubAdminInfo() {
        return "Hello, I'm SubAdmin";
    }

    login() {
        return "login In for Admin Only";  //this is called method overrriding
    }
}

const tom = new SubAdmin("Tom", "tom@123jerry.com");

console.log(tom.getSubAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
// console.log(tom.myPrivateMethod()); //you can't get this because of static keyword

console.log(tom.login()); 