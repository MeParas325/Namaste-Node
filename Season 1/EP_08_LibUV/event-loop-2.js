const fs = require("fs")
const a = 100


Promise.resolve().then(() => console.log("Promise resolved.")) // 4

setImmediate(() => console.log("Set Immediate called."), 2000) // 6

fs.readFile("./output.txt", "utf-8", () => {
    console.log("File reading cb") // 7
})

process.nextTick(() => console.log("Next tick callled.")); // 3

setTimeout(() => console.log("Timer expired."), 0); // 5

function printA() {
    console.log("a = ", a); // 1
}

printA()
console.log("Last line of the code"); // 2
 
// output
// a = 100
// Last line of the code
// Next tick called.
// Promise resolved.
// Timer expired.
// Set Immediate called.
// File reading cb