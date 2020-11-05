import { RequestHandler } from "express";
import "reflect-metadata";
import { MetaData } from "./MetaData";


const Use = (middleware: RequestHandler) => (proto: any, key: string, descriptor: PropertyDescriptor) => {
  const middlewares = Reflect.getMetadata(MetaData.MIDDLEWARE, proto, key) || [];
  Reflect.defineMetadata(MetaData.MIDDLEWARE, [ ...middlewares, middleware ], proto, key);
}

export { Use };