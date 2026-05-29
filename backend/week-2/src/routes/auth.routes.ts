import express from "express";
import { loginController, signupController } from "../controllers/auth.controllers";

export const AuthRouter = express.Router();

AuthRouter.post("/signup", signupController)
AuthRouter.post("/login", loginController)