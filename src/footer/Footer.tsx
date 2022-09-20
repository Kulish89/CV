import s from "./Footer.module.css";
import phone from "../assets/images/phone-icon.svg";
import email from "../assets/images/email-icon.svg";
import linkedin from "../assets/images/linkedin-icon.svg";
const Footer = () => {
  return (
    <footer className={s.footer} id="contacts">
      <div className={"wrapper " + s.footer_wrapper}>
        <h2 className={s.footer_title}> Andrey Kulish</h2>
        <div className={s.footer_contacts}>
          <ul className={s.contacts_list}>
            <li>
              <a href="tel:+375297825777" className={s.contacts_item}>
                <span>Phone</span> <img src={phone} alt="" />
              </a>
            </li>
            <li>
              <a
                href="mailto:andreykulish89@gmail.com"
                className={s.contacts_item}
              >
                <span>Email</span> <img src={email} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/andrey-kulish-47a973174/"
                className={s.contacts_item}
              >
                <span>LinkedIn</span> <img src={linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <span>@2022 All rights reserved</span>
      </div>
    </footer>
  );
};
export default Footer;
