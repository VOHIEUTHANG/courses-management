import express from 'express';
const router = express.Router();
import courseController from '../controllers/CoursesController.js';

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/update/:id', courseController.update);
router.get('/edit/:id', courseController.edit);
router.get('/detail/:id', courseController.detail);
router.patch('/delete/:id', courseController.delete);
router.patch('/restore/:id', courseController.restore);
router.get('/recycle-bin', courseController.trashCourse);

export default router;
