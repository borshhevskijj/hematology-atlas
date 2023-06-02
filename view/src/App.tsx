import React, { useState, useEffect } from "react";
import SearchPage from "./searchComponent/SearchPage";
import Accordion from "./accordionComponent/Accordion";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { useLocation } from "react-router-dom";
import Background from "./backgroundImageComponent/Background";
import NavBar from "./navBarComponent/NavBar";
import Main from "./MainScreenComponent/Main";
import HematopoiesisType from "./HematopoiesisComponent/HematopoiesisType";
import HomePage from "./homePage/HomePage";
// import SearchComponent from "./searchComponent/SearchComponent";
function App() {
  const location = useLocation().pathname;

  const [isHematopoiesis, setHematopoiesis] = useState(false);
  const isHematopoiesisPath = (location: string) => {
    setHematopoiesis(regexp.test(location));
  };
  const paths = "hematopoiesis/:type"; //по этому пути не должен отображаться <Main /> компонент
  const regexp = /^\/hematopoiesis\/(.+)$/;

  useEffect(() => {
    isHematopoiesisPath(location);
  }, [location]);

  return (
    <div className="App">
      <NavBar />
      {!isHematopoiesis && <Main />}
      <Routes>
        <Route path="search/:name" element={<SearchPage />} />
        <Route path="hematopoiesis/:type" element={<HematopoiesisType />} />
        <Route path="*" element={<div>ничо нет</div>} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
