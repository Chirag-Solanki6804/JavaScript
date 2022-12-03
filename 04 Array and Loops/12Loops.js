const names = [
    "chirag",
    "Asmita",
    "Anjali",
    "abhi",
    "Dhaval",
    2004,
    "Nehal",
    "ravi",
    "Priyanka",
    2007,
    "manshi",
    "Khusali",
    "Mahi"
]

for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== "string") continue;
    console.log(names[i]);
}


let x = 0;
while (x < names.length) {
    console.log(names[x]);
    x++;
}


let y = 11;
do {
    console.log(y);
    y++;
} while (y < 10) 