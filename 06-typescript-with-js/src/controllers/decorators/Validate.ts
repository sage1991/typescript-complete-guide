import "reflect-metadata";
import { MetaData } from "./MetaData";

const Validate = (...keys: string[]) => (proto: any, key: string, descriptor: PropertyDescriptor) => {
  Reflect.defineMetadata(MetaData.VALIDATE, keys, proto, key);
}

export { Validate };