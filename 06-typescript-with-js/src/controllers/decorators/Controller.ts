import { RequestHandler } from "express";
import { AppRouter } from "../../AppRouter";
import { validateRequest } from "../middleware/ValidateRequest";
import { MetaData } from "./MetaData";
import { RequestMethod } from "./Route";


function Controller(root = "") {
  
  return (constructor: Function) => {
    const router = AppRouter.instance;
    const proto = constructor.prototype;

    
    for (let key in proto) {
      const { path, method, middlewares } = getMetaData(proto, key);
      if (typeof path !== "string" || typeof method !== "string") continue;
      router[method](`${root}${path}`, ...middlewares, proto[key]);
    }
  }
}


const getMetaData = (proto: any, key: string) => {
  
  const middlewares = Reflect.getMetadata(MetaData.MIDDLEWARE, proto, key) || [];
  const required: string[] = Reflect.getMetadata(MetaData.VALIDATE, proto, key);
  if (required) middlewares.push(validateRequest(required));

  return {
    path: Reflect.getMetadata(MetaData.PATH, proto, key) as string,
    method: Reflect.getMetadata(MetaData.METHOD, proto, key) as RequestMethod,
    middlewares: middlewares as RequestHandler[]
  }
}

export { Controller };