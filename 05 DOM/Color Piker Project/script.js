// GOAL:36.How to Get Computed properties in javascript?
// GOAL:37.Event listener in javascript.
// MOST IMP:EXPORE ALL EVENT IN DOCUMENTS

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

var myMusic = document.getElementById("music");
// console.log(window.getComputedStyle(orange).backgroundColor);

const BgColor = (SelectedElem) => {
    return window.getComputedStyle(SelectedElem).backgroundColor;
};

// console.log(BgColor(red));

// color = BgColor(red);

// red.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = Color;
// })


const colorMagic = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.backgroundColor = color;
        myMusic.play();
    })
}


colorMagic(red, BgColor(red));
colorMagic(cyan, BgColor(cyan));
colorMagic(violet, BgColor(violet));
colorMagic(orange, BgColor(orange));
colorMagic(pink, BgColor(pink));