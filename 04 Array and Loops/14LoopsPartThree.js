states = ["Gujarat", "Assam", "Guvahati", "Mumbai", "Delhi", "Bihar"];

// forOF Loop is Used For Arrays

for (const s of states) {
    console.log(s);
}

// forIN Loop is Used For Object

const symbol = {
    yt: "YouTube",
    fb: "FacBook",
    LCO: "Learn Code Online",
    CRS: "Chirag Ramesh Solanki"
};

for (const s in symbol) {
    console.log(`The Key is: ${s} and The Value is: ${symbol[s]}`);
}