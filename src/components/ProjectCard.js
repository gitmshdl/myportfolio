import React from "react";
import { Col } from "react-bootstrap";
import classes from "./ProjectCard.module.css";
import { TbLivePhoto } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";

function ProjectCard({ title, description, image, link, github }) {
  return (
    <Col sm={6} md={4}>
      <div className={classes.imageBox}>
        <img src={image} alt={title} className={classes.image} />
        <div className={classes.text}>
          <h4 className={classes.title}>{title}</h4>
          <span className={classes.description}>{description}</span>
          <div className="pt-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat"
              }
            >
              <AiOutlineGithub size="3rem" />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat"
              }
            >
              <TbLivePhoto size="3rem" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
