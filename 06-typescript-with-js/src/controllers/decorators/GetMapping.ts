

function GetMapping(path = "") {
  return (proto: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata("path", path, proto, key);
  }
}

export { GetMapping };