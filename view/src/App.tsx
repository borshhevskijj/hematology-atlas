import React, { useState, useEffect, useRef } from "react";
import SearchPage from "./views/search/SearchPage";
import Accordion from "./views/accordion/Accordion";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { useLocation, useMatch, matchRoutes } from "react-router-dom";
import Background from "./backgroundImageComponent/Background";
import NavBar from "./views/navBar/NavBar";
import Main from "./views/homePage/MainScreen/Main";
import HematopoiesisType from "./views/Hematopoiesis/HematopoiesisType";
import HomePage from "./views/homePage/HomePage";

const validPaths = /^\/(search\/[^/]+|hematopoiesis\/[^/]+|)$/;
const hematopoiesisPath = /^\/hematopoiesis\/(.+)$/;

function App() {
  const location = useLocation().pathname;
  const [isHematopoiesis, setHematopoiesis] = useState(false);
  const [isSubMenuOpen, setOpen] = useState(false);
  const NavBarSubmenuRef = useRef(null);

  function checkCurrentPath(pathname: string, validPaths: RegExp) {
    return validPaths.test(pathname);
  }
  const isWorkingPath = checkCurrentPath(location, validPaths);

  const toggleSubmenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (!isSubMenuOpen && e.target !== NavBarSubmenuRef.current) {
      return;
    }
    if (isSubMenuOpen && e.target === NavBarSubmenuRef.current) {
      return setOpen(false);
    }
    if (e.target === NavBarSubmenuRef.current) {
      return setOpen(true);
    }
    setOpen(false);
  };

  const isHematopoiesisPath = (hematopoiesisPath: RegExp) => {
    if (hematopoiesisPath.test(location)) {
      setHematopoiesis(true);
    } else {
      setHematopoiesis(false);
    }
  };

  useEffect(() => {
    isHematopoiesisPath(hematopoiesisPath);
    checkCurrentPath(location, validPaths);
  }, [location]);

  return (
    <div onClick={(e) => toggleSubmenu(e)} className="App">
      <NavBar isOpen={isSubMenuOpen} SubmenuRef={NavBarSubmenuRef} />
      {isWorkingPath && !isHematopoiesis && <Main />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search/:name" element={<SearchPage />} />
        <Route path="hematopoiesis/:type" element={<HematopoiesisType />} />
        <Route path="*" element={<div>Такой страницы не существует</div>} />
      </Routes>
    </div>
  );
}

export default App;
