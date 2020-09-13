
// primitive types
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = [ "red", "green", "blue" ];
let numbers: number[] = [ 1, 2, 3 ];
let truths: boolean[] = [ true, true, false ];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
};

// function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n);
}


// [ when to use annotations ]
// 1) function that returns the "any" type
const json = `{ "x": 10, "y": 20 }`;
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and initialize it later
let words = [ "red", "green", "blue" ];
let hasGreen: boolean;
// let hasGreen = false;  // better way
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    hasGreen = true;
    break;
  }
}

// 3) variable whose type cannot be infered correctly
let numberList = [ -10, -1, 12 ];
let positiveNumber: boolean | number = false;

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] > 0) {
    positiveNumber = numberList[i];
    break;
  }
}