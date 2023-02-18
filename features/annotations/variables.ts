// Fix console.log error => npm i -D @types/node

// Type annotations, unnecessary.

let apples: number = 5;
let oranges = 6;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//console.log(`Today ${now.getDate()}`)

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truthsNLie: boolean[] = [true,true,false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const logNumberInf = (i: number) => {
  console.log(i);
};

// Type Inference: (Works for primitives with let)
// Variable Declaration = Variable Initialization
let color = "blue";
const color1 = "blue";
const color2: string = "blue";
// If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us.


// When to use annotations:
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
// any is a type like any other. Means TS has no idea what this is - can't check for correct property references.
// we should avoid variables with 'any' at all costs.
// Fix
const json1 = '{"x": 10, "y": 20}'
const coordinates1: {x: number; y: number} = JSON.parse(json1);
console.log(coordinates1); // {x: 10, y: 20};
// 2) When  we declare a variable on one line and initialize it later:
let words = ['red', 'green', 'purple'];
let foundWord: boolean; // or = false;

words.forEach(w => {
  if(w === 'green'){
    foundWord = true;
    console.log(`foundWord: ${foundWord}`);
  }
})

// console.log(`foundWord ${foundWord}`);

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, 1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach(n => {
  if(n > 0){
    numberAboveZero = n;
    console.log(`numberAboveZero: ${numberAboveZero}`);
  }
})




