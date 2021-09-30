import express from "express";
import { home, profile } from "../controllers/globalController";
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,

} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.get("/profile", profile);

export default globalRouter;