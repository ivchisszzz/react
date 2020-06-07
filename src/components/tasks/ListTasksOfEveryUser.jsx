import React, { Component } from "react";
import { withRouter } from "react-router";
import { getAllTasksForEveryUser, deleteTask } from "../api/TasksApi";
import { isLoggedUser } from "../api/UsersApi";
import { Row, Col, Button } from "react-bootstrap";

class ListTasksOfEveryUser extends Component {
  state = {
    loggedUser: isLoggedUser(),
    tasks: [],
  };
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    getAllTasksForEveryUser(this.state.loggedUser.id).then((data) =>
      this.setState({ tasks: data })
    );
  }

  handleDelete = (id) => {
    deleteTask(id).then(() => {
      this.setState((prevState) => {
        return {
          tasks: prevState.tasks.filter((task) => task.id !== id),
        };
      });
      this.props.history.push(
        getAllTasksForEveryUser(this.state.loggedUser.id)
      );
    });
  };
  render() {
    return (
      <>
        <Button href="/task">Create Task</Button>
        <Row
          style={{
            fontWeight: "bold",
            textSizeAdjust: "28px",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <Col md={1}></Col>
          <Col md={2}>Task Name</Col>
          <Col md={2}>Task Description</Col>
          <Col md={2}>Evaluation</Col>
          <Col md={2}>Status</Col>
          <Col md={3}></Col>
        </Row>
        {this.state.tasks &&
          this.state.tasks.map((task) => (
            <Row key={task.id}>
              <Col md={1}></Col>
              <Col md={2}>{task.taskName}</Col>
              <Col md={2}>{task.taskDescription}</Col>
              <Col md={2}>{task.evaluation}</Col>
              <Col md={2}>{task.taskStatus}</Col>
              <Col md={3}>
                <Button variant="link" href={`/tasks/${task.id}/update`}>
                  Update
                </Button>

                <Button
                  variant="link"
                  onClick={this.handleDelete.bind(this, task.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
      </>
    );
  }
}
export default withRouter(ListTasksOfEveryUser);
