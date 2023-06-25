import React, { useState } from "react";
import cl from "./navBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import subMenuIcon from "../../assets/icons/subMenuIcon.svg";
import { Input } from "../search/Input";

interface Props {
  SubmenuRef: React.MutableRefObject<null | HTMLAnchorElement>;
  isOpen: boolean;
}

const menuLinks = {
  subMenu: [
    {
      name: "Лимфопоэз",
      path: `hematopoiesis/lymphopoiesis`,
    },
    {
      name: "Гранулопоэз",
      path: `hematopoiesis/granulopoiesis`,
    },
    {
      name: "Эритропоэз",
      path: `hematopoiesis/erythropoiesis`,
    },
    {
      name: "Тромбопоэз",
      path: `hematopoiesis/thrombopoiesis`,
    },
    {
      name: "Монопоэз",
      path: `hematopoiesis/monopoesis`,
    },
    {
      name: "Аномалии",
      path: `hematopoiesis/anomalies`,
    },
    {
      name: "Лейкоциты в периферии",
      path: `hematopoiesis/leukocytesInPeripheralBlood`,
    },
  ],
  mainMenu: [
    {
      name: "Главная",
      path: "/#main",
    },
    {
      name: "О проекте",
      path: "/#aboutProject",
    },
    {
      name: "Полезная информация",
      path: "/#aboutBloodCells",
    },
  ],
};

const NavBar: React.FC<Props> = ({ isOpen, SubmenuRef }) => {
  const [isBrgMenuOpen, setBrgMenuState] = useState(false);

  const toggleMenuStates = () => {
    setBrgMenuState(!isBrgMenuOpen);
  };

  return (
    <header className="container" id="main">
      <div onClick={() => toggleMenuStates()} className={`${cl.brgMenu} ${isBrgMenuOpen ? cl.open : ""}`}>
        <span />
      </div>
      <nav className={`${isBrgMenuOpen ? `${cl.menuActive} ${cl.menu}` : cl.menu}`}>
        <ul>
          {menuLinks.mainMenu.map((link) => {
            return (
              <li onClick={() => toggleMenuStates()} key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}

          <li className={cl.submenuBtn}>
            <a href="#" ref={SubmenuRef}>
              Кроветворение
              <img className={`${isOpen ? "" : cl.imgOpen}`} src={subMenuIcon} alt="open/close icon" />
            </a>
            {/* ---------------- */}
            <ul onClick={() => toggleMenuStates()} className={`${cl.submenu} ${isOpen ? cl.open : ""}`}>
              {menuLinks.subMenu.map((link) => {
                return (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <Input toggleMenuStates={toggleMenuStates} />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
