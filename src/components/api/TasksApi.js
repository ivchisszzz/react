import axios from "axios";

const api = "http://localhost:3005";

export function getAllTasks() {
  return axios.get(`${api}/tasks`);
}

export function getTaskById(taskId) {
  return axios.get(`${api}/tasks/${taskId}`).then((response) => response.data);
}

export function deleteTask(taskId) {
  return axios.delete(`${api}/tasks/${taskId}`);
}

export function updateTask(data) {
  return axios.put(`${api}/tasks/${data.id}`, data);
}

export async function getAllTasksForEveryUser(id) {
  const tasks = (await getAllTasks()).data;
  return tasks.filter((task) => task && task.userId === id);
}

export function createTask(data) {
  return axios.post(`${api}/tasks`, data);
}
