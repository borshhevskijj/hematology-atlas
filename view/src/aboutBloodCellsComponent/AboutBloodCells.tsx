import { useRef } from "react";
import cl from "./aboutBloodCells.module.css";
import Description from "./Description";
import useHash from "../CustomHooks/useHash";
const AboutBloodCells = () => {
  const ref = useRef(null);
  // useHash(ref);Ы
  return (
    <section ref={ref} className={cl.aboutBloodCells} id="aboutBloodCells">
      <h2>
        <span>Немного о клетках</span>
        <span>крови</span>
      </h2>
      <Description />
    </section>
  );
};

export default AboutBloodCells;
