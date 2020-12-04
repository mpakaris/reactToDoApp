import express from 'express';
import { helloController, taskController } from '../controllers';
const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/getTasks', taskController.get);
router.post('/addTask', taskController.post);
router.delete('/deleteTask', taskController.delete);
router.put('/changeStatus', taskController.put);

export default router;
