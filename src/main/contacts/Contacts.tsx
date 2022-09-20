import React from "react";
import style from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <section className={style.contacts}>
      <div className={`wrapper ${style.contacts_wrapper}`}>
        <h2 className={style.contacts_title}>Contacts!</h2>
        <div className={style.skillsBlock_form_wrapper}>
          <form action="" method="post" className={style.form}>
            <input type="text" placeholder="Your name..." />
            <input type="text" placeholder="Your phone..." />
            <textarea placeholder="Comments..."></textarea>
            <button type="submit" className={style.form_button}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
