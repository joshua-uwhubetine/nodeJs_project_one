// const age = 25;
// const myVariable = "This is string from myOtherModule";

//  Destructuring 
//  Destructuring  in Arrays; here we assign var names to the values inside an array
// const color = ['red', 'blue', 'orange', 'pink'];  //array
// const [first, second, third, fourth] = color; // unpacking by position
// console.log(first); // outputs value of first var name assigned to first value in array - color

// Skipping Elements
/*
const [first, , third, fourth] = color;     //  you can ignore specific index values by leaving blank spaces separated by comma
console.log(fourth);
*/

// Swapping variables; you can flip variables without needing a temporary third variables
/*
let a = 1, b = 2;
[a,b] = [b,a];  // outputs a = 2,  b = 1
console.log(a,b);
*/





// Object Destructuring
// in object destructuring, there is no positioning, you must use the exact name used in the object for the name used in destructuring

// const user = {myName:"Alice", age: 30};   // object
/* 
const { myName, age} = user;   // here is where destructuring of the object occurs
console.log(age, myName);   // output
 */

//  renaming variables to be different from object - keys, use a colon
/* 
const { myName: userName, age} = user;   // renaming variables
console.log(age, userName);   // output
 */




// Default values
/*
// we can assign a fallback value using = in case the property does not exist
const {role = 'guest'} = user;
console.log(role);

// 2nd example on default values
const user = { age: 30};   // object
const { myName: userName="John", age} = user;   // renaming variables and giving default value if property 'myName' does not exist
console.log(age, userName);   // output
*/



// the Rest Syntax (...)
// you can use the rest operator to grab a few specific items and bundle the remaining data into a brand new array or object
/* // for array
const [top, ...others] = [10, 20, 30, 40, 50]
console.log(others); 
*/

/* // for object
const {country, ...profile} = {name: 'Alice', age:25, country:'USA'};
console.log(profile);
*/

// Function Parameters:  destructuring is popular when passing objects into function parameters, allowing you to instantly isolate the variables you need
/* 
function greetUser({name, age}) {
    console.log(`hello ${name}, you are ${age}`)
}
greetUser({name: 'Bob', age: 30, email: 'bob@example.email.com'});
 */





















