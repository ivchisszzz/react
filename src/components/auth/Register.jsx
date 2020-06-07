import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

import { register } from "../api/UsersApi";
import { withRouter } from "react-router";

class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    isAdmin: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h1>Register</h1>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              register(this.state).then(() => this.props.history.push("/"));
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
                required
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
                required
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
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}
export default withRouter(Register);
