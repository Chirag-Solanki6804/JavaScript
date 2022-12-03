// topic ::: Maps in javascript
// HOMW_WORK :: Expore All Map methods


var myMap = new Map();

myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");
myMap.set(5, "five");

// console.table(myMap);
console.log(myMap);

for (let key of myMap.keys()) {
    console.log(`key is :${key}`);
}

for (let value of myMap.values()) {
    console.log(`Value is :${value}`);
}

//FOR OF LOOP will give key first and value second

for (let [key, value] of myMap) {
    console.log(`Key is :${key} and value is :${value}`);
}

//FOREACH LOOP will give value first and key second
myMap.forEach((value, key) => {
    console.log(`Key is :${key} and value is :${value}`)
})

myMap.delete(5);

console.log(myMap);