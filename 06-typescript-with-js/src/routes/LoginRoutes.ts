import { NextFunction, Request, Response, Router } from "express";


interface RequestWithBody extends Request {
  body: { [ key: string ]: string | undefined };
}

const requireAuth = (request: Request, response: Response, next: NextFunction): void => {
  if (request.session?.loggedIn) {
    next();
    return;
  }

  response.status(403);
  response.send("not permitted");
}


const router = Router();

router.get("/", (request: Request, response: Response): void => {
  if (request.session?.loggedIn) {
    response.send(`
      <div>
        <h3>you are logged in</h3>
        <a href="/logout">log-out</a>
      </div>
    `);
    return;
  }
  
  response.send(`
    <div>
      <h3>you are not logged in</h3>
      <a href="/login">log-in</a>
    </div>
  `);
});


router.get("/login", (request: Request, response: Response): void => {
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
});


router.post("/login", (request: RequestWithBody, response: Response): void => {
  const { email, password } = request.body;
  if (email && password) {
    if (email === "harry@naver.com" && password === "123") {
      request.session = { loggedIn: true };
    }
    response.redirect("/");
    return;
  }

  response.send("you must provide email and password");
});


router.get("/logout", (request: Request, response: Response): void => {
  request.session = null;
  response.redirect("/");
});



router.get("/protected", requireAuth, (request: Request, response: Response): void => {
  response.send("welcome!!");
});


export { router };