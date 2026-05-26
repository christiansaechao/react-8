import express from "express";
import * as Controller from "../controllers/MovieController.js";

export const router = express.Router();
// prefixed with /movies

router.get("/", Controller.allMovies);

router.put("/:id", Controller.MovieUpdate);

router.post("/", Controller.createMovie);

router.delete('/', Controller.deleteMovie);

export default router;