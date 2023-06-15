import { useRef } from "react";
import cl from "./aboutBloodCells.module.css";
import Description from "./Description";
import Formation from "./Formation";
import BloodCellsTypes from "./BloodCellsTypes";
import img from "../../../assets/aboutBloodCells/bloodTypesImg.png";

const AboutBloodCells = () => {
  return (
    <section className={`${cl.aboutBloodCells} container`} id="aboutBloodCells">
      <h2>
        <span>Немного о клетках</span>
        <span>крови</span>
      </h2>
      <Description />
      <Formation />
      <BloodCellsTypes />
      <div className={cl.bgImg}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default AboutBloodCells;
