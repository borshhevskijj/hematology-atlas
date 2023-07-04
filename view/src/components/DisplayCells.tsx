import { Props } from "../views/accordion/Accordion";
import Carousel from "../views/accordion/Carousel";
import cl from "./displayCells.module.css";
const DisplayCells: React.FC<Props> = ({ data }) => {
  return (
    <>
      <ul className={cl.cellDescription} key={data.id}>
        <li>Морфология: {data.morphology}</li>
        <li>Функции: {data.functions}</li>
        <li>Маркеры: {data.markers}</li>
        <li>Количество: {data.quantity}</li>
        <li>Болезни: {data.diseases}</li>
        <li>
          <Carousel imagesArr={data.img} cellName={data.name} />
        </li>
      </ul>
    </>
  );
};

export default DisplayCells;
