import cl from "./description.module.css";
import img1 from "../../../assets/aboutBloodCells/descriptionImg1.png";
import img2 from "../../../assets/aboutBloodCells/descriptionImg2.png";

const Description = () => {
  return (
    <div className={cl.content}>
      <article className={cl.datesWrapper}>
        <h3>1. Описание</h3>
        <div className={`${cl.contentWrapper} ${cl.dates}`}>
          <p>
            <time>1842</time>французский врач Альфред Франсуа Донне открыл тромбоциты.
          </p>
          <p>
            <time>1695</time>Антони ван Левенгук зарисовал их, назвав «красными корпускулами»
          </p>
          <p>
            <time>1658</time> голландский натуралист Ян Сваммердам впервые увидел эритроциты в микроскоп
          </p>
        </div>
      </article>
      <article>
        <div className={cl.contentWrapper}>
          <p>
            Кле́тки кро́ви, или кровяны́е кле́тки — клетки, входящие в состав крови и образующиеся в красном костном мозге
            в ходе гемопоэза.
          </p>
          <p>
            Численную долю объёма крови, приходящуюся на клетки (обычно на красные), называют гематокритом. У женщин его
            значение в норме составляет 0,37—0,47, у мужчин — 0,4—0,54. Более 99% гематокрита приходится на эритроциты.
          </p>
        </div>
        <div className={`${cl.imgWrapper} ${cl.imgWrapperToLeft}`}>
          <img loading="lazy" src={img1} alt="qwe" />
        </div>
      </article>
      <article className={cl.lastBlock}>
        <div className={cl.contentWrapper}>
          <p>
            Существует три основных типа клеток крови: эритроциты (красные кровяные клетки), лейкоциты (белые кровяные
            клетки) и тромбоциты (кровяные пластинки).
          </p>
          <p>
            Клетки крови выполняют разнообразные функции: переносят кислород и углекислый газ (эритроциты), обеспечивают
            работу иммунной системы (лейкоциты) и свёртываемость крови (тромбоциты). Иногда эритроциты, тромбоциты
            и лейкоциты в совокупности называют форменными элементами крови.
          </p>
        </div>
        <div className={`${cl.imgWrapper} bRadius`}>
          <img loading="lazy" src={img2} alt="qwerty" />
        </div>
      </article>
    </div>
  );
};

export default Description;
