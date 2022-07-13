import express from 'express';
const router = express.Router();
import meController from '../controllers/MeController.js';

router.get('/courses', meController.storedCourses);

export default router;
