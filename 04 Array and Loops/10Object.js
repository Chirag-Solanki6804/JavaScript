var user = {
    firstName: "Chirag",
    lastName: "Solanki",
    role: "Admin",
    loginCount: 32,
    facebookSignIn: true
};

console.log(user);
console.table(user);//intersing

console.log(user.firstName);

console.log(user.loginCount);
user.loginCount=46;
console.log(user.loginCount);


var laptop={
    Brand:"Lenovo",
    LaptopType:"Thin & Light",
    SubBrand:"IdeaPad",
    Processor:"11th Gen Intel Core i5-1135G7 Quad-core",
    RAM:"8 GB",
    InternalStorage:"512 GB",
    StorageType: "SSD",
    AntiGlareScreen:true,
    DisplayType:"Full HD"
}

console.table(laptop);
