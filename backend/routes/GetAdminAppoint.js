import express from "express";
import { AdminFetch } from '../controller/AdminFetchAll.js'
import { authMiddleware } from '../middleware/authentication.js'

const router = express.Router();

router.get("/admin/appointment", authMiddleware, AdminFetch)

export default router;