// ## One to Multi
//
// Build a function that sorts an array into a multidimensional array grouped by data type
//
// - Write a function that takes one parameter
// - Parameter 1 - An array of anything
// - The function should output a multidimensional array grouped by data type
// - Example:
// - `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
// - `groupArray(myArray);`
// - Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

const myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
let output = [];

function groupArray(array) {
    let index_string = [];
    let index_number = [];
    let index_boolean =[];
    for (let i = 0; i <= array.length-1; i++) {
        if (typeof array[i] === typeof "what") {
            index_string.push(array[i]);
        }
        else if (typeof array[i] === typeof 34) {
            index_number.push(array[i]);
        }
        else if (typeof array[i] === typeof true) {
            index_boolean.push(array[i]);
        }
    }
    output.push(index_string, index_number, index_boolean);
}

groupArray(myArray);
console.log(output);