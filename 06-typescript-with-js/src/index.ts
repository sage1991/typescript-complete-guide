import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router } from "./routes/LoginRoutes";
import "./controllers/LoginController";
import { AppRouter } from "./AppRouter";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["cookie"] }));
app.use(router);
app.use(AppRouter.instance);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});