

// Named Export 
// individual export in ESM
/*
// const myVariable = "a variable in myModule.js file"; // Named Export
 
//  export function myFunction(name, age) {
//     return (`Hello ${name} - ${age},you are in myModule.js file`)
// };  // Named Export

//  myFunction("josh");   // one method of calling this function
*/

// Default Export:    keywords are (export ... default)
// default export works when the module has only one specific job (function/class)
/*
default export using function
export default function myFunction() {
    console.log("This is the default export");
};   // default export
*/

// default export using class
/*
export default class Person {
    constructor(name){
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is saying hello from inside a class and its a default export `);
    }
}
 
// let user = new Person('Annie');    // new instance of the class
// user.speak();  // using a method from the class
*/

// export as - renaming exports or alias
/*
const myVariable = 25;
export { myVariable as renamedVariable };   // export with renaming
*/

// using renamed import
/*
const myVariable = 25;
export { myVariable };
*/

//  using both renamed import and export
/* 
const myVariable = "we are using both renamed import and export";
export { myVariable as myVar };
 */














