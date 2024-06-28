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
 

//2704. To Be Or Not To Be
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

  var expect = function (val) {
    return {
        toBe: (val2) => (val === val2 ? true : (() => { throw new Error("Not Equal") })()),
        notToBe: (val2) => (val !== val2 ? true : (() => { throw new Error("Equal") })())
    }
};

// 2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
var map = function(arr, fn) {
  arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
  newArr = []
  for(let i = 0; i < arr.length; i++) {
      newArr.push(fn(arr[i], i))
    }
    console.log(newArr)
    
  };

  map()