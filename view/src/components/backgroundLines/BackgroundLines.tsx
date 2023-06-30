import React from "react";
import img from "../../assets/background/3DMorphLines.svg";
import cl from "./backgroundLines.module.css";
const BackgroundLines = () => {
  return (
    <div className={cl.container}>
      <img src={img} alt="" />
    </div>
  );
};

export default BackgroundLines;
