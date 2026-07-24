import express from "express";
import { authMiddleware } from "../middleware/authentication.js";
import { NewPassword } from '../controller/ForgoPassword.js'

const router = express.Router();

router.patch("/forgotpassword", authMiddleware, NewPassword)

export default router;