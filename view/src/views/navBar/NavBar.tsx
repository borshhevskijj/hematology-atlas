import React from "react";
import cl from "./navBar.module.css";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  SubmenuRef: React.MutableRefObject<null | HTMLAnchorElement>;
  isOpen: boolean;
}

const NavBar: React.FC<Props> = ({ isOpen, SubmenuRef }) => {
  return (
    <header id="main">
      <nav>
        <ul>
          <div className={cl.navBarLeftPart}>
            <li>
              <Link to="/#main">Главная</Link>
            </li>
            <li>
              <Link to="/#aboutProject">О проекте</Link>
            </li>
            <li>
              <Link to="/#aboutBloodCells">Полезная информация</Link>
            </li>
          </div>

          <li className={cl.navBarRightPart}>
            <a href="#" ref={SubmenuRef}>
              Кроветворение
            </a>
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
