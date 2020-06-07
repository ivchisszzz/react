import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ListUsers from "./components/users/ListUsers";
import UserForm from "./components/users/UserForm";
import TaskForm from "./components/tasks/TaskForm";
import ListTasks from "./components/tasks/ListTasks";
import UpdateTaskForm from "./components/tasks/UpdateTaskForm";
import ListTasksOfEveryUser from "./components/tasks/ListTasksOfEveryUser";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={ListUsers} />
      <Route exact path="/users/:userId/update" component={UserForm} />
      <Route exact path="/task" component={TaskForm} />
      <Route exact path="/tasks" component={ListTasks} />
      <Route exact path="/tasks/:taskId/update" component={UpdateTaskForm} />
      <Route exact path="/tasksUser" component={ListTasksOfEveryUser} />
      {/* <AuthenticationComponent exact path="/tasks" component={ListTasks} />
      <AuthenticationComponent
        exact
        path="/tasks/create"
        component={TaskForm}
      />
      <AuthenticationComponent
        exact
        path="/tasks/update/:taskId"
        component={TaskForm}
      />
      <AuthenticationComponent exact path="/users" component={ListUsers} />
      <AuthenticationComponent
        exact
        path="/users/create"
        component={UserForm}
      />
      <AuthenticationComponent
        exact
        path="/users/update/:userId"
        component={UserForm}
      /> */}
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
