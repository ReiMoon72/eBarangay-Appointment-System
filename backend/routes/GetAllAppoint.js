import express from "express";
import { getAllOfAppointByUser } from '../controller/GetAllApp.js'
import { authMiddleware } from "../middleware/authentication.js";

const router = express.Router();

router.get("/viewappoiintment", authMiddleware, getAllOfAppointByUser)

export default router;