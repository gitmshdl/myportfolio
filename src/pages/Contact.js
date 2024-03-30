import React from "react";
import classes from "./Contacts.module.css";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Footer from "../components/Footer";
import image from "../assets/—Pngtree—shake hands_8742463.png";

function Contact() {
  const title = "Contacts";
  return (
    <div className={classes.container} id="contacts">
      <Container>
        <h1
          className={`${classes.title} animate__animated animate__slideInDown text-center`}
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
        <Row>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
            <img src={image} alt="shacking hands" className={classes.image} />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <Stack gap={3} className="mt-3">
              <h6>
                Feel free to reach out to me for any inquiries, collaboration
                opportunities, or just to say hello!
              </h6>
              <h6>
                I'm always eager to connect with fellow professionals, share
                ideas, and explore exciting projects.
              </h6>
              Let's create something extraordinary together!
              <a href="mailto:s.h.david.lee21@gmail.com">
                <h3 className={classes.email}>s.h.david.lee21@gmail.com</h3>
              </a>
              <Footer />
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
