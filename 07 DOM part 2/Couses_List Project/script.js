// Project
// Step:1 Get to know node Elements in Javascript
// step:2 Generating elements and Text node in DOM

const courses = [
    {
        name: "Complete ReactJs Course",
        price: 2.5
    },
    {
        name: "Complete Angular Course",
        price: 2.1
    },
    {
        name: "Complete MERN Course",
        price: 4.5
    },
    {
        name: "Complete Java Course",
        price: 3.3
    }
];

function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    })
};

// generateLIST();

window.addEventListener("load", generateLIST);

const butLtoH = document.querySelector(".sort-btn");

butLtoH.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateLIST();
})


const btnHtoL = document.querySelector(".btn-primary");

btnHtoL.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price).reverse();
    generateLIST();
})