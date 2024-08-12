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
import sqlImage from "../assets/sql.jpg";
import lookerImage from "../assets/looker.png";

function Projects() {
  const title = "Projects";
  const projects = [
    {
      id: 12,
      title: "August, 2024 Toronto Weather Analysis",
      description: "Looker Dashboard on Toronto Weather during August, 2024",
      image: lookerImage,
      looker:
        "https://lookerstudio.google.com/reporting/06da62cc-ddf7-4229-a1f9-899f24d87869",
    },
    {
      id: 11,
      title: "Employees Data Analysis",
      description: "Looker Dashboard on Employee Data",
      image: lookerImage,
      looker:
        "https://lookerstudio.google.com/reporting/630dae55-171d-434f-8cd0-5b267740715d",
    },
    {
      id: 10,
      title: "2016 Rio Olympics Advertisements Data Analysis",
      description: "Looker Dashboard on 2016 Rio Olympics Advertisements data",
      image: lookerImage,
      looker:
        "https://lookerstudio.google.com/reporting/6c9f7968-318b-4f1f-a79d-a34dc0785829",
    },
    {
      id: 9,
      title: "Excel, Tableau, MySQL: Employee Analysis",
      description:
        "Sample employee data analysis using Excel, Tableau, and SQL",
      image: sqlImage,
      github:
        "https://github.com/gitmshdl/employee_analysis/blob/main/employee_sample_sql.sql",
      word: "https://docs.google.com/document/d/1iSTWnM4BuPGCM5lJsZyynce9bhgNMyQu/edit?usp=sharing&ouid=100836827384199721318&rtpof=true&sd=true",
    },
    {
      id: 8,
      title: "Excel,Tableau, MySQL: Data analysis on COVID19",
      description:
        "Sample data analysis during covid using Excel, Tableau, and SQL",
      image: sqlImage,
      github:
        "https://github.com/gitmshdl/portfolioproject-COVID-DATA-ANALYSIS/blob/main/PortfolioProject-COVID19.sql",
      word: "https://docs.google.com/document/d/1gLvcXSr0nJ8HDQ4CzgzRmH4CwvF5MvJp/edit?usp=drive_link&ouid=100836827384199721318&rtpof=true&sd=true",
    },
    {
      id: 7,
      title: "Starbucks.ca Clone",
      description:
        "Starbucks Canada Official Website (starbucks.ca) Clone using Material UI",
      image: starbucks,
      link: "https://starbucks-clone-liart.vercel.app/",
      github: "https://github.com/gitmshdl/starbucks-clone",
    },
    {
      id: 6,
      title: "Real Estate UI",
      description: "Real Estate Website using React Bootstrap",
      image: realEstate,
      link: "https://real-estate-clone-sooty.vercel.app/",
      github: "https://github.com/gitmshdl/real-estate-clone",
    },
    {
      id: 5,
      title: "Canada News",
      description: "Live News in Canada using React Bootstrap",
      image: news,
      link: "https://news-seven-jade.vercel.app/",
      github: "https://github.com/gitmshdl/news",
    },
    {
      id: 4,
      title: "Netflix Clone",
      description: "Netflix UI using React Bootstrap and MongoDB",
      image: netflix,
      link: "https://netflix-ui-sable.vercel.app/login",
      github: "https://github.com/gitmshdl/netflix-clone",
    },
    {
      id: 3,
      title: "Note Map",
      description:
        "Map from Leaflet library asks your current location and share your messages with other users.",
      image: notemap,
      link: "https://note-map.vercel.app/",
      github: "https://github.com/gitmshdl/notemap",
    },
    {
      id: 2,
      title: "Sushi",
      description: "Food ordering UI using React.",
      image: sushi,
      link: "https://sushi-mu.vercel.app/",
      github: "https://github.com/gitmshdl/sushi",
    },
    {
      id: 1,
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
            <ProjectCard key={project.id} {...project} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
