import { Request as ExpressRequest } from "express";

interface Request<T = any> extends ExpressRequest {
  body: T;
}

export { Request };