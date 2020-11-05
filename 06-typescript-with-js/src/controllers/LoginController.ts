import { NextFunction, Response } from "express";
import { Controller, GetMapping, PostMapping, Use, Validate } from "./decorators";
import { Request } from "./types/Http";


function logger(request: Request, response: Response, next: NextFunction) {
  console.log(`request was made!!`);
  next();
}

@Controller("/auth")
class LoginController {

  @Use(logger)
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

  
  @Validate("email", "password")
  @PostMapping("/login")
  loginHandler(request: Request<{ email: string, password: string }>, response: Response): void {
    const { email, password } = request.body;
    if (email === "harry@naver.com" && password === "123") {
      request.session = { loggedIn: true };
      response.redirect("/");
    } else {
      response.send("invalid email or password");
    }
  }


  @GetMapping("/logout")
  getLogout(request: Request, response: Response): void {
    request.session = null;
    response.redirect("/");
  }
}


export { LoginController };