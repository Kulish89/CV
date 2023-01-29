import s from "./Footer.module.scss";
import codewars from "../assets/images/codewars-icon.svg";
import github from "../assets/images/github-icon.svg";
import linkedin from "../assets/images/linkedin-icon.svg";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={"wrapper " + s.footer_wrapper}>
        <div className={s.footer_content}>
          <ul className={s.footer_list}>
            <li className={s.footer_listItem}>
              <a
                href="https://www.codewars.com/users/Kulish89"
                className={s.footer_link}
              >
                <span>Codewars</span> <img src={codewars} alt="" />
              </a>
            </li>
            <li className={s.footer_listItem}>
              <a href="https://github.com/Kulish89" className={s.footer_link}>
                <span>GIT</span> <img src={github} alt="" />
              </a>
            </li>
            <li className={s.footer_listItem}>
              <a
                href="https://www.linkedin.com/in/andrey-kulish-47a973174/"
                className={s.footer_link}
              >
                <span>LinkedIn</span> <img src={linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <p>@2022 produced by Kulish Andrey</p>
      </div>
    </footer>
  );
};
export default Footer;
