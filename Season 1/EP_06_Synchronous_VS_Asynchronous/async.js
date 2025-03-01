const fs = require("fs");
const https = require("https");

var a = 1078986;
var b = 20986;

console.log("Hello World.");

// this is asynchronous and javascript cannot handle the asynchronous so we will use the super power of NodeJS which is LibUV and LibUV takes this call back function and stores it with itself.
https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data successfully.");

    // Consume the response data to ensure the connection is closed
    res.on("data", (chunk) => {
        console.log("Chunk is: ", chunk);
    });
});

// this will also be given to LibUV
setTimeout(() => {
    console.log("Set time out called after 5 seconds.");
}, 5000);

console.log("Thread blocked.");

// this will also go to LibUV
fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File data: ", data);
});

function multiply(x, y) {
    const result = x * y;
    return result;
}

console.log(multiply(a, b));