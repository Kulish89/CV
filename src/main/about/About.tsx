import React from "react";
import style from "./About.module.css";

export const About = () => {
  return (
    <section className={style.aboutBlock}>
      <div className={`wrapper ${style.aboutBlock_wrapper}`}>
        <div className={style.about_description}>
          <span>Hi there!</span>
          <h1>My name is Andrey Kulish</h1>
          <p> I am a Frontend Developer!</p>
        </div>
        <div className={style.about_image}>
          <img
            src="https://sun9-42.userapi.com/impf/c629225/v629225577/10c96/pnQXlHwpsak.jpg?size=604x403&quality=96&sign=7d514655cb2e379bf32d8b83a863fc34&type=album"
            alt="My photo"
          />
        </div>
      </div>
    </section>
  );
};
