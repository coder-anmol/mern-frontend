import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-fixed">
      <Container>
        <Navbar.Brand className="fs-3">
          <NavLink exact to="/" className="nav-link text-white">
            Anmol Sharma
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className="nav-link fs-5 ms-lg-5"
              to="/"
              exact
              activeClassName="fw-bold active"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link fs-5 ms-lg-5"
              to="/about"
              activeClassName="fw-bold active"
            >
              About
            </NavLink>
            <NavLink
              className="nav-link fs-5 ms-lg-5"
              to="/contact"
              activeClassName="fw-bold active"
            >
              Contact
            </NavLink>
            <NavLink
              className="nav-link fs-5 ms-lg-5"
              to="/projects"
              activeClassName="fw-bold active"
            >
              Projects
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
