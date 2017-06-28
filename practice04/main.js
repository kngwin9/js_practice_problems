// ## Sort
//
// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.
//
// - Write a function that takes one parameter
// - Parameter 1 - An Array of strings
// - The function should output an array containing all the strings from the input array but in alphabetical order
// - Example:
// -`var myArray = ['mouse', 'cat', 'dog', 'human'];`
// - `sort(myArray);`
// - Output - `['cat', 'dog', 'human', 'mouse']`
// - Try doing this using a **Bubble Sort**, if you are unsure what that is <a href="https://www.google.com" target="_blank">Click Here</a>

const myArray = ['mouse', 'cat', 'dog', 'human'];
let output = [];

// function sort(array) {
//
// }
//
// sort(myArray);
// console.log(output);

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(myArray);
console.log(myArray);