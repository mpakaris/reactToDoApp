import { Tasks } from '../models/tasks';

export const taskService = {
  async getTasks() {
    return Tasks
  },

  async addTask(task) {
    let tasks = [...Tasks]
    tasks.push(task)
    return tasks;
  },

  // async deleteTasks() {
  //   return TASKS;
  // },

  // async updateTask() {
  //   return TASKS;
  // },
};
