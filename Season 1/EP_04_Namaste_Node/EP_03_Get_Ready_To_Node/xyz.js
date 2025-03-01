// IIFE => Immediately Invoked Function Expression

(function (module, require) {

    // require(//path)
    function calculateSum(a, b) {

        const result = a + b;
        console.log(result);

    }

    module.exports = { calculateSum };
})(module);