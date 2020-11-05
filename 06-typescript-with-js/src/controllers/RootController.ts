import { Response } from "express";
import { Controller, GetMapping, Use } from "./decorators";
import { requireAuth } from "./middleware/RequireAuth";
import { Request } from "./types/Http";


@Controller()
class RootController {

  @GetMapping()
  getHomePage(request: Request, response: Response): void {
    if (request.session?.loggedIn) {
      response.send(`
        <div>
          <h3>you are logged in</h3>
          <a href="/auth/logout">log-out</a>
        </div>
      `);
      return;
    }
    
    response.send(`
      <div>
        <h3>you are not logged in</h3>
        <a href="/auth/login">log-in</a>
      </div>
    `);
  }


  @Use(requireAuth)
  @GetMapping("/protected")
  getProtected(request: Request, response: Response): void {
    response.send("<h1>welcome to protected route!!</h1>");
  }
}


export { RootController };