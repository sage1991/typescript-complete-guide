import { AppRouter } from "../../AppRouter";
import { RequestMethod, RouteMeta } from "./Route";


function Controller(root = "/") {
  
  return (constructor: Function) => {
    const router = AppRouter.instance;
    const proto = constructor.prototype;

    for (let key in proto) {
      const path: string = Reflect.getMetadata(RouteMeta.PATH, proto, key);
      const method: RequestMethod = Reflect.getMetadata(RouteMeta.METHOD, proto, key);
      if (!path || !method) return;
      router[method](`${root}${path}`, proto[key]);
    }
  }
}

export { Controller };