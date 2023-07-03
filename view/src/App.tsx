import React, { useState, lazy, Suspense, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./views/navBar/NavBar";
// import HomePage from "./views/homePage/HomePage";

import Spinner from "./components/spinner/Spinner";
import BackgroundLines from "./components/backgroundLines/BackgroundLines";

const HomePage = lazy(() => import("./views/homePage/HomePage"));
const SearchPage = lazy(() => import("./views/search/SearchPage"));
const HematopoiesisType = lazy(() => import("./views/Hematopoiesis/HematopoiesisType"));
const PageNotFound = lazy(() => import("./components/errors/pageNotFound/PageNotFound"));

const appRoutes = [
  { path: "/", component: <HomePage /> },
  { path: "spinner", component: <Spinner /> },
  { path: "search/:name", component: <SearchPage /> },
  { path: "hematopoiesis/:type", component: <HematopoiesisType /> },
  { path: "*", component: <PageNotFound errorMessage={"Такой страницы не существует"} responseStatus={404} /> },
];

function App() {
  const [isSubMenuOpen, setSubMenuState] = useState(false);
  const NavBarSubmenuRef = useRef(null);

  const toggleSubmenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    if (!isSubMenuOpen && e.target !== NavBarSubmenuRef.current) {
      return;
    }
    if (isSubMenuOpen && e.target === NavBarSubmenuRef.current) {
      return setSubMenuState(false);
    }
    if (e.target === NavBarSubmenuRef.current) {
      return setSubMenuState(true);
    }
    setSubMenuState(false);
  };

  return (
    <div onClick={(e) => toggleSubmenu(e)} className="App">
      <BackgroundLines />
      <NavBar isOpen={isSubMenuOpen} SubmenuRef={NavBarSubmenuRef} />
      <Routes>
        {appRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={<Suspense fallback={<Spinner />}>{component}</Suspense>} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
