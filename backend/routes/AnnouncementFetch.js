import express from "express";
import { authMiddleware } from "../middleware/authentication.js";
import { FetchAnnouncement } from '../controller/GetAnnouuncemenFetch.js'

const router = express.Router();

router.get('/admin/see-announcement', authMiddleware, FetchAnnouncement)

export default router;