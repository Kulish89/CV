import { About } from "./about/About";
import { Contacts } from "./contacts/Contacts";
import { Skills } from "./skills/Skills";
import { Works } from "./works/Works";

export const Main = () => {
  return (
    <main>
      <About />
      <Skills />
      <Works />
      <Contacts />
    </main>
  );
};
