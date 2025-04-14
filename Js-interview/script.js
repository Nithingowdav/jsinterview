// Scope scope determins that visibility of varibales, objects and function from different parts of the code

//function, block, lexical, globalscope

//function scope : varibales defined inside a function are not accessible from outside the function

function calSum(a,b){
    var sum = a + b; // var or let 
    console.log(sum);
}
calSum(3,2);   // 5

//if variable define outside eg
// let sum = a + b;
// function calSum(a,b){
    
//     console.log(sum);
// }
// calSum(3,2);  error will come not defined and b


// {
//     var a = 5;
// }
// console.log(a); // 5 but 

// {
//     let a = 5; // let or const 
// }
// console.log(a); //error a is not define solution is define inside 

{
    const a = 5; // let or const 
    console.log(a); //5  block scope--> variables declaredc inside the {} block cannot be accessed from outside the block
}


//🌍 What is Global Scope?
//A variable has global scope if it’s declared outside of any function or block — it can be accessed from anywhere in your script.
var name = "John";

function greet() {
  console.log("Hello, " + name); // Accessible here
}

greet();
console.log(name); // Also accessible here


let cityplace = "Bangalore";
const country = "India";

function userLocation() {
  console.log(cityplace);    // Bangalore
  console.log(country); // India
}

userLocation();
//avoid using var in the global scope use let or const

//lexicalscope--> a variable define outside a function can be accessible inside another function defined after the variable declaration
function outer() {
  let name1 = "Lexi";

  function inner() {
    console.log(name1); // ✅ Can access 'name' from outer()
  }

  inner();
}

outer();

// function parent() {
//   let a = "Parent";

//   function child() {
//     let b = "Child";
//     console.log(a); // ✅ Works
//   }

//   child();
//   console.log(b); // ❌ Error: b is not defined
// }
// parent();


//showding--"Shadowing" – This refers to variable shadowing, where a variable declared in a certain scope (e.g., inside a function or block) overrides a variable with the same name in an outer scope.

var city = "delhi";
var city = "Bengaluru";
console.log(city); // Bengaluru bcs shadowing by same variab le by multiple times


let x = 10;

function test() {
  let x = 20;  // This 'x' shadows the outer 'x'
  console.log(x); // Outputs: 20
}

test();
console.log(x); // Outputs: 10
  
// let city1 = "delhi";
// let city1 = "Bengaluru";
// console.log(city1); // error city1 already defined illligal shawdowing

// const abd = 360;
// const abd = "degree";
// console.log(abd); // abd alrady declared 


//declaration 

var a;
var a =3;

//but 
// let a;
// let a; //already declared error

//Re=Initialisation
var a= 10; // var or let both can but no const 
a=6; 
//   const b = 10;
//   b = 6;  //error assignment to constant variable 



//Hoisting--> Hosting ia an behaviour of js in which a function or a variable can be used before declaration
// console.log(count);
// var count =1 ; // undefined 


var name;
console.log(name);
var name = 'raja'; // undefiend output

// console.log(count);
// let count = 1; // error==Cannot access 'count' before initialization

//first class functionms
//✅ Assign functions to variables
//✅ Pass functions as arguments to other functions
//✅ Return functions from other functions

// assigning function to variable
const greet1 = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet1("Alice")); // Hello, Alice!


// Example 2: Passing a function as an argument
function sayHello(name) {
  return `Hello, ${name}`;
}

function greetUser(callback, name) {
  console.log(callback(name));
}

greetUser(sayHello, "Bob"); // Hello, Bob

//Example 3: Returning a function from a function
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


//IIFE=  IIFE = Immediately Invoked Function Expression
//An IIFE is a function that runs immediately after it's defined.

(function () {
  // your code here
  console.log("IIFE executed!");
})();
 //or
 (() => {
  console.log("Arrow IIFE executed!");
})();

//Why use IIFE?
//Avoid polluting the global scope

//Create a private scope

//Useful in modular patterns or data encapsulation

(function () {
  const privateVar = "I'm private!";
  console.log(privateVar); // Output: I'm private!
})();

console.log(typeof privateVar); // Output: undefined

(function (name) {
  console.log(`Hello, ${name}`);
})("Alice"); // Hello, Alice


