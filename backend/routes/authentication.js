import express from "express"; 
import {logInuser} from '../controller/authen.js'

const router = express.Router();

router.post("/login", logInuser);

export default router;