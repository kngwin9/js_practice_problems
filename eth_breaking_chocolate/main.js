// Write a function that returns the minimum number of breaks needed to split a bar of "n x m" size, into "1 x 1" squares.

// Your task is to split the chocolate bar of given dimension n x m into small squares.
//     Each square is of size 1x1 and unbreakable.
//     Implement a function that will return minimum number of breaks needed.
//
//     For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
//
//     If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

// should handle a single square of chocolate
// expected undefined to equal 0
// should handle a bigger square of chocolate
// expected undefined to equal 24
// should handle a rectangle of chocolate
// expected undefined to equal 27
// should handle no chocolate
// expected undefined to equal 0

let result = 0;

const breakChocolate = (n, m) => {
    if ( (isNaN(n)) || (isNaN(m)) ) {
        return 0;
    }
    else if ((n <= 0) || (m <= 0)) {
        console.log("testing");
        return 0;
    }
    else {
        return (n * m) - 1
    }
};

breakChocolate(-1,-0);
// breakChocolate(1,1);
// console.log(result);
// breakChocolate(3,2);
// console.log(result);
// breakChocolate(5,5);
// console.log(result);
// breakChocolate(2,1);
// console.log(result);
// breakChocolate(3,1);
// console.log(result);
// breakChocolate("this",1);
// console.log(result);
// breakChocolate(2,"this");
// console.log(result);