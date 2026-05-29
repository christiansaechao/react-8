import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  signupUserInDB,
  usernameInUseCheck,
  passwordCheck,
} from "../services/auth.services";

export const signupController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(200).send("There's missing information");
  }

  const usernameCheck = await usernameInUseCheck(username);

  if (usernameCheck.length !== 0) {
    return res.status(409).json({ message: "Username already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = signupUserInDB({ username: username, password: hashedPassword });

  res.status(201).json(user);
};

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(200).send("There's missing information");
  }

  const dbPassword = await passwordCheck(username);
  const pw = await bcrypt.compare(password, dbPassword);

  if (!pw) {
    return res.status(403).json({ message: "🐑" });
  }

  return res.status(200).json({ message: "yay!" });
};
