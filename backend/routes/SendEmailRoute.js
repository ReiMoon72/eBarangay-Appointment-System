import express from 'express'
import { SendEmailToUser } from '../controller/SendEmail.js'

const router = express.Router();

router.post('/contact', SendEmailToUser)

export default router;