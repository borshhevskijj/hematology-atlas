import React, { useState } from "react";
import { Link } from "react-router-dom";
import cl from "./navBar.module.css";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const fn = () => {
    setOpen(!isOpen);
  };
  return (
    <header>
      <nav>
        <ul>
          <div className={cl.navBarLeftPart}>
            <li>
              <a href="#main">Главная</a>
            </li>
            <li>
              <a href="#about-project">О проекте</a>
            </li>
            <li>
              <a href="#about-blood-cells">Полезная информация</a>
            </li>
          </div>

          <li className={cl.navBarRightPart}>
            <p onClick={() => fn()}>Кроветворение</p>
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
