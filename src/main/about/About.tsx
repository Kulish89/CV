import React from "react";
import style from "./About.module.scss";
import mainPhoto from "../../assets/images/myphoto.jpg";
export const About = () => {
  return (
    <section className={style.about}>
      <div className={`wrapper ${style.about_wrapper}`}>
        <div className={style.aboutDescription}>
          <p className={style.aboutDescription_subtitle}>Welcome to my page</p>
          <h1 className={style.aboutDescription_title}>
            Hi, I'm <span>Andrey Kulish</span>
          </h1>
          <p className={style.aboutDescription_text}> a Frontend Developer!</p>
        </div>
        <div className={style.aboutImage}>
          <img src={mainPhoto} alt="My avatar" />
        </div>
      </div>
    </section>
  );
};
