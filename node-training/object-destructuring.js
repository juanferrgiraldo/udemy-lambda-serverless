/** Object destructuring */
let student = {
  firstName: 'Juan',
  lastName: 'Giraldo',
  age: 35,
  hobbies: ['reading', 'skateboarding', 'programming'],
  email: 'juanferrgiraldo@gmail.com',
  website: 'none'
}

// Without destructuring

let firstName = student.firstName;
let lastName = student.lastName;

console.log('Without destructuring:', firstName + ' ' + lastName);

// Using destructuring

let {firstName: fName, lastName: lName, ...details} = student; // we can change variable name using : | rest spread can also be used to print
console.log('With destructuring:', fName + ' ' + lName);
console.log('Using rest spread with destructuring: ', details);
