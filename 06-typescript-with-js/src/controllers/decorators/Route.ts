
enum RouteMeta {
    PATH = "path",
    METHOD = "method"
}

enum RequestMethod {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
  PATCH = "patch"
}

function RequestMapping(path = "", method = RequestMethod.GET) {
  return (proto: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(RouteMeta.PATH, path, proto, key);
    Reflect.defineMetadata(RouteMeta.METHOD, method, proto, key);
  }
}

function routeBinder(method: RequestMethod) {
  return (path = "") => (proto: any, key: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(RouteMeta.PATH, path, proto, key);
    Reflect.defineMetadata(RouteMeta.METHOD, method, proto, key);
  }
}

const GetMapping = routeBinder(RequestMethod.GET);
const PostMapping = routeBinder(RequestMethod.POST);
const DeleteMapping = routeBinder(RequestMethod.DELETE);
const PutMapping = routeBinder(RequestMethod.PUT);
const PatchMapping = routeBinder(RequestMethod.PATCH);

export { 
  RequestMapping, 
  GetMapping, 
  PostMapping, 
  DeleteMapping, 
  PutMapping, 
  PatchMapping, 
  RouteMeta, 
  RequestMethod 
};