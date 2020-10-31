import { Request, Response } from "express";
import { Controller, GetMapping } from "./decorators";


@Controller("/auth")
class LoginController {

  @GetMapping("/login")
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