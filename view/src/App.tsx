import React,{useState} from 'react';
import SearchPage from './searchComponent/SearchPage';
import Accordion from './accordionComponent/Accordion';
import { IBloodCell } from './displayBloodCells/DisplayBloodCells';
import { Link } from 'react-router-dom';
import  "./App.css";
function App() {
  return (
    <div className="App">
        <SearchPage/>
        <Link to={`hematopoiesis/lymphopoiesis`}>Лимфопоэз</Link>
        <Link to={`hematopoiesis/granulopoiesis`}>Гранулопоэз</Link>
        <Link to={`hematopoiesis/erythropoiesis`}>Эритропоэз</Link>
        <Link to={`hematopoiesis/thrombopoiesis`}>Тромбопоэз</Link>
        <Link to={`hematopoiesis/monopoesis`}>Монопоэз</Link>
        <Link to={`hematopoiesis/anomalies`}>Аномалии</Link>
        <Link to={`hematopoiesis/leukocytesInPeripheralBlood`}>Лейкоциты в периферии</Link>
      </div>
  );
}
// Отправка запросов на сервер и получение данных
// const bloodCellsResponse = await fetch('/bloodcells');
// const bloodCellsData = await bloodCellsResponse.json();

// const bloodCellImagesResponse = await fetch('/bloodcellimages');
// const bloodCellImagesData = await bloodCellImagesResponse.json();

// // Объединение BloodCells и BloodCellImages
// const fullBloodCells = bloodCellsData.map(bloodCell => {
//   const images = bloodCellImagesData
//     .filter(image => image.bloodCell_id === bloodCell.id)
//     .map(image => image.image);
  
//   return {
//     ...bloodCell,
//     images,
//   };
// });

// // Использование полученных данных
// console.log(fullBloodCells);

export default App;
