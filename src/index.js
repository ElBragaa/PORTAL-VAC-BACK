import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import UserRouter from "./routes/SchedulingRouter.js";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;

mongoose.connect(DATABASE_URL).then(() => {
    console.log("Database conected...")
}).catch(() => {
    console.error(error);
});

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan("combined"));

app.use(UserRouter);


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});
