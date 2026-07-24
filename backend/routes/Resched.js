import express from "express";
import { UserReschedule } from '../controller/Reschedule.js'
import { authMiddleware } from '../middleware/authentication.js'

const router = express.Router();

router.patch("/reschedule", authMiddleware, UserReschedule)

export default router;