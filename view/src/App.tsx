import React,{useState} from 'react';
import SearchPage from './searchComponent/SearchPage';
import Accordion from './accordionComponent/Accordion';
import { IBloodCell } from './displayBloodCells/DisplayBloodCells';
import { Link } from 'react-router-dom';
import  "./App.css";
function App() {
  return (
    <div className="App">
        {/* <SearchPage/> */}
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

export default App;
