import express from "express";
import { userGetBook } from "../controller/AppointmentGet.js";
import { authMiddleware } from "../middleware/authentication.js";

const router = express.Router();

router.get("/userdashboard", authMiddleware, userGetBook);

export default router;
