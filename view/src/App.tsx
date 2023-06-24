import React, { useState, useEffect, useRef } from "react";
import SearchPage from "./views/search/SearchPage";
import Accordion from "./views/accordion/Accordion";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { useLocation, useMatch, matchRoutes } from "react-router-dom";
import NavBar from "./views/navBar/NavBar";
import Main from "./views/homePage/MainScreen/Main";
import HematopoiesisType from "./views/Hematopoiesis/HematopoiesisType";
import HomePage from "./views/homePage/HomePage";
import PageNotFound from "./components/errors/pageNotFound/PageNotFound";

function App() {
  const [isSubMenuOpen, setOpen] = useState(false);
  const NavBarSubmenuRef = useRef(null);

  const toggleSubmenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (!isSubMenuOpen && e.target !== NavBarSubmenuRef.current) {
      console.log("!isSubMenuOpen && e.target !== NavBarSubmenuRef.current");
      return;
    }
    if (isSubMenuOpen && e.target === NavBarSubmenuRef.current) {
      console.log("isSubMenuOpen && e.target === NavBarSubmenuRef.current");
      return setOpen(false);
    }
    if (e.target === NavBarSubmenuRef.current) {
      console.log("e.target === NavBarSubmenuRef.current");
      return setOpen(true);
    }
    console.log("fase");

    setOpen(false);
  };

  return (
    <div onClick={(e) => toggleSubmenu(e)} className="App">
      <NavBar isOpen={isSubMenuOpen} SubmenuRef={NavBarSubmenuRef} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search/:name" element={<SearchPage />} />
        <Route path="hematopoiesis/:type" element={<HematopoiesisType />} />
        {/* <Route path="*" element={<div>Такой страницы не существует</div>} /> */}
        <Route path="*" element={<PageNotFound errorMessage={"Такой страницы не существует"} responseStatus={404} />} />
      </Routes>
    </div>
  );
}

export default App;
