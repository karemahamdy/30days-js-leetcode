// problem one
// 2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

let createHelloWorld = function(args) {
  
         return "Hello World"    
  
};

console.log(createHelloWorld([]))

// 2620. Counter
// Given an integer n, return a counter function.
//  This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)

var createCounter = function(n) {
    
  return function() {
    return  n++
  };
};

 
  const counter = createCounter(10)
console.log(counter())// 10
  counter() // 11
  counter() // 12
 