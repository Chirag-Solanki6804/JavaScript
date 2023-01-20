// TOPIC ::: Event loop _ Will javascript wait??

const uno = () => {
    setTimeout(() => {
        console.log("Wait code for 5 second");
    }, 5000);
    console.log("I am one");
}

const dos = () => {
    console.log("I am Two");
}

const tres = () => {
    console.log("I am Three");
}

uno();
dos();
tres();
