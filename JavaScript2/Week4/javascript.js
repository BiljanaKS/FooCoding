// 2.1

function foo(func) {
    func();
  }
  
  function bar() {
    console.log('Hello, I am bar!');
  }
  
  foo(bar);
   
 // 2.2

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }

    console.log(numbers);

    numbers.forEach(num => {

        console.log(num);

        if (num % 3 == 0 && num % 5 == 0) {
            console.log ("The value " + num + " is divisible by 3 and 5.");
        }

        else if (num % 3 == 0){
            threeCallback(num);
        }

        else if (num % 5 == 0){
            fiveCallback(num);
        }
      });
  }
  
function sayThree(num){
    console.log("The value " + num + " is divisible by 3.");
}

function sayFive(num){
    console.log("The value " + num +" is divisible by 5.");
}


threeFive(10, 15, sayThree, sayFive);
  
// 2.3 

// 2.3.1 - with for-loop
function repeatStringFor(str, num) {
    let out = '';
    for (let i = 0; i < num; i++) {
      out += str;
    }
    console.log(out);
  }
  
  repeatStringFor('abc', 3);
  

  // 2.3.2 - with while-loop
  function repeatStringWhile(str, num) {
    let out = '';
    let i = 0;
    while (i < num) {
      out += str;
      i++;
    }
    console.log(out);
  }
  
  repeatStringWhile('abc', 3);
  
  // 2.3.3 - with do-while-loop
  function repeatStringDoWhile(str, num) {
    let out = '';
    let i = 0;
    do {
      out += str;
      i++;
    } while (i < num);
    console.log(out);
  }
  
  repeatStringDoWhile('abc', 3);
    
  // 2.4.1
  
  function Dog() {
  this.name = "Bruno";
  this.color = "brown";
  this.numLegs = 4;
}


// 2.4.2

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound= new Dog()

//2.5

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 2.6

'use strict';

const arr2 = [[1, 2], [3, 4], [5, 6]];
const arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8], [9,10], [11, 12]]];

console.log(arr2.flat())
///OR
function flatArray2(arr) {
  return arr2.flat();
}

console.log(arr3.flat(2))
//OR
function flatArray3(arr) {
  return arr3.flat(2);
}

console.log(flatArray2(arr2)); // results:  [1, 2, 3, 4, 5, 6]
console.log(flatArray3(arr3));// results: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 2.7

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).
// However, when a variable refers to an object which includes array, the value is the reference to the object

// 3

function createBase(base) {
    return function(num) {
      return base + num;
    };
  }
  
  const addSix = createBase(6);
  
  console.log(addSix(10)); // returns 16
  console.log(addSix(21)); // returns 27
