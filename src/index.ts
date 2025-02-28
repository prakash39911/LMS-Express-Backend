import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "../src/routes/authRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", authRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Started on PORT", process.env.PORT);
});
