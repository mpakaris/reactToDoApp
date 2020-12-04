import express from 'express';
import { helloController, taskController } from '../controllers';
const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/getTasks', taskController.get);
router.post('/addTask', taskController.post);
// router.get('/deleteTask', taskController.delete);
// router.get('/addTask', taskController.put);

export default router;
