import React from "react";
import { Work } from "./Work";
import style from "./Works.module.scss";
import shelterImg from "../../assets/images/shelter.png";
import todolistImg from "../../assets/images/todolistReact.png";
import socialNetworkImg from "../../assets/images/social-network.png";
import learnCardsImg from "../../assets/images/learn-cards.png";
import sliderImg from "../../assets/images/slider.png";
import keyboardImg from "../../assets/images/virtual-keyboard.png";
import consultingImg from "../../assets/images/consulting-company.png";
import goCoronaImg from "../../assets/images/go-corona.png";
const myWorks = [
  {
    title: "Learnin cards app",
    description:
      "Technologies: Typescript, React, Redux, React-redux, Material-UI, React-router-dom, Ant Design",
    href: "https://grigorydobrenko.github.io/learning-cards/",
    image: learnCardsImg,
  },
  {
    title: "Social network app",
    description:
      "Technologies: Typescript, React, Redux, React-redux, Material-UI, React-router-dom, Axios",
    href: "https://kulish89.github.io/samurai-way/",
    image: socialNetworkImg,
  },
  {
    title: "Two pages website",
    description: "Technologies: HTML, CSS, JS, BEM",
    href: "https://kulish89.github.io/shelter/shelter/pages/main/",
    image: shelterImg,
  },
  {
    title: "Application to do list",
    description:
      "Technologies: TypeScript, React, Redux, React-redux, Axios, Material-UI, JEST",
    href: "https://kulish89.github.io/TODOLIST-REACT-REDUX-TS/",
    image: todolistImg,
  },
  {
    title: "Memes slider",
    description: "Technologies: HTML,CSS",
    href: "https://kulish89.github.io/cssMemSlider/cssMemSlider/",
    image: sliderImg,
  },
  {
    title: "Virtual keyboard",
    description: "Technologies: HTML,CSS,JS",
    href: "https://kulish89.github.io/virtual-keyboard/",
    image: keyboardImg,
  },
  {
    title: "Consulting company adaptive site",
    description: "Technologies: HTML,CSS,BEM",
    href: "https://kulish89.github.io/layout1-HTML-CSS/",
    image: consultingImg,
  },
  {
    title: "Medical adaptive site",
    description: "Technologies: HTML,CSS,BEM",
    href: "https://kulish89.github.io/layout2-HTML-CSS/",
    image: goCoronaImg,
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
