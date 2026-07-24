import express from "express";
import { userAppoint } from "../controller/AppointmentSched.js";
import { authMiddleware } from "../middleware/authentication.js";

const router = express.Router();

router.post("/userconfirmation", authMiddleware, userAppoint);

export default router;
