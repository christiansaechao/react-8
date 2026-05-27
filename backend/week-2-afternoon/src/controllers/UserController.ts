import type { Request, Response } from "express";
import * as userService from "../services/service.users";

type UserType = {
  id: number;
  name: string;
  address: string;
};

export const getUser = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
    const user = await userService.getUser(Number(req.params.id));
    console.log("user");
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "broken controller" });
  }
};

export const createAUser = async (req: Request, res: Response) => {
  try {
    if (!req.body) return res.status(401).json({ error: "no body" });

    const { name, address } = req.body;
    console.log(`Name: ${name}, address: ${address}`);
    if (!name || !address) {
      return res.status(400).json({ error: "no name or address" });
    }

    const user: UserType = await userService.createUser(name, address);
    console.log(`User: ${user}`);
    return res.status(201).json({ user, msg: "success" });
  } catch (err) {
    return res.status(404).json({ error: "failed to create user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  if (!req.params.id) return res.status(401).json({ error: "no body" });
  const id = Number(req.params.id);
  const deletedUser = await userService.deleteUser(id);
  return res.status(200).json({ deletedUser, msg: "User deleted sucessfully" });
};
