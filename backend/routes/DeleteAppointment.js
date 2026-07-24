import express from "express";
import { DeleteAppointment } from "../controller/DeleteAppoint.js";
import { authMiddleware } from "../middleware/authentication.js";

const router = express.Router();

router.delete(
  "/userdashboard/:UserAppointID",
  authMiddleware,
  DeleteAppointment,
);

export default router;
