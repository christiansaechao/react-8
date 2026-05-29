import type { Request, Response } from "express";
import { signUp, getUser } from "../services/signUpService";
import bcrypt from "bcrypt";

export const signUpController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.error("no username or password");
    return res.status(200).send({ msg: "Missing credentials" });
  }

  const existingUser = await getUser(username);

  if (existingUser) {
    return res.status(200).json({ msg: "user already exists" });
  }

  console.log(`username:${username} password:${password}`);
  const saltRounds = 10;
  const secretPassword = await bcrypt.hash(password, saltRounds);
  console.log(secretPassword);
  try {
    console.log("trying signup service");
    const user = await signUp(username, secretPassword);
    // jwt authenticated token
    return res.status(200).json({ msg: "successfully created user", user });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};
