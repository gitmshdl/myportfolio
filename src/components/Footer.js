import React from "react";
import classes from "./Footer.module.css";
import { BsGithub } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";

function Footer() {
  const buttons = [
    {
      title: "Github",
      link: "https://github.com/gitmshdl",
      badge: <BsGithub size="3rem" />,
    },
    {
      title: "CV",
      link: "https://drive.google.com/file/d/1SPLep4NnSZ1_2LUDrwF4uytImsJK3NJT/view?usp=sharing",
      badge: <GrDocumentPdf size="3rem" />,
    },
  ];
  return (
    <div className={classes.container}>
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.link}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "ani_bounceIn aniUtil_onMouse aniUtil_active aniUtil_onMouseRepeat"
          }
        >
          {button.badge}
          <div className="text-center">{button.title}</div>
        </a>
      ))}
    </div>
  );
}

export default Footer;
