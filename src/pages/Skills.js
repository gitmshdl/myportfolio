import React from "react";
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNpm,
  DiReact,
  DiVisualstudio,
} from "react-icons/di";
import { SiMicrosoftexcel, SiMysql, SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import classes from "./Skills.module.css";
import { Container, Stack } from "react-bootstrap";
import { TbCircleLetterR } from "react-icons/tb";
import { IoLogoTableau } from "react-icons/io5";

function Skills() {
  const title = "Skills";
  const logos = [
    {
      title: "MySQL",
      badge: (
        <SiMysql
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "MS Excel",
      badge: (
        <SiMicrosoftexcel
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "R",
      badge: (
        <TbCircleLetterR
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "Tableau",
      badge: (
        <IoLogoTableau
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "MongoDB",
      badge: (
        <DiMongodb
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "HTML",
      badge: (
        <DiHtml5
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "CSS",
      badge: (
        <DiCss3
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "Javascript",
      badge: (
        <DiJsBadge
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "React",
      badge: (
        <DiReact
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "Redux",
      badge: (
        <SiRedux
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "Bootstrap",
      badge: (
        <DiBootstrap
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "Git",
      badge: (
        <FaGitAlt
          className={`${classes.icon} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat}`}
        />
      ),
    },
    {
      title: "Visual Studio",
      badge: <DiVisualstudio className={classes.icon} />,
    },
    { title: "npm", badge: <DiNpm className={classes.icon} /> },
  ];
  return (
    <>
      <div className={classes.control} />
      <div className={classes.container} id="skills">
        <Container className="text-center">
          <h1
            className={`${classes.title} animate__animated animate__slideInDown mb-3`}
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
          <Stack className="mt-3 mb-5">
            <h6>The main area of expertise is working with data.</h6>
            <h6>
              I naturally see numbers with a strong background in mathematics
              and programming, I am adept at handling complex datasets and
              transforming raw data into actionable intelligence."
            </h6>
            <h6>
              Get my{" "}
              <a
                href="https://drive.google.com/file/d/17OpQEELj_hf0Iry93whznDFwlKtWwA4q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className={`${classes.resume} ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat`}
                >
                  resume
                </span>
              </a>{" "}
              for more details!
            </h6>
          </Stack>
          <Stack
            direction="horizontal"
            gap={4}
            className="d-flex justify-content-center flex-wrap mx-auto w-50"
          >
            {logos.map((logo) => (
              <div key={logo.title}>
                <div>{logo.badge}</div>
                <div>{logo.title}</div>
              </div>
            ))}
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default Skills;
