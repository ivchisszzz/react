import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { updateUser, getUserById } from "../api/UsersApi";
import { withRouter } from "react-router";

class UserForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    isAdmin: false,
  };

  componentDidMount() {
    const { userId } = this.props.match.params;
    getUserById(userId).then((user) => this.setState({ ...user }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckBox(e) {
    this.setState({ isAdmin: !this.state.isAdmin });
  }
  render() {
    return (
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              updateUser(this.state).then(() =>
                this.props.history.push("/users")
              );
            }}
          >
            <Form.Group controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Admin"
                name="isAdmin"
                onChange={this.handleCheckBox.bind(this)}
                value={this.state.isAdmin}
                checked={this.state.isAdmin}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}
export default withRouter(UserForm);
