import "reflect-metadata";

@printMetadata
class Plain {
  constructor(public color = "black") {}

  @markFunction("secret")
  fly(): void {
    console.log("vrrrrrrrrr");
  }
}


function markFunction(secret: string) {
  return function(proto: any, key: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata("secret", secret, proto, key);
  }
}

function printMetadata(constructor: any) {
  for (let key in constructor.prototype) {
    const secret = Reflect.getMetadata("secret", constructor.prototype, key);
    console.log(secret);
  }
}



const secret = Reflect.getMetadata("secret", Plain.prototype, "fly");
console.log(secret);

