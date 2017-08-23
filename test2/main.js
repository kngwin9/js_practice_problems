// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Examples:
//
//     Input	Output
// "test"	"es"
// "testing"	"t"
// "middle"	"dd"
// "A"	"A"

// Test Results:
//     Log
// Result for 'test' : es
// Result for 'testing' : t
// Result for 'middle' : dd
// Result for 'A' : A
// Challenge
// should handle a single character
// expected undefined to equal 'A'
// should handle two characters
// expected undefined to equal 'ab'
// should handle long even strings
// expected undefined to equal 'dd'
// should handle long odd strings
// expected undefined to equal 't'


let result = "";

const getMiddle = (str) => {
      if (str.length % 2 === 0) {
          result = str.substr((str.length / 2) - 1, 2);
      }
      else {
          result = str.substr(str.length / 2, 1);
      }
};

getMiddle("test");
console.log("Result for 'test' : " + result);
getMiddle("testing");
console.log("Result for 'testing' : " + result);
getMiddle("middle");
console.log("Result for 'middle' : " + result);
getMiddle("A");
console.log("Result for 'A' : " + result);
getMiddle("");
console.log("Result for 'ab' : " + result);