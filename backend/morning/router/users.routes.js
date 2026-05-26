import { Router } from "express";
import { UsersController } from "../controller/users.controller.js";
import Logger from "../middleware/logger.js";
const router = Router(); // initialize router

const usersController = UsersController();

// route get endpoint
router.get("/:id", usersController.getUser);

// router.get("/", (req, res) => {
//   return res.send("users");
// });

export default router;
