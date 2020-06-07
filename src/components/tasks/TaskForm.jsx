import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { STATUSES } from "./TaskStatus";
import { withRouter } from "react-router";
import { isLoggedUser } from "../api/UsersApi";

import { createTask } from "../api/TasksApi";

class TaskForm extends Component {
  state = {
    id: "",
    taskName: "",
    taskDescription: "",
    evaluation: "",
    taskStatus: "",
    userId: isLoggedUser().id,
  };

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
              createTask(this.state);
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
                required
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
                required
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
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                required
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
              Add Task
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}
export default withRouter(TaskForm);
