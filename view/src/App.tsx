import React, { useState, useEffect, useRef } from "react";
import SearchPage from "./searchComponent/SearchPage";
import Accordion from "./accordionComponent/Accordion";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { useLocation, useMatch, matchRoutes } from "react-router-dom";
import Background from "./backgroundImageComponent/Background";
import NavBar from "./navBarComponent/NavBar";
import Main from "./MainScreenComponent/Main";
import HematopoiesisType from "./HematopoiesisComponent/HematopoiesisType";
import HomePage from "./homePage/HomePage";

// const paths = "hematopoiesis/:type"; //по этому пути не должен отображаться <Main /> компонент

const paths = {
  hematopoiesis0: /^\/hematopoiesis\/(.+)$/,
  search1: /^\/search\/(.+)$/,
  homePage2: /\/homepage#?[a-zA-Z]*/,
};
// setHematopoiesis(regexp.test(location));

function App() {
  const location = useLocation().pathname;
  // const mathch = matchRoutes(location);
  // console.log(location === mathch);

  const [isHematopoiesis, setHematopoiesis] = useState(false);
  const [isValidPath, setValidPath] = useState(true);
  const [isSubMenuOpen, setOpen] = useState(false);
  const NavBarSubmenuRef = useRef(null);

  function checkCurrentPath(pathname: string) {
    // const regex = /^\/(search\/|hematopoiesis\/|homePage)(.*)?$/;
    const regex = /^\/(search\/[^/]+|hematopoiesis\/[^/]+|homePage)$/;
    return regex.test(pathname);
  }
  const isWorkingPath = checkCurrentPath(location);

  const toggleSubmenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (!isSubMenuOpen && e.target !== NavBarSubmenuRef.current) {
      return;
    }
    if (e.target === NavBarSubmenuRef.current) {
      return setOpen(true);
    }
    setOpen(false);
  };

  const regexp = /^\/hematopoiesis\/(.+)$/; //надо 0 или более
  const isHematopoiesisPath = () => {
    if (regexp.test(location)) {
      setHematopoiesis(true);
    } else {
      setHematopoiesis(false);
    }
  };

  useEffect(() => {
    isHematopoiesisPath();
    console.log(isWorkingPath, location, "isWorkingPath");
    checkCurrentPath(location);
  }, [location]);

  // {!checkCurrentPath(location) && <div>Такой страницы не существует</div>}
  // if (!checkCurrentPath(location)) {
  //   return <div>Такой страницы не существует</div>;
  // }

  return (
    <div onClick={(e) => toggleSubmenu(e)} className="App">
      <NavBar isOpen={isSubMenuOpen} SubmenuRef={NavBarSubmenuRef} />
      {isWorkingPath && !isHematopoiesis && <Main />}
      <Routes>
        <Route path="search/:name" element={<SearchPage />} />
        <Route path="hematopoiesis/:type" element={<HematopoiesisType />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="*" element={<div>Такой страницы не существует</div>} />
      </Routes>
    </div>
  );
}

export default App;
