import React from "react";
import cl from "./formation.module.css";
import img1 from "../../../assets/aboutBloodCells/fromationImg1.png";
import img2 from "../../../assets/aboutBloodCells/formationImg2.png";
const Formation = () => {
  return (
    <div className={cl.content}>
      <h3>2. Образование</h3>
      <article id="a" className={cl.contentWrapper}>
        <p id="text1">
          Все кровяные клетки происходят из стволовых кроветворных (гематопоэтических) клеток, находящихся в костном
          мозге. Сначала они разделяются на популяции предшественников лимфоидных клеток и миелоидных клеток.
          Предшественники лимфоидных клеток дают начало натуральным киллерам, T-лимфоцитам и B-лимфоцитам.
          Предшественники миелоидных клеток развиваются в популяции мегакариоцитов (предшественников тромбоцитов),
          предшественников эритроцитов, тучных клеток и миелобластов.
        </p>
        <div id="img1" className={`${cl.imgWrapper} ${cl.imgWrapperLeft}`}>
          <img src={img2} alt="qwe" />
        </div>
      </article>

      <article id="b" className={`${cl.contentWrapper} ${cl.lastBlock}`}>
        <div id="img2" className={`${cl.imgWrapper} ${cl.imgWrapperToRight}`}>
          <img src={img1} alt="qwe" />
        </div>
        <p id="text2">
          От миелобластов происходят базофилы, нейтрофилы, эозинофилы и моноциты. Образование эритроцитов (эритропоэз)
          стимулируется эритропоэтинами при нехватке кислорода в тканях. Содержание лейкоцитов в крови регулируется
          гормонами тимуса. В печени синтезируется тромбопоэтин, который стимулирует образование мегакариоцитов. Клетки
          стромы костного мозга и T-лимфоциты вырабатывают интерлейкин 3, который действует на стволовые кроветворные
          клетки.
        </p>
      </article>
    </div>
  );
};

export default Formation;
