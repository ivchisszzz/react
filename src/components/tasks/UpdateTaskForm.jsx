import React, { Component } from "react";
import { withRouter } from "react-router";
import { Form, Button, Row, Col } from "react-bootstrap";
import { isLoggedUser } from "../api/UsersApi";
import { STATUSES } from "./TaskStatus";
import { updateTask, getTaskById } from "../api/TasksApi";

class UpdateTaskForm extends Component {
  state = {
    id: "",
    taskName: "",
    taskDescription: "",
    evaluation: "",
    taskStatus: "",
    userId: isLoggedUser().id,
    loggedUser: isLoggedUser(),
  };
  componentDidMount() {
    const { taskId } = this.props.match.params;
    getTaskById(taskId).then((task) => this.setState({ ...task }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form
            onSubmit={(event) => {
              event.preventDefault();

              updateTask(this.state).then(() => {
                if (this.state.loggedUser && this.state.loggedUser.isAdmin) {
                  this.props.history.push("/tasks");
                } else {
                  this.props.history.push("/tasksUser");
                }
              });
            }}
          >
            <Form.Group controlId="formBasicName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                name="taskName"
                placeholder="Enter task name"
                onChange={this.handleChange}
                value={this.state.taskName}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                name="taskDescription"
                placeholder="Enter desciption"
                onChange={this.handleChange}
                value={this.state.taskDescription}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEvaluation">
              <Form.Label>Evaluation</Form.Label>
              <Form.Control
                type="number"
                name="evaluation"
                placeholder="Evaluation"
                onChange={this.handleChange}
                value={this.state.evaluation}
              />
            </Form.Group>
            <Form.Group controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="taskStatus"
                onChange={this.handleChange}
                value={this.state.taskStatus}
              >
                {STATUSES.map((taskStatus) => (
                  <option>{taskStatus}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Task
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}
export default withRouter(UpdateTaskForm);
