const fs = require("fs");

console.log("Start"); // 1

setTimeout(() => {
    console.log("setTimeout 1"); // 7

    setImmediate(() => console.log("setImmediate inside setTimeout")); // 12
    
    process.nextTick(() => console.log("nextTick inside setTimeout")); // 8
    
    Promise.resolve().then(() => console.log("Promise inside setTimeout")); // 9
}, 0);

setImmediate(() => console.log("setImmediate 1")); // 11

Promise.resolve().then(() => {
    console.log("Promise 1"); // 5
    
    process.nextTick(() => console.log("nextTick inside Promise")); // 6
    
    setTimeout(() => {
        console.log("setTimeout inside Promise");
        process.nextTick(() => console.log("Next Tick inside setTimeout inside Promise"));
        Promise.resolve().then(() => {
            setTimeout(() => {
                console.log("setTimeout inside Promise inside setTimeout inside.")
            }, 0)
        })
    }, 0); // 10
});

process.nextTick(() => {
    console.log("nextTick 1"); // 3
    
    process.nextTick(() => console.log("Inner nextTick inside nextTick")); // 4
});

fs.readFile(__filename, () => {
    console.log("File read callback"); // 13

    setTimeout(() => console.log("setTimeout inside readFile"), 0); // 17
    
    setImmediate(() => console.log("setImmediate inside readFile")); // 16
    
    process.nextTick(() => console.log("nextTick inside readFile")); // 14
    
    Promise.resolve().then(() => console.log("Promise inside readFile")); // 15
}); 

console.log("End"); // 2
