import React from 'react';
import { Props } from './Accordion';


const AccordionContent:React.FC<Props> = ({data}) => {
    return (
        <ul key={data.id}>
            <li>Морфология: {data.morphology}</li>
            <li>Функции: {data.functions}</li>
            <li>Маркеры: {data.markers}</li>
            <li>Количество: {data.quantity}</li>
            <li>Болезни: {data.diseases}</li>
        </ul>
    );
};

export default AccordionContent;