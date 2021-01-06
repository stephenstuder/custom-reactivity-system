/*********************************************** 
 UNDERSTANDING AND BUILDING A REACTIVITY SYSTEM
***********************************************/
class Dep {
    constructor() {
        this.subscribers = []; // The targets are dependent, and should be
        // run when notify() is called.
    }
    depend() {
        if (target && !this.subscribers.includes(target)) {
            // Only push if there is a target and it is not already subscribed
            this.subscribers.push(target);
        }
    }
    notify() {
        // Replaces our replay function
        this.subscribers.forEach((sub) => sub()); // Run our targets, or observers
    }
}

const dep = new Dep();
let price = 5;
let quantity = 2;
let total = 0;

function watcher(myFunc) {
    target = myFunc; // Set as the active target
    dep.depend(); // Add the active target as a dependency
    target(); // Call the target
    target = null; // Reset the target
}

watcher(() => {
    total = price * quantity;
});

price = 20;
console.log(total); //10.. no longer correct
dep.notify(); //Run the subscribers
console.log(total); //40.. now the correct number
