import { NextFunction, Request, RequestHandler, Response } from "express";



const validateRequest = (keys: string[]): RequestHandler => (request: Request, response: Response, next: NextFunction) => {
  const { body } = request;
  
  if (!body) {
    response.status(422).send("invalid request");
    return;
  }

  for (let key of keys) {
    if (body[key]) continue;
    response.status(422).send(`invalid request. missing property "${key}"`);
    return;
  }

  next();
}

export { validateRequest };