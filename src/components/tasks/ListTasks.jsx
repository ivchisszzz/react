import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import { getAllTasks, deleteTask } from "../api/TasksApi";

class ListTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    getAllTasks().then((response) => this.setState({ tasks: response.data }));
  }
  handleDelete = (id) => {
    deleteTask(id).then(() => {
      this.setState((prevState) => {
        return {
          tasks: prevState.tasks.filter((task) => task.id !== id),
        };
      });
      this.props.history.push(getAllTasks());
    });
  };

  render() {
    return (
      <>
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
        {this.state.tasks.map((task) => (
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
export default withRouter(ListTask);
