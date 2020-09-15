

class Vehicle {
  constructor(public color: string) {}
  
  public drive(): void {
    console.log("chugga chugga");
  }
  
  protected honk(): void {
    console.log("beep!");
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  public drive(): void {
    this.startDriving();
  }

  private startDriving(): void {
    console.log("vroooooom!!");
    this.honk();
  }
}


const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const myCar_ = new Car("red", 4);
myCar_.drive();