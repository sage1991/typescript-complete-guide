
const today = new Date();
today.getMonth();


const person = { age: 20 };


class Color {
  hex: string;
  constructor(hex) {
    this.hex = hex;
  }
}

const red = new Color("#ff0000");
console.log(red.hex);