export {};

/**
 * Complete the function to if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(num): boolean {
  if (typeof(num) !== 'number') {
    return false;
  }
  if (isNaN(num)) {
    return false;
  }
  if ((num % 1) !== 0) {
    return false;
  }
  if(excludedNums.some(e => e === num)) {  //e => e ??
    return false;
  }
  return true;
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
