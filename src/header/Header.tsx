import React from "react";
import s from "./Header.module.css";
function Header() {
  return (
    <header className={s.header} id="header">
      <div className={`wrapper ${s.header_wrapper}`}>
        <div>LOGO!My awesome logo!</div>
        <nav className={s.nav}>
          <ul className={s.nav_list}>
            <li className={s.nav_item}>
              <a href="#">Main</a>
            </li>
            <li className={s.nav_item}>
              <a href="#skills">Skills</a>
            </li>
            <li className={s.nav_item}>
              <a href="#projects">Projects</a>
            </li>
            <li className={s.nav_item}>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
