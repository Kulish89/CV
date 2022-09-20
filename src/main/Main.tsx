import { About } from "./about/About";
import { Contacts } from "./contacts/Contacts";
import style from "./Main.module.css";
import { Skills } from "./skills/Skills";
import { Works } from "./works/Works";

export const Main = () => {
  return (
    <main className={style.main}>
      <About />
      <Skills />
      <Works />
      <Contacts />
    </main>
  );
};
