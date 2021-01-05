/*********************************************** 
 UNDERSTANDING AND BUILDING A REACTIVITY SYSTEM
***********************************************/

//We need total to be able to react to dependacy changes,
//in order to do this we need to store it and set it up to
//understand that it may need to run again in certain scenarios

let price = 5;
let quantity = 2;
let total = 0;
let target = null;
let storage = [];

//We can start by storing it in a variable and recording it

function record() {
    storage.push(target);
}

//We are storing the target so we can run it later
//Perhaps with a replay function that runs all things recorded

function replay() {
    storage.forEach((run) => run());
}

target = () => {
    total = price * quantity;
};

record();
target();

price = 20;
console.log(total); //10
replay();
console.log(total); //40
