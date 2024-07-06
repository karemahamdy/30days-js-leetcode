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

// 2666. Allow One Function Call
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function(fn) {
  let coun = 0
 return function(...args){
     coun++
     if(coun==1) return (fn(...args))
 }
};


// 2626. Array Reduce Transformation
var reduce = function(nums, fn, init) {
  return nums.reduce(fn,init)
};

// 2724. Sort By
var sortBy = function(arr, fn) {
  return  arr.sort(function(a, b){return fn(a)-fn(b)})
 };

 //2727. Is Object Empty
//  Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// // An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse

var isEmpty = function(obj) {
  return (Object.keys(obj).length == 0 ? true  : false)
};

// obj = {"x": 5, "y": 42}

//2695. Array Wrapper 
// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

/**
* @return {number}
*/
ArrayWrapper.prototype.valueOf = function() {
return this.nums.reduce((sum, num) => sum + num, 0);
}

/**
* @return {string}
*/
ArrayWrapper.prototype.toString = function() {
 return '[' + this.nums.join(',') + ']';
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */


// 2723. Add Two Promises
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function(promise1, promise2) {
  const [v1, v2] = await Promise.all([promise1,promise2])
  return  v1+v2
};


// 2726. Calculator with Method Chaining
class Calculator {
  constructor(value) {
    this.result = value;
  }
  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}


// 2621. Sleep
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value. 

async function sleep(millis) {
  return new Promise((res,rej)=>{
      setTimeout(()=>{
          res('hi')
      },millis)
  })
}

// 2694. Event Emitter
class EventEmitter {
  constructor() {
      this.events = new Map();
  }
  
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
subscribe(eventName, callback) {
      if(!this.events.has(eventName)) {
          this.events.set(eventName, [])
      }
      const listeners = this.events.get(eventName);
      listeners.push(callback);

  return {
          unsubscribe: () => {
              const index = listeners.indexOf(callback);
              if(index !== -1) {
                  listeners.splice(index, 1)
              }
    }
  };
}
  
  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
emit(eventName, args = []) {
      if(!this.events.has(eventName)) {
          return []
      }
      
      const listeners = this.events.get(eventName);

      const results = []

      for (const listener of listeners) {
          results.push(listener(...args))
      }
  return results;
}
}

// 2725. Interval Cancellation

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

var cancellable = function(fn, args, t) {
  fn(...args);
  const timer = setInterval(() => fn(...args), t);

  const cancelFn = () => clearInterval(timer);
  return cancelFn;
};


//2715. Timeout Cancellation
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
 

var cancellable = function(fn, args, t) {
  const timeoutId = setTimeout(function() {
    fn.apply(null, args);
  }, t);

  const cancelFn = function() {
    clearTimeout(timeoutId);
  };

  return cancelFn;
};

// 2622. Cache With Time Limit

const TimeLimitedCache = function() {
  this.cache = new Map();  // Using Map so we don't need a size variable
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);  // Cancel previous timeout
    this.cache.set(key, {
        value,  // Equivalent to `value: value`
        ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

// 2677. Chunk Array

function chunk(array, size) {
  const chunkedArray = []
  for (var i = 0; i < array.length; i += size) {
   chunkedArray.push(array.slice(i, i + size))
  }
  return chunkedArray
}

// 2631. Group By
Array.prototype.groupBy = function(fn) {
  const obj = {}
   for(let e of this) {
    const key = fn((e))
    obj[key] ||= []
     obj[key].push(e)
   }
   return obj
};

// 2637. Promise Time Limit

var timeLimit = function(fn, t) {
    
  return async function(...args) {
 return await Promise.race([
          new Promise(resolve => resolve(fn(...args))),
          new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))
      ]);
  };
};
