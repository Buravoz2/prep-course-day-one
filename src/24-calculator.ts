export {};

function add(var1: number, var2: number) {
    return var1 + var2;
}

function subtract(var1: number, var2: number) {
    return var1 - var2;
}

function sum(arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}

function multiply(arr) {
    var result = 1;
    for(var i = 0; i < arr.length; i++) {
        result = result * arr[i];
    }
    return result;
}

function power(var1: number, varPower: number) {
    var result = 1;
    for(var i = 0; i < varPower; i++) {
        result = result * var1;
    }
    return result;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
