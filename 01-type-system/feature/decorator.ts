class Boat {
  
  private color: string;

  @testDecorator
  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}


function testDecorator(proto: any, key: string, descriptor: PropertyDescriptor): void {
 console.log(proto);
 console.log(key);
 console.log(descriptor);
}