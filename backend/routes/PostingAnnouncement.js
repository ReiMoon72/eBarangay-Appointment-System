import express from "express";
import { authMiddleware } from "../middleware/authentication.js";
import { PostAnnouncementAdmin } from '../controller/PostAnnouncement.js'

const router = express.Router();

router.post("/admin/announcement-post", authMiddleware, PostAnnouncementAdmin)

export default router;
