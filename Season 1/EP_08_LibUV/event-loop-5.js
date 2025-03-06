const fs = require("fs");

setTimeout(() => console.log("setTimeout 1"), 0); // 6
setImmediate(() => console.log("setImmediate 1")); // 7

fs.readFile(__filename, () => {
    console.log("File read callback"); // 9

    setTimeout(() => console.log("setTimeout inside readFile"), 0); // 13
    setImmediate(() => console.log("setImmediate inside readFile")); // 12

    process.nextTick(() => console.log("nextTick inside readFile")); // 10

    Promise.resolve().then(() => console.log("Promise inside readFile")); // 11
});

Promise.resolve().then(() => {
    console.log("Promise 1"); // 4

    process.nextTick(() => console.log("nextTick inside Promise")); // 5

    setTimeout(() => console.log("setTimeout inside Promise"), 0); // 8
});

process.nextTick(() => {
    console.log("nextTick 1"); // 2

    process.nextTick(() => console.log("Inner nextTick inside nextTick")); // 3
});

console.log("Last line"); // 1

// Output
// Last line
// nextTick 1
// Inner nextTick inside nextTick
// Promise 1
// nextTick inside Promise
// setTimeout 1
// setImmediate 1
// setTimeout inside promise
// File read callback
// nextTick inside readFile
// Promise inside readFile
// setImmediate inside readFile
// setTimeout inside readFile