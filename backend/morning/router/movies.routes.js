import { Router } from "express";

const router = Router();

router.get("", (req, res) => {
  res.send("movies");
});

router.get("/movies/:id", (req, res) => {
  const id = req.params.id; // 1
});

export default router;
