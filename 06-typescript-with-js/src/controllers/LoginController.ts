import { Request, Response } from "express";
import { Controller } from "./decorators/Controller";
import { GetMapping } from "./decorators/GetMapping";


@Controller("/login")
class LoginController {

  @GetMapping()
  getLogin(request: Request, response: Response): void {
    response.send(`
      <form method="post">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">submit</button>
      </form>
    `);
  }
}


export { LoginController };