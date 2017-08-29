// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
//
//     Input: 21445 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 1254859723 Output: 9875543221

const descendingOrder = (n) => {
    let array = n.toString().split("");
    array.sort(function (a, b) {
        return b - a;
    });
    result = array.join("");
    result = Number(result);
    return result;
};

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }

// function descendingOrder(n){
//     return parseInt(n.toString().split('').sort().reverse().join(''), 10);
// }

descendingOrder(21445);