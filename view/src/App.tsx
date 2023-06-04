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
    const regex = /^\/(search\/[^/]+|hematopoiesis\/[^/]+|)$/;
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

  const regexp = /^\/hematopoiesis\/(.+)$/;
  const isHematopoiesisPath = () => {
    if (regexp.test(location)) {
      setHematopoiesis(true);
    } else {
      setHematopoiesis(false);
    }
  };

  useEffect(() => {
    isHematopoiesisPath();
    checkCurrentPath(location);
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
