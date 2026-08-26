import React from "react";
// import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import classes from "./Home.module.css";
import Particles from "../components/Particles";

function Home() {
  return (
    <div className={classes.container} id="home">
      <Header />
      <Particles id="tsparticles" />
    </div>
  );
}

export default Home;
