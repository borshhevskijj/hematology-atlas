import React from "react";
import cl from "./navBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import subMenuIcon from "../../assets/icons/subMenuIcon.svg";
import { Input } from "../search/Input";

interface Props {
  SubmenuRef: React.MutableRefObject<null | HTMLAnchorElement>;
  isOpen: boolean;
}

const NavBar: React.FC<Props> = ({ isOpen, SubmenuRef }) => {
  return (
    <header className="container" id="main">
      <nav>
        <ul>
          <li>
            <Link to="/#main">Главная</Link>
          </li>
          <li>
            <Link to="/#aboutProject">О проекте</Link>
          </li>
          <li>
            <Link to="/#aboutBloodCells">Полезная информация</Link>
          </li>
          <li className={cl.submenuBnt}>
            <a href="#" ref={SubmenuRef}>
              Кроветворение
              <img className={`${isOpen ? "" : cl.imgOpen}`} src={subMenuIcon} alt="open/close icon" />
            </a>
            {/* ---------------- */}
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
          <Input />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
