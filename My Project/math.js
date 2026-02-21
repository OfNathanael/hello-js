//Modules

//math.js exports a function that adds two numbers together. This function can be imported and used in other files to perform addition operations.
//export function add(a, b) {
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers.'); //Error handling to ensure that the inputs are numbers. If not, an error is thrown with a descriptive message.
    }
    return a + b; //Returns the sum of a and b.
}

//export function subtract(a, b) {
function subtract(a, b) {
    return a - b; //Returns the difference of a and b.
}

//This will not be used if we are using the import/export function.
module.exports = { add, subtract }; //Exports the add and subtract functions as an object, allowing them to be imported and used in other files.