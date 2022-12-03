// 42.Objects from MDN docs
//READ:READ:READ DOUCMENTION 

const User = {
    name: "",
    getUserName: function () {
        console.log(`User Name is : ${this.name}`);
    }
};

var chirag = Object.create(User);

console.log(chirag);  //{}

console.log(chirag.name); //empty
chirag.getUserName() //undefined

chirag.name = "chirag Solanki";
console.log(chirag.name);  //chirag Solanki
chirag.getUserName() //User Name is :chirag Solanki