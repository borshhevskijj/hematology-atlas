import { useRef } from "react";
import cl from "./aboutBloodCells.module.css";
import Description from "./Description";
const AboutBloodCells = () => {
  return (
    <section className={cl.aboutBloodCells} id="aboutBloodCells">
      <h2>
        <span>Немного о клетках</span>
        <span>крови</span>
      </h2>
      <Description />
    </section>
  );
};

export default AboutBloodCells;
