import React from "react";
import { Work } from "./Work";
import style from "./Works.module.css";
import shelterImg from "../../assets/images/shelter.png";
import todolistImg from "../../assets/images/todolist.png";
const myWorks = [
  {
    title: "Two pages website",
    description: "Technologies: HTML, CSS, JS",
    href: "https://kulish89.github.io/shelter/shelter/pages/main/",
    image: shelterImg,
  },
  {
    title: "Application todo list",
    description: "Technologies: HTML, CSS, JS",
    href: "https://kulish89.github.io/TodoList-JS/",
    image: todolistImg,
  },
];

export const Works = () => {
  return (
    <section className={style.worksBlock} id="projects">
      <div className={`wrapper ${style.worksBlock_wrapper}`}>
        <div>
          <p className={style.worksBlock_subtitle}>my projects</p>
          <h2 className={style.worksBlock_title}>My works</h2>
        </div>

        <div className={style.worksBlock_content}>
          {myWorks.map((work, index) => (
            <Work
              key={index}
              title={work.title}
              description={work.description}
              href={work.href}
              image={work.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
