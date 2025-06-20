import React from "react";
import classes from "./About.module.css";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  const title1 = "Hi, I am David Lee";
  const title2 = "Financial Analyst / Accountant / Data Analyst";
  return (
    <div className={classes.container} id="about">
      <Container>
        <Row g={3}>
          <Col xs={12} md={6} xl={5} className={`${classes.left} mb-3`}>
            <h1
              className={`${classes.title} animate__animated animate__slideInDown`}
            >
              {[...title1].map((char, index) => (
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
            <h1
              className={`${classes.title} animate__animated animate__slideInDown`}
            >
              {[...title2].map((char, index) => (
                <span
                  key={index}
                  className={
                    "ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat mb-2"
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <h6
              className={`${classes.text} animate__animated animate__slideInDown`}
            >
              Financial Analysis / Data / SQL Fan
            </h6>
          </Col>
          <Col xs={12} md={6} xl={7} className={`${classes.right} mb-3`}>
            <h6>
              My journey into the world of programming began during the onset of
              the COVID-19 pandemic. Before the outbreak, I pursued a career in
              accounting, but I sensed a desire for something more fulfilling
              and dynamic. It was during this time that I delved into the realm
              of data and coding, seeking a new avenue to channel my passion and
              creativity. <br />
              As I immersed myself into data, I quickly realized the vast
              potential and endless possibilities it offered. Each line of data
              became a brushstroke, painting a picture of innovation and
              problem-solving.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
