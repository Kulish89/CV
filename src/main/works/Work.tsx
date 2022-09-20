import React from "react";
import { title } from "process";
import style from "./Works.module.css";

type SkillPropsType = {
  title: string;
  description: string;
  mod: string;
  href: string;
};

export const Work = ({ title, description, mod, href }: SkillPropsType) => {
  return (
    <div className={style.work} id="projects">
      <div className={`${style.work_image} ${mod}`}>
        <a className={style.work_link} href={href} target="_blank">
          Show more
        </a>
      </div>
      <h3 className={style.work_title}>{title}</h3>
      <p className={style.work_description}>{description}</p>
    </div>
  );
};
