import React from "react";
import { Props } from "./Accordion";
import Carousel from "./Carousel";

const AccordionContent: React.FC<Props> = ({ data }) => {
  return (
    <ul key={data.id}>
      <li>Морфология: {data.morphology}</li>
      <li>Функции: {data.functions}</li>
      <li>Маркеры: {data.markers}</li>
      <li>Количество: {data.quantity}</li>
      <li>Болезни: {data.diseases}</li>
      <li>
        {data.img.map((image) => {
          return (
            // <Carousel image={image}/>
            <img key={image} src={image} alt="" />
          );
        })}
      </li>
    </ul>
  );
};

export default AccordionContent;
