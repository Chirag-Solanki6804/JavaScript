// Topic::: Borrow a method using bind 

const chirag = {
    firstName: "Chirag",
    lastName: "Solanki",
    role: "Admin",
    couseCount: 4,
    getInfo: function () {
        console.log(`
        First Name is :${this.firstName}
        last Name is  :${this.lastName} 
        his role is   :${this.role}
        hi is studying ${this.couseCount} courses
        `);
    }
}

// getInfo //refrence of method
//getInfo() //calling method

chirag.getInfo();


const hiral = {
    firstName: "hiral",
    lastName: "Vaniya",
    role: "Sub-Admin",
    couseCount: 7,
}

// what is we want to accesse the method getInfo for hiral object?

var hiralInfo = chirag.getInfo.bind(hiral);  //bind method wiil return refrence of object
hiralInfo();

chirag.getInfo.call(hiral);  //call method directly call the method