import { useRef } from "react";
import SearchPage from "../searchComponent/SearchPage";
import { Input } from "../searchComponent/Input";
import cl from "./main.module.css";
import img from "./mainScreenHQ.webp";
import useHash from "../CustomHooks/useHash";
const Main = () => {
  const ref = useRef(null);
  // useHash(ref);
  return (
    <section ref={ref} id="main" className={cl.main}>
      <h1>
        <span>гематологический</span>
        <span>атлас</span>
      </h1>

      <div className={cl.content}>
        <div className={cl.contentWrapper}>
          <p>
            Наш атлас поможет вам лучше понять клетки крови и их роль в организме, а также основы гемопоэза.
            Предоставляем полезную информацию и визуальные материалы для обучения, исследований и практической работы
            в гематологии.
          </p>
          <Input />
        </div>
        <div className={cl.imageWrapper}>
          <img src={img} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Main;
