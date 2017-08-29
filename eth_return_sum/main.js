// Return the sum of all the multiples of 3 and 5 below a given number.

const solution = (number) => {
    let temp_array = [];
    let result = 0;
    for (let i = 1; i <= number - 1; i++ ) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            temp_array.push(i);
        }
    }
    console.log(temp_array);
    for (let k = 0; k <= temp_array.length - 1; k++) {
        result += temp_array[k];
    }
    console.log(result);
    return result;
};

solution(10);

