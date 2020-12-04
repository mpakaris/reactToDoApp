import { taskService } from '../services';

export const taskController = {
  async get(req, res) {
    let data = await taskService.getTasks();
    console.log(data)
    res.status(200).json(data);
  },

  async post(req, res) {
    console.log(req.body)
    let data = await taskService.addTask(req.body);
    console.log(data)
    res.status(200).json(data);
  },

  // async put(req, res) {
  //   let data = await taskService.getTasks();
  //   res.status(200).json(data);
  // },

  // async delete(req, res) {
  //   let data = await taskService.getTasks();
  //   res.status(200).json(data);
  // },

};
