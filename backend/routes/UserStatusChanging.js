import express from "express";
import { authMiddleware } from '../middleware/authentication.js'
import { UserStatusChange } from '../controller/StatusUser.js'

const router = express.Router();

router.patch("/admin/appointment/:id", authMiddleware, UserStatusChange)

export default router;