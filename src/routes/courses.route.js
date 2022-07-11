import express from 'express';
const router = express.Router();
import courseController from '../controllers/CoursesController.js';

router.get('/:id', courseController.detail);

export default router;
