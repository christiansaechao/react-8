import express from "express";
import cors from "cors";
import "dotenv/config";
import { pgPool } from "./utils/pgClicent.js";
import { router } from "./routes/movies.route.ts";
import {AuthRouter} from "./routes/auth.routes.ts"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/movies", router);

app.use("/auth", AuthRouter)

// Health Check (base route)
app.get("/", (req, res) => {
  return res.status(200).send({ msg: "Successfully reaching the backend." });
});

// Example Code
app.get("/pg-test", async (req, res) => {
  try {
    const { rows } = await pgPool.query("SELECT * FROM users");
    res.json({
      message: "Database connected!",
      users: rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.listen(3000, () => console.log("Server is running: 3000"));