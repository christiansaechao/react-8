import express from "express";
import { getAnimals, createAnimals, getSpecificAnimal, updateAnimals, deleteAnimal} from "../controllers/animals.controllers.js";
const router = express.Router();
import logger from "../middleware/logger.js";

// all prefixed with /animals

// localhost:3000/animals

router.get("/", getAnimals);

router.get("/:id", getSpecificAnimal);

router.post("/", createAnimals);

router.put("/:id", updateAnimals)

router.delete("/:id", deleteAnimal);

export default router;
