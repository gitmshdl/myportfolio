import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from "./Header.module.css";
import { ReactTyped } from "react-typed";
import { ArrowRightCircle } from "react-bootstrap-icons";
import img from "../assets/21004063-removebg.png";

function Header() {
  const title = "Welcome to my Portfolio";

  return (
    <div className={classes.container}>
      <Container>
        <Row className={`${classes.rowContainer} align-itmes-center`}>
          <Col xs={12} md={6} xl={7}>
            <h1
              className={`${classes.title} animate__animated animate__slideInDown`}
            >
              {[...title].map((char, index) => (
                <span
                  key={index}
                  className={
                    "ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat"
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <ReactTyped
              strings={[
                "Financial Analyst",
                "Accountant",
                "Dana Analyst",
                "Front-End Developer",
                "UI/UX Designer",
                "Problem Solver",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input type="text" />
            </ReactTyped>
            <h2 className={classes.text}>
              Resolving design problems, building smart user interfaces and
              useful interactions, developing rich data analysis.
            </h2>
            <Button
              variant="outline"
              size="lg"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#contact"
              className={`${classes.btn} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat`}
            >
              Let's Connect <ArrowRightCircle size={25} />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
            <img src={img} alt="icon" className={classes.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
