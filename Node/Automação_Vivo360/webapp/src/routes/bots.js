import express from 'express';
import BotController from '../controllers/BotController';

const router = express.Router();

router.get('/bots', BotController.getBots);
router.get('/bots/:id', BotController.getBotsById);
router.post('/bots', BotController.create);
router.put('/bots/:id', BotController.update);
router.delete('/bots/:id', BotController.delete);

export default router;