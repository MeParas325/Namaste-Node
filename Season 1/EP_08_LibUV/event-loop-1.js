const fs = require("fs")
const a = 100

setImmediate(() => console.log("Set Immediate called."), 2000) // 4

fs.readFile("./output.txt", "utf-8", () => {
    console.log("File reading cb") // 5
})

setTimeout(() => console.log("Timer expired."), 0); // 3

function printA() {
    console.log("a = ", a); // 1
}

printA()
console.log("Last line of the code"); // 2
 
// output
// a = 100
// Last line of the code
// Timer expired.
// Set Immediate called.
// File reading cb