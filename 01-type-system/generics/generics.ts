
class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfString = new ArrayOfAnything<string>(["a", "b", "c"]);



// Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) 
    console.log(arr[i]);
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) 
    console.log(arr[i]);
}

function printAnythings<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) 
    console.log(arr[i]);
}

printAnythings<string>(["a", "b", "c"]);



// Generic constraints
interface Printable {
  print(): void;
}

class Car implements Printable {
  print() {
    console.log("I'm a car");
  }
}

class House implements Printable {
  print() {
    console.log("I'm a house");
  }
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) 
    arr[i].print();
}


printHouseOrCar([new Car(), new House()]);