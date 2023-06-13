import cl from "./bloodCellsTypes.module.css";
import img from "../../../assets/aboutBloodCells/bloodTypesImg.png";
const BloodCellsTypes = () => {
  return (
    <div className={cl.content}>
      <h3>3. Виды клеток</h3>
      <article className={cl.contentWrapper}>
        <h4>Эритроциты</h4>
        <p>
          Красные кровяные тельца несут кислород из легких к тканям организма. Также они несут углекислый газ обратно в
          легкие.
        </p>
        <p>
          Эритроциты составляют почти половину от общего объема крови. Продолжительность жизни этих клеток — около 120
          дней.
        </p>
      </article>
      <article className={cl.contentWrapper}>
        <h4>Лейкоциты (белые кровяные тельца)</h4>
        <p>
          Лейкоциты противостоят инфекциям и являются важным элементом иммунной системы. Они составляют очень малую
          часть от общего объема крови (менее 1 %).
        </p>
        <p>
          Существует три типа лейкоцитов: гранулоциты, моноциты и лимфоциты. Каждый тип играет важную
          роль.Продолжительность жизни лейкоцитов варьируется в широких пределах — от часов до нескольких лет.
        </p>
      </article>
      <article className={cl.contentWrapper}>
        <h4>Тромбоциты</h4>
        <p>
          Тромбоциты — это небольшие фрагменты клеток. Их основной функцией является остановка кровотечения. Они
          составляют очень малую часть от общего объема крови (менее 1 %). Продолжительность жизни тромбоцитов — около
          9–12 дней.
        </p>
      </article>
      <div className={cl.bgImg}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BloodCellsTypes;
