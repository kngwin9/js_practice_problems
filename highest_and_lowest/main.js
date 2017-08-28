// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
//     Example:
//
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//
//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

const highAndLow = (numbers) => {
    let array = numbers.split(" ");
    console.log(array);
    array.sort(function (a, b) {
        return b-a;
    });
    let highest = array[0];
    let lowest = array[array.length - 1];
    console.log("highest: " + array[0], "lowest: " + array[array.length - 1]);
    return highest + lowest

};

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"); // return "542 -214"
highAndLow("1 -1"); // return "1 -1"
highAndLow("1 1"); // return "1 1"