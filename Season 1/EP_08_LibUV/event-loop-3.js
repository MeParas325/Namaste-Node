const fs = require("fs")

setImmediate(() => console.log("setImmediate")) // 6

setTimeout(() => console.log("Timeout expired"), 0) // 5

Promise.resolve().then(() => console.log("Promise resolved.")) // 4

fs.readFile("./output.txt", "utf-8", () => {
    setTimeout(() => console.log("2nd timer"), 0); // 10

    process.nextTick(() => console.log("2nd nextTick")) // 8

    setImmediate(() => console.log("2nd setImmediate")) // 9

    console.log("File reading cb") // 7
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick")) // 3
    console.log("nextTick") // 2
})

console.log("Last line of the code") // 1

// output
// Last line of the code
// nextTick
// inner nextTick
// Promise resolved.
// Timeout expired
// setImmediate
// File reading cb
// 2nd nextTick
// 2nd setImmediate
// 2nd Timer
