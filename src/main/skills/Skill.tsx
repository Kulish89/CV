import React from "react";
import { title } from "process";
import style from "./Skills.module.css";

type SkillPropsType = {
  title: string;
  description: string;
  url: string;
};

export const Skill = ({ title, description, url }: SkillPropsType) => {
  return (
    <div className={style.skill}>
      <div className={style.skill_icon}>
        <img src={url} alt="icon" />
      </div>
      <h3 className={style.skill_title}>{title}</h3>
      <p className={style.skill_description}>{description}</p>
    </div>
  );
};
