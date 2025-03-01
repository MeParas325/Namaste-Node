const fs = require("fs")

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("Timeout expired"), 0)

Promise.resolve().then(() => console.log("Promise resolved."))

fs.readFile("./output.txt", "utf-8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"))

    setImmediate(() => console.log("2nd setImmediate"))

    console.log("File reading cb")
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"))
    console.log("nextTick")
})

console.log("Last line of the code")

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
