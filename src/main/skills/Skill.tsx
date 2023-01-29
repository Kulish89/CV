import React from "react";
import { title } from "process";
import style from "./Skills.module.scss";

type SkillPropsType = {
  title: string;
  percent: string;
  icon: string;
};

export const Skill = ({ title, percent, icon }: SkillPropsType) => {
  return (
    <div className={style.skill}>
      <div className={style.skill_description}>
        <h6 className={style.skill_title}>{title}</h6>
        <div className={style.skill_icon}>
          <img src={icon} alt="icon" />
        </div>
      </div>

      <div className={style.progress}>
        <div className={style.progress_bar} style={{ width: percent }}>
          <span className={style.progress_percent}>{percent}</span>
        </div>
      </div>
    </div>
  );
};
