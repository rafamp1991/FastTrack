import express from 'express';
import TaskController from '../controllers/TaskController';

const router = express.Router();

router.get('/tasks', TaskController.index);
router.post('/tasks/create', TaskController.create);

export default router;