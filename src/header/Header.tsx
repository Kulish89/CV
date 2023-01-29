import React, { useState } from "react";
import s from "./Header.module.scss";
import logo from "../assets/images/myPhotoForLogo.jpg";
import { useLocation } from "react-router-dom";
function Header() {
  const search = useLocation();
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  return (
    <header className={s.header} id="header">
      <div className={`wrapper ${s.header_wrapper}`}>
        <div className={s.header_logo}>
          <div className={s.header_img}>
            <img src={logo} alt="avatar" />
          </div>
          <h2 className={s.header_title}>Welcome!</h2>
          <div
            className={
              visibleMenu ? s.burger_rotate + " " + s.burger : s.burger
            }
            onClick={() => {
              setVisibleMenu(!visibleMenu);
            }}
          >
            <p className={s.burger_line}></p>
            <p className={s.burger_line}></p>
            <p className={s.burger_line}></p>
          </div>
        </div>
        <div className={s.nav_wrapper}>
          <nav
            className={visibleMenu ? s.nav + " " + s.visible : s.nav}
            onClick={() => setVisibleMenu(!visibleMenu)}
          >
            <ul className={s.nav_list}>
              <li className={s.nav_item}>
                <a
                  href="#header"
                  className={
                    search.hash === "#header" ? s.nav_activLink : s.nav_link
                  }
                >
                  main
                </a>
              </li>
              <li className={s.nav_item}>
                <a
                  href="#skills"
                  className={
                    search.hash === "#skills" ? s.nav_activLink : s.nav_link
                  }
                >
                  skills
                </a>
              </li>
              <li className={s.nav_item}>
                <a
                  href="#projects"
                  className={
                    search.hash === "#projects" ? s.nav_activLink : s.nav_link
                  }
                >
                  projects
                </a>
              </li>
              <li className={s.nav_item}>
                <a
                  href="#contacts"
                  className={
                    search.hash === "#contacts" ? s.nav_activLink : s.nav_link
                  }
                >
                  contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
