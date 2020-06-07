import React, { Component } from "react";
import { Navbar, Button, Nav, FormControl, Form } from "react-bootstrap";
import { logout, isLoggedUser } from "./api/UsersApi";
import { withRouter } from "react-router";

class Header extends Component {
  state = {
    loggedUser: isLoggedUser(),
  };
  render() {
    const { loggedUser } = this.state;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>

          {loggedUser && loggedUser.isAdmin && (
            <>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/tasks">Tasks</Nav.Link>
            </>
          )}

          {loggedUser ? (
            <>
              <Button
                variant="link"
                onClick={() => {
                  logout();
                  this.props.history.push("/");
                  window.location.reload();
                }}
              >
                Logout
              </Button>
              <Nav.Link href="/tasksUser">My Tasks</Nav.Link>
            </>
          ) : (
            <>
              {" "}
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </>
          )}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
export default withRouter(Header);
