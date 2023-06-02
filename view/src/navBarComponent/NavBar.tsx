import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import cl from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const refs = {
    homePage: useRef(null),
    aboutProject: useRef(null),
    aboutBloodCells: useRef(null),
  };
  type ref = "#homePage" | "#aboutProject" | "#aboutBloodCells";

  useEffect(() => {
    const { hash } = window.location;
    const qwe = hash.substring(1);
    const targetRef = refs.aboutProject;
    console.log(targetRef, targetRef.current);
    if (targetRef && targetRef.current) {
      (targetRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleSubmenu = () => {
    setOpen(!isOpen);
  };
  return (
    <header>
      <nav>
        <ul>
          <div className={cl.navBarLeftPart}>
            <li>
              <Link to="/homePage">Главная</Link>
            </li>
            <li>
              <Link to="/homePage#aboutProject">О проекте</Link>
            </li>
            <li>
              <Link to="/homePage#aboutBloodCells">Полезная информация</Link>
            </li>
            <li>
              <button onClick={() => navigate("/homePage/#aboutProject")}>О Проекте</button>
            </li>
          </div>

          <li className={cl.navBarRightPart}>
            <p onClick={() => toggleSubmenu()}>Кроветворение</p>
            <ul className={`${cl.submenu} ${isOpen ? cl.open : ""}`}>
              <li>
                <Link to={`hematopoiesis/lymphopoiesis`}>Лимфопоэз</Link>
              </li>
              <li>
                <Link to={`hematopoiesis/granulopoiesis`}>Гранулопоэз</Link>
              </li>
              <li>
                <Link to={`hematopoiesis/erythropoiesis`}>Эритропоэз</Link>
              </li>
              <li>
                <Link to={`hematopoiesis/thrombopoiesis`}>Тромбопоэз</Link>
              </li>
              <li>
                <Link to={`hematopoiesis/monopoesis`}>Монопоэз</Link>
              </li>
              <li>
                <Link to={`hematopoiesis/anomalies`}>Аномалии</Link>
              </li>
              <li>
                <Link to={`hematopoiesis/leukocytesInPeripheralBlood`}>Лейкоциты в периферии</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
