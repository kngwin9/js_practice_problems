// Your task is to make function, which returns the sum of a sequence of integers.
//
//     The sequence is defined by 3 non-negative values: begin, end, step.
//
//     If begin value is greater than the end, function should returns 0
//
// Examples
//
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

const sequenceSum = (begin, end, step) => {
    let result = 0;
    if (begin > end ) {
        return 0;
    }
    else if (begin === end) {
        return end;
    }
    else {
        for (let i = begin; i <= end; i += step) {
            result += i;
        }
        return result;
    }
};

// const sequenceSum = (begin, end, step) => {
//     if (begin > end) {
//         return 0;
//     }
//     return begin + sequenceSum(begin + step, end, step);
// };

// const sequenceSum = (begin, end, step) => {
//     var sum = 0;
//     for(var i=begin;i<=end;i+=step)
//     {
//         sum += i;
//     }
//     return sum;
// };

// function sequenceSum(begin, end, step) {
//     let sum = 0
//     for (let i = begin; i <= end; i += step) {
//         sum += i
//     }
//     return sum
// }

sequenceSum(2,2,2);      // 2
sequenceSum(2,6,2);      // 12 , 2 + 4 + 6
sequenceSum(1,5,1);      // 15 , 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3);      // 5 , 1 + 4