import express from 'express';
import TaskController from '../controllers/TaskController';

const router = express.Router();

router.get('/tasks', TaskController.getTasks);
router.get('/tasks/:id', TaskController.getTasksById);
router.post('/tasks', TaskController.create);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

export default router;