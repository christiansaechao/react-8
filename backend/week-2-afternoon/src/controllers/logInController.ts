import type { Request, Response } from "express";
import { logIn } from "../services/logInService";

export const logInController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    console.error("no username or password");
    return;
  }

  const user = await logIn(username, password);
  if (user) {
    return res.status(200).json({ msg: "successfully logged in" });
  }
  return res.status(200).json({msg: `Wrong password for ${username}`});
};
