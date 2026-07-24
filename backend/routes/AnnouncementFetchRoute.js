import express from "express";
import { AnnouncementFetchUserSide } from "../controller/FetchAnnouncementPage.js";
import { authMiddleware } from "../middleware/authentication.js";

const router = express.Router();

router.get("/userdashboard", authMiddleware, AnnouncementFetchUserSide);

export default router;
