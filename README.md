# JavaScript Reactivity System

## How to View

Each branch is a stepped solution, by branch 5 we will have built a reactivity system that uses a class that collects dependancies, re-runs all dependancies, has a watcher to manage code that is running, and object getters and setters for data values. Fun stuff!

## The Problem

### Without Reactivity

```
let price = 5;
let quantity = 2;
let total = price * quantity; // So total is 5 * 2 which would be 10.
price = 20; // What is total? 20 * 2 = 40 right, lets print it below
console.log(`total is ${total}`); // Still 10...
```

JavaScript is procedural and not reactive by default. One of the super powers of frameworks like Vue and React are that they just auto-magically know how and where to update. Whenever a dependancy updates, like price or quantity above, total just recalculates like magic!

### With Reactivity

```
let price = 5;
let quantity = 2;
let total = price * quantity; // 5 * 2 = 10, total is 10 which is good!
price = 20; // Dependancy of total changes, total recalulates
console.log(`total is ${total}`); // 40!! Woooohooo
```

Full solution in FINISHED-index.js file. The code in the branches of this repo take the process of building out this system step by step. I don't ever plan on making a framework, but it was eyeopening to get a glimpse into how this stuff works.
