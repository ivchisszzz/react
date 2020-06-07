import axios from "axios";

const api = "http://localhost:3005";

export function getAllUsers() {
  return axios.get(`${api}/users`);
}

export function getUserById(userId) {
  return axios.get(`${api}/users/${userId}`).then((response) => response.data);
}

export function register(data) {
  return axios.post(`${api}/users`, data);
}

export function deleteUser(id) {
  return axios.delete(`${api}/users/${id}`);
}

export function updateUser(data) {
  return axios.put(`${api}/users/${data.id}`, data);
}

export function isLoggedUser() {
  return JSON.parse(localStorage.getItem("loggedUser"));
}

export async function login(data) {
  const allUsers = (await getAllUsers()).data;

  const loggedUser = allUsers.find(
    (user) =>
      user.email === data.email && user.password.toString() === data.password
  );
  if (loggedUser) {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    return;
  }
  throw new Error("Incorrect e-mail/password");
}
export function logout() {
  localStorage.removeItem("loggedUser");
}
