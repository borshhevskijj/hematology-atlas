import { useRef } from "react";
import cl from "./aboutBloodCells.module.css";
import Description from "./Description";
import Formation from "./Formation";
import BloodCellsTypes from "./BloodCellsTypes";
const AboutBloodCells = () => {
  return (
    <section className={cl.aboutBloodCells} id="aboutBloodCells">
      <h2>
        <span>Немного о клетках</span>
        <span>крови</span>
      </h2>
      <Description />
      <Formation />
      <BloodCellsTypes />
    </section>
  );
};

export default AboutBloodCells;
