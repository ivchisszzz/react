import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { login } from "../api/UsersApi";

class Login extends Component {
  state = {
    password: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h1>Login</h1>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              login(this.state).then(() => {
                this.props.history.push("/");
                window.location.reload();
              });
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
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
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
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

export default Login;
