import session from 'express-session';
import { taskService } from '../services';

export const taskController = {
  async get(req, res) {
    console.log(session)
    let data = await taskService.getTasks();
    res.status(200).json(data);
  },

  async post(req, res) {
    let data = await taskService.addTask(req.body);
    res.status(200).json(data);
  },

  async put(req, res) {
    let data = await taskService.updateStatus(req.body);
    res.status(200).json(data);
  },

  async delete(req, res) {
    let data = await taskService.deleteTasks(req.body);
    res.status(200).json(data);
  },
};
