@classDecorator
class Boat {
  
  @Autowired
  private color: string;

  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  @Log
  pilot(@Positive speed: number): void {
    console.log("swish");
  }

  @LogError("hello")
  throwError(): never {
    throw new Error();
  }
}


function Log(prototype: Object, key: string | symbol, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  return {
    ...descriptor,
    value: function() {
      console.log("start");
      method();
      console.log("end");
    }
  }
}


function LogError(message?: string) {
  return (prototype: Object, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const method = descriptor.value;
    return {
      ...descriptor,
      value: function() {
        try {
          method();
        } catch (e) {
          console.log(message ? message : "Oops... something went wrong...");
        }
      }
    }
  }
}


function Autowired(prototype: any, key: string) {
  prototype[key] = "black";
}


function Positive(prototype: any, key: string, index: number) {
  console.log(key, index);
}


function classDecorator(SuperClass: typeof Boat) {
  return class extends SuperClass {
    hello() {
      console.log("SuperClass SuperClass SuperClass SuperClass");
    }
  }
}


const boat = new Boat();
boat.pilot(2);
boat.throwError();
(boat as any).hello();

console.log(boat.formattedColor);

console.log("end");