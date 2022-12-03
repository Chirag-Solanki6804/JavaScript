//TOPIC ::: How to Handle API in javascript

fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })
    .then((Data) => {
        console.log(Data.value);
    })
    .catch();