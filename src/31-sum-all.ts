export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(x, y) {
    if (x < y) {
        var result = 0;
        for (let i = x; i <= y; i++) {
            result += i;
            }
            return result;
    } return "Number 1 should be smaller than number 2!"
};

console.log(sumAll(1, 4)); // Expected output: 10
