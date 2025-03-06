const fs = require("fs");

setImmediate(() => console.log("setImmediate 1")); // 8

setTimeout(() => {
    console.log("Timeout 1"); // 5
    
    setImmediate(() => console.log("Nested setImmediate inside Timeout")); // 9
    
    process.nextTick(() => console.log("nextTick inside Timeout")); // 6
    
    Promise.resolve().then(() => console.log("Promise inside Timeout")); // 7
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1"); // 4
    
    setTimeout(() => console.log("setTimeout inside Promise"), 0);
});

fs.writeFile("temp.txt", "Hello, world!", () => {
    console.log("File write callback"); // 10

    setTimeout(() => console.log("Timeout inside fs.writeFile"), 0); // 13

    setImmediate(() => console.log("setImmediate inside fs.writeFile")); // 12

    process.nextTick(() => console.log("nextTick inside fs.writeFile")); // 11
});

process.nextTick(() => {
    console.log("nextTick 1"); // 2

    process.nextTick(() => console.log("Inner nextTick inside nextTick")); // 3
});

console.log("Last line"); // 1

// Output
// Last line
// nextTick 1
// inner nextTick inside nextTick
// Promise 1
// Timeout 1
// nextTick inside Timeout
// Promise inside Timeout
// setImmediate 1
// Nested setImmediate inside Timeout
// setTimeout inside Promise
// File write callback
// nextTick inside fs.writeFile
// setImmediate inside fs.writeFile
// Timeout inside fs.writeFile
