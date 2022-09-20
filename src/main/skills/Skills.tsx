import React from "react";
import { Skill } from "./Skill";
import style from "./Skills.module.css";
import html from "../../assets/images/html-icon.svg";
import js from "../../assets/images/js-icon.svg";
import react from "../../assets/images/react-icon.svg";

export const Skills = () => {
  return (
    <section className={style.skillsBlock} id="skills">
      <div className={`wrapper ${style.skillBlock_wrapper}`}>
        <h2 className={style.skillsBlock_title}>My skills!</h2>
        <div className={style.skillsBlock_content}>
          <Skill
            title={"HTML/CSS"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            url={html}
          />
          <Skill
            title={"JS/TS"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            url={js}
          />
          <Skill
            title={"REACT"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            url={react}
          />
        </div>
      </div>
    </section>
  );
};
