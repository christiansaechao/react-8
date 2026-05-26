import express from "express";
import cors from "cors";
import "dotenv/config";
import AnimalRouter from "./routes/animals.routes.js";
import logger from "./middleware/logger.js";

const app = express(); // initialized our node/express application
app.use(express.json()); // middleware => parses all incoming requests if there is json in the body
app.use(cors()); // cors, cross origin resource script
app.use(logger);

app.use("/animals", AnimalRouter)

app.listen(3000, () => console.log("Server running on port 3000"));
