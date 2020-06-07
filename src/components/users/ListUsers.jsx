import React, { Component } from "react";
import { getAllUsers, deleteUser } from "../api/UsersApi";
import { Row, Col, Button, FormCheck } from "react-bootstrap";
class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    getAllUsers().then((response) => this.setState({ users: response.data }));
  }

  handleDelete = (id) => {
    deleteUser(id).then(() => {
      this.setState((prevState) => {
        return { users: prevState.users.filter((user) => user.id !== id) };
      });
      this.props.history.push(getAllUsers());
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
          <Col md={2}>Username</Col>
          <Col md={2}>Email</Col>
          <Col md={2}>Password</Col>
          <Col md={2}>Admin</Col>
          <Col md={3}></Col>
        </Row>
        {this.state.users.map((user) => (
          <Row key={user.id}>
            <Col md={1}></Col>
            <Col md={2}>{user.username}</Col>
            <Col md={2}>{user.email}</Col>
            <Col md={2}>{user.password}</Col>
            <Col md={2}>
              <FormCheck disabled checked={user.isAdmin}></FormCheck>
            </Col>
            <Col md={3}>
              <Button variant="link" href={`/users/${user.id}/update`}>
                Update
              </Button>

              <Button
                variant="link"
                onClick={this.handleDelete.bind(this, user.id)}
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
export default ListUsers;
