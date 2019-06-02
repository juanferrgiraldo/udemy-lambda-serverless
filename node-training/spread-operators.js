/** Rest spread  operator */
// Its used to put individual values into an array.

const add = (...a) => { // a in this case is going to be an array
  let sum = 0;
  a.forEach(num => sum += num);
  return sum;
}
console.log('Rest spread operator', add(2, 3, 4, 5));

/** Spread operator is exactly opposite to rest spread operator */
// Its used to spread operators of an array into individual variables.

let arr = [2, 3, 4, 5];
console.log('Spread operator', add(...arr));

// Copy array into another and add more values

let arr2 = [...arr, 6, 7];
console.log(arr2);
