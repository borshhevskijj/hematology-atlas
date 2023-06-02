import { useRef, useEffect } from "react";
import cl from "./aboutProject.module.css";
import img from "./aboutprojectimg.webp";
import img2 from "./aboutprojectimg2.webp";
import useHash from "../CustomHooks/useHash";

const AboutProject = () => {
  const ref = useRef(null);
  useHash(ref);

  return (
    <section ref={ref} id="aboutProject">
      <h2>О проекте</h2>
      <div className={cl.content}>
        <div className={`${cl.contentWrapper} ${cl.contentWrapperLeft}`}>
          <p>
            Этот проект - онлайн-ресурс, посвященный изучению клеток крови, их морфологии, функциям и патологическим
            изменениям. Мы предоставляем информацию о различных типах клеток крови и позволяем визуально их
            идентифицировать.
          </p>
          <div>
            <img src={img} alt="123" />
          </div>
        </div>

        <div className={`${cl.contentWrapper} ${cl.contentWrapperRight}`}>
          <div>
            <img src={img2} alt="123" />
          </div>
          <p>
            Гемопоэз - процесс образования крови в костном мозге. Мы описываем его стадии и развитие клеток крови, таких
            как эритроциты, лейкоциты и тромбоциты. Предоставляем информацию о роли клеток и факторов роста, влияющих на
            гемопоэз.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
