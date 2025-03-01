const fs = require("fs")
const a = 100

setImmediate(() => console.log("Set Immediate called."), 2000)

fs.readFile("./output.txt", "utf-8", () => {
    console.log("File reading cb")
})

setTimeout(() => console.log("Timer expired."), 0);

function printA() {
    console.log("a = ", a);
}

printA()
console.log("Last line of the code");
 
// output
// a = 100
// Last line of the code
// Timer expired.
// Set Immediate called.
// File reading cb