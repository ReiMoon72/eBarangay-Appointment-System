import express from "express";
import { createUser } from "../controller/CreateAcc.js";

const router = express.Router();

router.post("/signin", createUser);

export default router;
