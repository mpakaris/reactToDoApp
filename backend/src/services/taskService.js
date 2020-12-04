import { Tasks } from '../models/tasks';
const fs = require('fs');

export const taskService = {

  async getTasks() {
    let tasks = Tasks;
    this.saveTasks(tasks);
    return tasks
  },

  async addTask(task) {
    let response = JSON.parse(fs.readFileSync("output.json", 'utf8'))
    response.push(task)
    this.saveTasks(response)
    return response;
  },

  async deleteTasks(taskName) {
    let response = JSON.parse(fs.readFileSync("output.json", 'utf8'))
    let returnArray = response.filter(task => {
      if (task.name !== taskName.name) {       
        return task;
      }
    })
    this.saveTasks(returnArray)
    return returnArray
  },
  
  async updateStatus(taskName) {
    let response = JSON.parse(fs.readFileSync("output.json", 'utf8'))    
    let returnArray = response.map(task => {
      if (task.name === taskName.name) {
        task.status = !task.status
        return task
      }
      return task;
    })
    this.saveTasks(returnArray)
    return returnArray;
  },

  async saveTasks(jsonData) {
    let jsonContent = JSON.stringify(jsonData);    
    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    });
  }
 };
