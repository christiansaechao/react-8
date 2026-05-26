import express from "express";
import cors from "cors";
import Logger from "./middleware/logger.js";

import { MoviesRouter, UsersRouter } from "./router/index.js";

const app = express();
app.use(cors());

// req.headers
// /users/1

app.use(Logger);

app.use("/users", UsersRouter);
app.use("/movies", MoviesRouter);

app.listen(3000, () => console.log("Server running on port: " + 3000));
