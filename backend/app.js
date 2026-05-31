import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectedDB } from "./model/Database.js";
import authRoutes from "./routes/authentication.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/auth", authRoutes);

connectedDB();

app.listen(PORT, () => {
  console.log(`The Server is Running at Port ${PORT}`);
});
