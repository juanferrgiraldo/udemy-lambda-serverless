/** Array destructuring */

let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let [num1, num2, , num4, ...numbers] = arr; // we can omit parameters like '30'

console.log('Array destructuring: ', num1, num2, num4);
console.log('Array destructuring with rest spread operator:', num1, num2, num4, ...numbers);