import React from "react";
import { Work } from "./Work";
import style from "./Works.module.css";
import html from "../../assets/images/html-icon.svg";
import js from "../../assets/images/js-icon.svg";
import react from "../../assets/images/react-icon.svg";

export const Works = () => {
  return (
    <section className={style.worksBlock}>
      <div className={`wrapper ${style.worksBlock_wrapper}`}>
        <h2 className={style.worksBlock_title}>My works!</h2>
        <div className={style.worksBlock_content}>
          <Work
            title={"Two pages website"}
            description={"Technologies: HTML, CSS, JS"}
            mod={style._shelter}
            href={"https://kulish89.github.io/shelter/shelter/pages/main/"}
          />
          <Work
            title={"Application todo List "}
            description={"Technologies: HTML, CSS, JS"}
            mod={style._todolist}
            href={"https://kulish89.github.io/TodoList-JS/"}
          />
        </div>
      </div>
    </section>
  );
};
