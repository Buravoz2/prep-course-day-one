export {};

const min = array => {
    array.sort();
    return array[0];
};

const max = array => {
    array.sort();
    return array[array.length - 1];
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
