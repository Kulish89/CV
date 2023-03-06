import React from "react";
import style from "./Works.module.scss";
type WorkPropsType = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export const Work = ({ title, description, image, href }: WorkPropsType) => {
  return (
    <div className={style.work}>
      <div className={style.inner}>
        <div className={style.work_imageWrapper}>
          <a
            className={style.work_imageLink}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image} alt="image of site"></img>
          </a>
        </div>
        <div className={style.description}>
          <div>
            <h4 className={style.description_title}>
              <a
                className={style.description_link}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {title}
                <i className={"fa fa-play"}></i>
              </a>
            </h4>
            <p className={style.description_text}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
