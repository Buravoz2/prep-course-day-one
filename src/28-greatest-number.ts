export {};

function greatest(x, y) {
    if ((x - y) === 0) {
        return "Numbers are equal!";
    }
    if ((x - y) < 0) {
        return y;
    }
    else {
        return x;
    }
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
