// Exercise 1:

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log (myString)

let results = myString.replaceAll(",", " ")

console.log (results)

// Exercise 2:

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle")

console.log(favoriteAnimals)

favoriteAnimals.splice(1, 0, "meerkat")

console.log("The new value will be: blowfish, meerkat, capricorn, giraffe, turtle")

console.log(favoriteAnimals)

let length = favoriteAnimals.length;

console.log ("The length of the array is " + length)

favoriteAnimals.splice(3, 1)

console.log (favoriteAnimals)

let found = favoriteAnimals.indexOf("meerkat", 0)

console.log("The item that you are loking for is at index: " + found)


// More Javascript

// Exercise 1:

function addition (x, y, z) {

  let result = x + y + z
  
	return result
}

addition (1,5,6)

// Exercise 2:

function colorCar (x) {
  console.log ("a " + x + " car.")
}

colorCar("red")

// Exercise 3:

const person = {
 name: "Joaline",
 height: 1.60,
 weight: 60
};

function listing (x) {
  for (var property in x){
     console.log(property + ": " + x[property]);
}
}

listing (person)

// Exercise 4:

function vehicleType (color, code) {
  if (code == 1) {
    console.log ("a " + color + " car")
  }
  else if (code == 2) {
    console.log ("a " + color + " motorbike")
  }
  else
    console.log ("Wrong Type")
}

vehicleType ("red", 1)

// Exercise 5:

let numbers = (3 === 3) ? console.log("yes") : console.log("no");

// Exericse 6:

function vehicleType (color, code, usage) {
  if (code == 1) {
    switch(usage){
      case 1:
            console.log ("a new " + color + " car");
        break;
   		 case 2: 
            console.log ("a used " + color + " car");
        break;
      default: 
        console.log ("Wrong Type");
  }
  }
  else if (code == 2) {
    switch(usage){
      case 1:
            console.log ("a new " + color + " motorbike");
        break;
   		 case 2: 
            console.log ("a used " + color + " motorbike");
        break;
      default: 
        console.log ("Wrong Type");
  }
  }
  else
    console.log ("Wrong Type")
}

vehicleType ("red", 1, 1);

// Exercise 7:

const vehiclesList =["motorbike", "caravan", "bike","truck","moped"]

// Exercise 8:

const thirdVehicle = vehiclesList[2];
console.log(thirdVehicle);

// Exercise 9:

function vehicleType (color, code, usage) {
  const vehiclesList =["car", "motorbike", "caravan","truck","moped"]
    switch(usage){
      case 1:
            console.log ("a " + color + " new" + " " + vehiclesList[code]);
        break;
   		 case 2: 
            console.log ("a " + color + " used" + " " + vehiclesList[code]);
        break;
      default: 
        console.log ("Wrong Type");
}
}

vehicleType ("green", 2, 2);

// Exercise 10:

  const vehiclesList =["cars", "motorbikes", "caravans","bikes"]

let length = vehiclesList.length;

    var str = "Amazing Joe's Garage, we service ";

  for (let i = 0; i <= length-1; i++) {
  str = str + vehiclesList[i] + ", "
  } 

var str2 = str.slice(0, -2) + '.';

console.log (str2)

// Exercise 11:

  const vehiclesList =["cars", "motorbikes", "caravans","bikes"]
  
vehiclesList.push("moped");
  
let length = vehiclesList.length;

    var str = "Amazing Joe's Garage, we service ";

  for (let i = 0; i <= length-1; i++) {
  str = str + vehiclesList[i] + ", "
  } 

var str2 = str.slice(0, -2) + '.';

console.log (str2)

// Exercise 12:

let empobj = {}

// Exercise 13:

let fooCafe = {
  teachers: ["Claudiu", "Seif", "Sahin"]
}

console.log(fooCafe)

// Exercise 14:

let fooCafe = {
	teachers: ["Claudiu", "Seif", "Sahin"]
}

fooCafe.languages = ["HTML5", "CSS3", "JavaScript"]

console.log(fooCafe)

// Exercise 15:

let x = [1, 2, 3];

let y = [1, 2, 3];

let z = y;


console.log(x == y) // false because x doesn't have the same place in memory as y although it has the same values
console.log(x === y) // false because x doesn't have the same place in memory as y although it is the same type
console.log(z == y) // true because it references z to the same memory location of y
console.log(z == x) // false because z is not pointing to x, it is pointing to y and y does not equal x in memory

// Exercise 16:

let o1 = { foo: "bar" };

let o2 = { foo: "bar" };

let o3 = o2;

 console.log (o3) //Prints out "foo: bar" which is taken from o2

o2.foo = "test1" // Changing the value of o2

console.log (o3) // o3 Prints out 'test1', which is the same value as o2 

 o3.foo = "test2" // Changing the value of o3

 console.log (o2) // o2 Prints out 'test2', which is the same value as o3 because they are referenced

o1.foo = "test3" // Changing the value of o1

console.log(o3) // o3 Prints out "foo: bar" because it is not referenced with o1

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// No it does not since if either one of them reference eachother, they are working on the same object in memory.

// Exercise 17:

let bar = 42;
typeof typeof bar;

// typeof typeof would return a 'string' because the initial typeof is returning 'number', but the result itself is shown as a String and performing a typeof on the result itself returns a String.





















































