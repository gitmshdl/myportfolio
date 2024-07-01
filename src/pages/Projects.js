import React from "react";
import classes from "./Projects.module.css";
import starbucks from "../assets/starbucks-clone.png";
import netflix from "../assets/netflix.jpg";
import notemap from "../assets/notemap.jpg";
import sushi from "../assets/sushi.jpg";
import expense from "../assets/expense.jpg";
// import myfirstsite from "../assets/my-portfolio.jpg";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import news from "../assets/news.png";
import realEstate from "../assets/real-estate.png";

function Projects() {
  const title = "Projects";
  const projects = [
    {
      title: "Real Estate UI",
      description: "Real Estate Website using React Bootstrap",
      image: realEstate,
      link: "https://real-estate-clone-sooty.vercel.app/",
      github: "https://github.com/gitmshdl/real-estate-clone",
    },
    {
      title: "Canada News",
      description: "Live News in Canada using React Bootstrap",
      image: news,
      link: "https://news-seven-jade.vercel.app/",
      github: "https://github.com/gitmshdl/news",
    },
    {
      title: "Starbucks Clone",
      description: "Starbucks Canada Official Website Clone using Material UI",
      image: starbucks,
      link: "https://starbucks-clone-liart.vercel.app/",
      github: "https://github.com/gitmshdl/starbucks-clone",
    },
    {
      title: "Netflix Clone",
      description: "Netflix UI using React Bootstrap and MongoDB",
      image: netflix,
      link: "https://netflix-ui-sable.vercel.app/login",
      github: "https://github.com/gitmshdl/netflix-clone",
    },
    {
      title: "Note Map",
      description:
        "Map from Leaflet library asks your current location and share your messages with other users.",
      image: notemap,
      link: "https://note-map.vercel.app/",
      github: "https://github.com/gitmshdl/notemap",
    },
    {
      title: "Sushi",
      description: "Food ordering UI using React.",
      image: sushi,
      link: "https://sushi-mu.vercel.app/",
      github: "https://github.com/gitmshdl/sushi",
    },
    {
      title: "Expense",
      description: "Simple expense list that you can track of.",
      image: expense,
      link: "https://expenses-gitmshdl.vercel.app/",
      github: "https://github.com/gitmshdl/expenses",
    },
    // {
    //   title: "Portfolio Sample",
    //   description: "",
    //   image: myfirstsite,
    //   link: "https://my-website-snowy-six.vercel.app/",
    //   github: "https://github.com/gitmshdl/my-website",
    // },
  ];

  return (
    <div className={classes.container} id="projects">
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
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
