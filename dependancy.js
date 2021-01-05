export default class Dep {
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
