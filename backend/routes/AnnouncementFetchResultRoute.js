import express from 'express'
import { FetchAnnouncement } from '../controller/GetAnnouuncemenFetch.js'
import { authMiddleware } from '../middleware/authentication.js'

const router = express.Router(); 

router.get('/announcement-board', authMiddleware, FetchAnnouncement);

export default router;