// ## Total Reverse
//
// Build a function that takes in an array and reverses it
//
// - Write a function that takes one parameter
// - Parameter 1 - An array of anything
// - The function should output an array that is in reverse order from the input array
// - Example:
// - `var myArray = ['hello', 45, 'Bob', 'what', '23'];`
// - `arrayReverse(myArray);`
// - Output - `['23', 'what', 'Bob', 45, 'hello']`
// - Avoid using pre-built functions that do something similar


const myArray = ['hello', 45, 'Bob', 'what', '23'];
let output = [];

const arrayReverse = (array) => {
    let arr = array;
    for (let i = 0; i < arr.length; i++){
        output.push(arr[i]);
    }
};

arrayReverse(myArray);
console.log(output);