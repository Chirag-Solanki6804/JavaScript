//TOPIC ::: Promise async and await in javascript
//Expore More About async,await and Promise..

const uno = () => {
    return "I am one";
}

// const dos = () => {
//     setTimeout(() => {
//         return "I am Two";
//     }, 5000);
// }

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am Two");
        }, 5000);
    })
}

const tres = () => {
    return "I am Three";
}

const callMe = async () => {
    const valOne = uno();
    console.log(valOne);

    const valTwo = await dos();
    console.log(valTwo);

    const valThree = tres();
    console.log(valThree);
}

callMe();