/*********************************************** 
 UNDERSTANDING AND BUILDING A REACTIVITY SYSTEM
***********************************************/

// The Problem...
// JavaScript is procedural, not reactive
let price = 5;
let quantity = 2;
let total = price * quantity; //10 right?
price = 20;
console.log(`total is ${total}`); //still 10
