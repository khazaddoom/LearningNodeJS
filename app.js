// const timeFinder = require('./logger')

let data = [
    10, 12, 13, 14
];

const indexes = data.map((dataitem) => dataitem);


data.pop();

// Expecting a completely different list
console.log("Source: " + data)
console.log("Target: " + indexes)