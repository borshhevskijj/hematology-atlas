import React from "react";
import cl from "./pageNotFound.module.css";
import img from "../../../assets/aboutBloodCells/descriptionImg1.png";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const PageNotFound: React.FC<Props> = ({ children }) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.content}>
        <span>4</span>
        <span>
          <img src={img} alt="error" />
        </span>
        <span>4</span>
      </div>
      {children}
    </div>
  );
};

export default PageNotFound;
