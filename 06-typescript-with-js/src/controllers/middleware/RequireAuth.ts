import { RequestHandler, Response, Request, NextFunction } from "express";


export const requireAuth: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
  if (!request.session || !request.session.loggedIn) {
    response.status(403)
          .send("not permitted");
    return;
  }
  next();
}