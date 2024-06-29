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

// 2665. Counter II
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init) {
  let counter = init
  let increment = function() {
    counter++
    return counter
  }
  let decrement = function() {
    counter--
    return counter
  }
  let reset = function() {
    counter
    return counter
  }
  return {increment,decrement,reset}
};
createCounter(10)


//2634. Filter Elements from Array
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.


var filter = function(arr, fn) {
  let filteredArr = []
  for (let i=0; i<arr.length; i++) {
      if (fn(arr[i], i)) {
      filteredArr.push(arr[i])
  }
  }
  console.log(filteredArr)
  return filteredArr
};

filter([0,10,20,30],fn = function greaterThan10(n) { return n > 10; })

// 2703. Return Length of Arguments Passed
// Write a function argumentsLength that returns the count of arguments passed to it.
var argumentsLength = function(...args) {
  // return args.length
  return Array.from(args).length
};

// 2629. Function Composition
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

var compose = function(functions) {
  return  function (x) {
    return functions.reduceRight((value1, value2) => value2(value1), x);
    }
};

