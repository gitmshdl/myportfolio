import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home" className={classes["bold-text"]}>
          DVLPR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" defaultActiveKey="#home" className="ms-auto">
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#home"
              className={classes["nav-link"]}
            >
              Home
            </Nav.Link>
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#about"
              className={classes["nav-link"]}
            >
              About
            </Nav.Link>
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#skills"
              className={classes["nav-link"]}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#projects"
              className={classes["nav-link"]}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#contacts"
              className={classes["nav-link"]}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
