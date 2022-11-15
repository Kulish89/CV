import React from "react";
import { Skill } from "./Skill";
import style from "./Skills.module.css";
import html from "../../assets/images/html-icon.svg";
import css from "../../assets/images/css-icon.svg";
import js from "../../assets/images/js-icon.svg";
import ts from "../../assets/images/typescript-icon.svg";
import react from "../../assets/images/react-icon.svg";
import redux from "../../assets/images/redux-icon.svg";

const skills = [
  { title: "html", percent: "90%", icon: html },
  { title: "css", percent: "80%", icon: css },
  { title: "javascript", percent: "80%", icon: js },
  { title: "typescript", percent: "60%", icon: ts },
  {
    title: "react",
    percent: "80%",
    icon: react,
  },
  {
    title: "redux",
    percent: "75%",
    icon: redux,
  },
];
export const Skills = () => {
  return (
    <section className={style.skillsBlock} id="skills">
      <div className={`wrapper ${style.skillBlock_wrapper}`}>
        <div>
          <p className={style.skillsBlock_subtitle}>my knowledges</p>
          <h2 className={style.skillsBlock_title}>My development skill</h2>
        </div>
        <div className={style.skillsBlock_content}>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              title={skill.title}
              percent={skill.percent}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
