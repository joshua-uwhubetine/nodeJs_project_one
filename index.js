// Using CJS
/* 
// 1. Importing a local (built-in) module
const path = require('path');

// 2. Importing a third-party module
const colors = require('colors');

// 3. Importing a custom module
const greetings = require('./my_module/greetings');

// Using the third-party module
console.log(colors.red('This text is red!'));
console.log(colors.blue('This text is blue!'));

// Using the custom module
const name = 'Jack Sparrow';
console.log(greetings.sayHello(name));
console.log(colors.yellow(greetings.sayHello(name)));    // using custom and third-party module combined
*/


// ESM - ECMASCRIPT MODULE
// Named Import
/*
import {myVariable} from "./my_module/myModule.js";      // named Import
import {myFunction} from "./my_module/myModule.js";      // named Import

console.log(myVariable);
console.log(myFunction (jane));
*/

// console.log(import.meta);    // displays information about your present directory

// default import
// default import does not need {}
/*  // default import of function
import myFunction from "./my_module/myModule.js"
myFunction();  // calling our function from our module.js file we imported into the root file of our project (index.js)
*/

//   default import of class
/*
import Person from "./my_module/myModule.js";  // Person is the name of class within the module

let user = new Person('Michael');    // new instance of the class 
user.speak();  // using a method from the class via default import
*/

// To Logs the URL or path of the current module
// console.log(import.meta.url);   // Logs the URL or path of the current module

// using renamed exports
/*
import {renamedVariable} from './my_module/myModule.js'

// console.log(renamedVariable);
*/

//  Renaming imports when importing them
/* 
import {myVariable as newVar} from './my_module/myModule.js';
console.log(newVar);
 */

//   using both renamed import and export
/*
import {myVar as newVar} from './my_module/myModule.js';
console.log(newVar);
*/

//   Re-export
// simple setup using barrel.js file and reExport.js
/*
import{greet, add, secretCode} from './my_module/barrel.js';

console.log("Adding:", add(6,8));
console.log(greet);
console.log(secretCode);
*/

// import * as - Importing everything from a module with a namespace
/* 
import * as utils from './my_module/utils.js';

utils.myFunction();
console.log(utils.myIdentity)
 */

// import { default as } - Renaming a default import
/*
import myIdentity, {default as MyComponent} from './my_module/Component.js'
console.log(myIdentity);
*/

// import() - Dynamic import
// import() - Dynamic import using promise chain .then()
/* 
import('./my_module/myUtilities.js')
.then((module) => {
    console.log(module.calculate(6))
    module.default();
})
.catch((error) => {
    console.error('Error encountered:', error)
})
 */

// import() - Dynamic import using Async/Await
/* 
async function loader() {
    try {
        // Dynamically import the module
        const module = await import ('./my_module/myUtilities.js')

        //accessing named export directly
        const result = module.calculate(365);
        console.log(result);

        // Access default exports via the 'default' property
        //module.default(); or
        const greetUser = module.default;
        greetUser();

    } catch(error) {
        console.error(" Failed to load module: ", error)
    }
}

loader();
 */

// Destructuring during dynamic import (object destructuring)
/* 
async function loader() {
    try {
        // Dynamically import the module & Destructuring It (object destructuring)
        const {calculate, default: greetUser} = await import ('./my_module/myUtilities.js')

        //accessing named export directly
        const result = calculate(166);
        console.log(result);

        // Access default exports via the alias (assigned name)
        greetUser();

    } catch(error) {
        console.error(" Failed to load module: ", error)
    }
}

loader();

 */


console.log('hello from dev_one branch');






































































