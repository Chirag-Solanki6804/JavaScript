var user = {
    firstName: "Chirag",
    lastName: "Solanki",
    role: "Admin",
    loginCount: 32,
    facebookSignIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info: function () {
        return `
        ${this.firstName} ${this.lastName} is a ${this.role}. 
        he has login to website ${this.loginCount} Times.
        he is anrolled in this couses:${this.courseList}`
    }
};

console.log(user.getCourseCount());

user.buyCourse("Pro Backend Devoper");
user.buyCourse("ReactJs Bootcamp");
console.log(user.getCourseCount());

console.log(user)

console.log(user.info())