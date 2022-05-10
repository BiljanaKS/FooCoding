//1. Write a console.log statement saying "Hello World!" for each language that you know.

console.log("Zdravo, Svetu!");
console.log("Hello, World!");
console.log("Hej, Världen!");

/*2. Consider the following code:

console.log('I'm awesome');
Copy the code in your .js file and run it. You will see that you will get a SyntaxError. Find a solution for this error. Hint: read the error message carefully, it also gives an indication of where the problem is.*/

console.log("I'm awesome");

/* 3. Declare a variable x and initialize it with an integer, using these exact steps:
3.1 First, declare your variable x (do not initialize it yet).
3.2 Add a console.log statement that explains in words what you think the value of x is, like in this example:

// TODO -> here you initialize your variable
console.log("the value of my variable x will be: whateverYouThinkItWillLog");
3.3 Add a console.log statement that logs the value of x.
3.4 Now initialize your variable x with an integer.
3.5 Next, add a console.log statement that explains what you think the value of x is.
3.6 Add a console.log statement that logs the value of x.
Steps to be taken:

// TODO -> here you declare your variable
console.log("the value of x will be: whateverYouThinkItWillLog");
// TODO -> log the actual value of x
// TODO -> here you initialize your variable
console.log("the value of x will be: whateverYouThinkItWillLog");
// TODO -> log value of x again */

let x;

console.log("the value off my variable x will be: undefined");

console.log (x);
x = 5;

console.log("the value of x will be: 5");

console.log (x);

/*4. Declare a variable y and assign a string to it.
4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
4.2 Now console.log the variable y.
4.3 Now assign a new string to the variable y.
4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
4.5 Now console.log y again.

// TODO -> here you declare AND assign your string
console.log("the value of my string will be: whateverYouThinkItWillLog");
// TODO -> log the actual value of the string to the console
// TODO -> assign a new value to your variable x
console.log("the value of my string will be: whateverYouThinkItWillLog");
// TODO -> log the actual value of the string to the console */

let y;

console.log("the value of y will be: undefined");

console.log(y);

y = "Beautiful day";

console.log("the value of my string will be: Beautiful day");

console.log(y);


/*  5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
5.1 Declare a variable z and assign the number 7.25 to it.
5.2 console.log z.
5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
5.4 console.log a.
5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
5.6 console.log the highest value.*/

let z = 7.25;

console.log(z);

let a = Math.round(z);

console.log(a);
;
let c

if (z > a) {
    c = z
}
else {
    c = a
};
  
console.log (c);

/* 6. Arrays
6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions).
6.2 Write a console.log statement that explains in words what you think the value of the array is.
6.3 console.log your array.
6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
6.5 Log your array.
6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
6.7 Log your new array!*/

let elementStorage = [];

console.log("The value of the array is undefined");

console.log(elementStorage);

let myAnimals = ["Bird", "Dog", "Cat", "Elephant", "Bear"];

console.log(myAnimals)

myAnimals[5] = "baby pig";

console.log(myAnimals);

/* 7. More strings
Let's consider the following string: let myString = "this is a test".
7.1 Add the string to your file and console.log it.
7.2 Find a way to get the length of myString.
7.3 console.log the length of myString.   */


let myString = "this is a test";

console.log(myString);

let word_count = myString.length;

console.log(word_count);

/*8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
8.1 First declare at least four variables and assign them different data types.
8.2 For each variable write a console.log statement that logs the value

let foo = 3;
console.log("The value of my variable foo is: " + foo);
(Curious to know what a foo is? Check this article on Wikipedia.)

8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables.
8.5 Now compare the types of your different variables with one another.
8.6 Make sure to also show a message when the variables you are comparing are not the same type.

For example:

let x = 9;
let y = 'Hello';

if (...) {
    console.log('SAME TYPE');
}
// TODO -> add a way of giving feedback if your variables don't have the same type  */


let word = "words", num = 6, chara = 'c', big_num = 2.66;

console.log("The value of my variable word is: " + word);
console.log("The value of my variable num is: " + num);
console.log("The value of my variable chara is: " + chara);
console.log("The value of my variable big_num is: " + big_num);

console.log("The type of my variable word should be: string");
console.log("The type of my variable num should be: number");
console.log("The type of my variable chara should be: string");
console.log("The type of my variable big_num should be: number");

console.log(typeof(word))
console.log(typeof(num))
console.log(typeof(chara))
console.log(typeof(big_num))

if (typeof(word) === typeof(num)) {
    console.log('SAME TYPE');
}
else {
	console.log('NOT SAME TYPE')
}

if (typeof(word) === typeof(chara)) {
    console.log('SAME TYPE');
}
else {
	console.log('NOT SAME TYPE')
}

if (typeof(word) === typeof(big_num)) {
    console.log('SAME TYPE');
}
else {
	console.log('NOT SAME TYPE')
}

if (typeof(num) === typeof(chara)) {
    console.log('SAME TYPE');
}
else {
	console.log('NOT SAME TYPE')
}

if (typeof(num) === typeof(big_num)) {
    console.log('SAME TYPE');
}
else {
	console.log('NOT SAME TYPE')
}

if (typeof(chara) === typeof(big_num)) {
    console.log('SAME TYPE');
}
else {
	console.log('NOT SAME TYPE')
}


/* 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
9.1 Add at least 3 console.log statements in which you show that you understand what % does.*/


let x = 7;

x = x % 3;

console.log(x);

console.log("The Modulus always provides the remainder of division, in this case it will be 1");

let a = 10;

a = 10 % 2;

console.log("The result will be 0 because there is no remainder. Result: " + a)

let b = 10;

b = 10 % 3;

console.log("The result will be 1 because there is a remainder. Result: " + b)

let c = 10;

c = 10 % 4;

console.log("The result will be 2 because there is a remainder. Result: " + c)


/*10. Write a program to answer the following questions:
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments). */

10.1 Yes, it can be done, you can store multiply types in an array

let newArray = [
	name = "Biljana",
	height = "1.70"
];

console.log(newArray[1]);

10.2 Yes, you can compare infinities

let x = 6/0;

console.log (x)

let y = 10/0;

console.log(y)

if (x === y) {
	console.log("True");
}
else {
	console.log("False");
}