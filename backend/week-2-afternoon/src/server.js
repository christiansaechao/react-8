import express from "express";
import cors from "cors";
import "dotenv/config";
import { pgPool } from "./utils/pgClicent.js";
import { prisma } from "./utils/prismaClient.js";
import UsersRouter from "./routes/routes.user.js";
import ProductRouter from "./routes/routes.product.js";
import CartRouter from "./routes/routes.cart.js";
import signUpRoutes from "./routes/signUpRoutes.ts";
import logInRoutes from "./routes/routes.logIn.ts";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", UsersRouter);
app.use("/cart", CartRouter);
app.use("/product", ProductRouter);
app.use("/signup", signUpRoutes);
app.use("/login", logInRoutes);

// app.use("/sign-up", sign)
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

app.get("/prisma-test", async (req, res) => {
  try {
    const data = await prisma.users.findMany();
    console.log(data);
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(3000, () => console.log("Server is running: 3000"));