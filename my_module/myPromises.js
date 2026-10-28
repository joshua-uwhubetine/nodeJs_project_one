// Promise is an object that represents the eventual completion or failure of an "asynchronous operation" and its resulting value

//promises using promise handlers: .then() .catch(), .finally()
/* 
import { setTimeout } from "node:timers/promises"; // node:timers/promise is an inbuilt package

console.log("start .... ");

// delay for 5000 milliseconds (5) and resolve with a value
// message and error are keywords

setTimeout(5000, "Hello from the past!")
  .then((message) => {
    console.log(message);
    console.log("End.");
  })
  .catch((error) => {
    console.error("An error occured:", error)
  })
  .finally(console.log("We are testing Promises using handlers"));
 */


//promises using Async/Await
/* 
import { setTimeout } from "node:timers/promises";

console.log("start .... ");

try {
    // pause execution for 5000 milliseconds (5)
    const message = await setTimeout(5000, 'Hello from top-level await')
    console.log(message);
} catch (error) {
    console.error('An error occured:', error)
}
 */






