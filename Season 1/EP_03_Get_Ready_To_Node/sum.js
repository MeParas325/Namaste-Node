console.log("Before calculate called");

var x = "hello world";
function calculate(a, b) {

    return a + b;
}

console.log("After calculate called");

module.exports = {calculate, x};

console.log("End of sum.js");