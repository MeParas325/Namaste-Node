const crypto = require("node:crypto");

console.log("Hello world");

var a = 1078698;
var b = 20986;

// this crypto is also managed to LibUV and the call back of this crypto is also registered by LibUV
// pbkdf2 => Password Base Key Derivative Function
// pbkdf2sync => synchronous


setTimeout(() => {
    console.log("call me right now !!!");
}, 0);

setTimeout(() => {
    console.log("Call after 3 seconds");
}, 3000);

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");

function multiply(x, y) {

    const result = x * y;
    return result;

}

console.log(multiply(a, b));

