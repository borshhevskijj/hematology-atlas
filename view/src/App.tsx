import React, { useState, lazy, Suspense, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./views/navBar/NavBar";

// import HomePage from "./views/homePage/HomePage";
// import HematopoiesisType from "./views/Hematopoiesis/HematopoiesisType";
// import SearchPage from "./views/search/SearchPage";
// import PageNotFound from "./components/errors/pageNotFound/PageNotFound";
import Spinner from "./components/spinner/Spinner";

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
  const [isSubMenuOpen, setOpen] = useState(false);
  const NavBarSubmenuRef = useRef(null);

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

  return (
    <div onClick={(e) => toggleSubmenu(e)} className="App">
      <NavBar isOpen={isSubMenuOpen} SubmenuRef={NavBarSubmenuRef} />
      <Routes>
        {appRoutes.map(({ path, component }) => {
          return <Route path={path} element={<Suspense fallback={<Spinner />}>{component}</Suspense>} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
