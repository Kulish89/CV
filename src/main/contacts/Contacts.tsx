import React, { useState } from "react";
import MyForm from "../../MyForm";
import style from "./Contacts.module.scss";
import contact from "../../assets/images/contact.png";

export const Contacts = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  return (
    <section className={style.contacts} id="contacts">
      <div
        className={`${style.contacts_wrapper} ${isSending && style.sending}`}
      >
        <p className={style.contacts_subtitle}>send message</p>
        <h2 className={style.contacts_title}>Contact with me</h2>
        <div className={style.contacts_contentWrapper}>
          <div className={style.contacts_content}>
            <div className={style.contacts_imageWrapper}>
              <img className={style.contacts_image} src={contact} alt="asd" />
            </div>
            <ul className={style.contacts_list}>
              <li>
                <a
                  href="https://goo.gl/maps/artKEJhLST37NqDU6"
                  className={style.contacts_item}
                >
                  <span>Location: </span> Belarus, Minsk.
                </a>
              </li>
              <li>
                <a href="tel:+375297825777" className={style.contacts_item}>
                  <span>Phone: </span> +375297825777
                </a>
              </li>
              <li>
                <a
                  href="mailto:andreykulish89@gmail.com"
                  className={style.contacts_item}
                >
                  <span>Email: </span> andreykulish89@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <MyForm setIsSending={setIsSending} />
        </div>
      </div>
    </section>
  );
};
