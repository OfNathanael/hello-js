//Modules

//math.js exports a function that adds two numbers together. This function can be imported and used in other files to perform addition operations.
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers.'); //Error handling to ensure that the inputs are numbers. If not, an error is thrown with a descriptive message.
    }
    return a + b; //Returns the sum of a and b.
}

function subtract(a, b) {
    return a - b; //Returns the difference of a and b.
}

module.exports = { add, subtract }; //Exports the add and subtract functions as an object, allowing them to be imported and used in other files.