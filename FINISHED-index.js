/*********************************************** 
 UNDERSTANDING AND BUILDING A REACTIVITY SYSTEM
***********************************************/

let data = { price: 5, quantity: 2 };
let target = null;

// No changes to this dependancy class
class Dep {
    constructor() {
        this.subscribers = [];
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

// Go through each of our data properties
Object.keys(data).forEach((key) => {
    let internalValue = data[key];

    // Each property get its own dependancy instance
    const dep = new Dep();

    Object.defineProperty(data, key, {
        get() {
            dep.depend(); // <-- Remember, this is the target we are running
            return internalValue;
        },
        set(newVal) {
            internalValue = newVal;
            dep.notify(); // <-- Re-run stored functions
        }
    });
});

// This watcher no longer calls dep.depend
// since that gets called from inside the method.
function watcher(myFunc) {
    target = myFunc;
    target();
    target = null;
}

watcher(() => {
    data.total = data.price * data.quantity;
});

console.log(data.total);
console.log((data.price = 20));
console.log(data.total);
console.log((data.quantity = 3));
console.log(data.total);
