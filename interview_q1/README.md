Implement a function that accepts a word as a string and returns the word 
reversed as a string. Example: "Word" should return "droW" */

function reversed(str){
  var input = str.split('').reverse().join('');
  return input
}

Implement a function that accepts a sentence as a string and returns the sentence 
with the same word order but the individual words themselves are reversed. 
Example: "Hello World" should return "olleH dlroW"

const reversedWord = str => str.split(' ').map(item => reversed(item)).join(' ');

// console.log(reversedWord("Hello World"));

Implement a function that accepts 2 arguments.  The 1st arg is an integer and the 2nd 
is a list of unsorted integers.  The function searches through the list and returns the 
largest integer in the list that is less than the 1st arg. Example: 5, [2, 7, 4, 9] 
should return 4. */


const localMax = (int, arr) => {
  let lessThen = arr.filter((item) => item < int) 
  let output = Math.max(...lessThen);
  return output
}

console.log(localMax(5, [2, 7, 4, 9]));