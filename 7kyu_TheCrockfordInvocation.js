// 7kyu - The Crockford Invocation

// Write three functions add, subtract, and multiply such that each require two invocations.

// For example:

// add(3)(4)      // 7
// subtract(3)(4) // -1
// multiply(3)(4) // 12
// Once you have done this. Write a function apply that takes one of these functions as an argument and invokes it.

// For example:

// apply(add)(3)(4)      // 7
// apply(subtract)(3)(4) // -1
// apply(multiply)(3)(4) // 12
// This kata is based on the following talk by Douglas Crockford: https://youtu.be/hRJrp17WnOE

let add = (a) => (b) => a + b;
let subtract = (a) => (b) => a - b;
let multiply = (a) => (b) => a * b;
let apply = (fn) => fn;