import express from "express";
import * as userController from "../controllers/UserController";
import {validateUser} from "../middleware/validateUser";


// users

const router = express();

//get routes
router.get("/:id", validateUser, userController.getUser);

// create routes
router.post("/", userController.createAUser);

//Delete user
router.delete('/:id', validateUser, userController.deleteUser);

export default router;