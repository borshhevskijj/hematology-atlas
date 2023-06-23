import React from "react";
import cl from "./pageNotFound.module.css";
import img from "../../../assets/aboutBloodCells/descriptionImg1.png";
import { error } from "../../../views/search/SearchPage";

const PageNotFound: React.FC<error> = ({ errorMessage, responseStatus }) => {
  console.log(responseStatus.toString().split(""), typeof responseStatus);
  const chars = responseStatus.toString().split("");
  return (
    <div className={cl.wrapper}>
      <div className={cl.content}>
        <span className={cl.left}>{chars[0]}</span>
        <span>
          <img src={img} alt="error" />
        </span>
        <span className={cl.right}>{chars[2]}</span>
      </div>
      <div className={cl.children}>
        <span>{errorMessage}</span>
        <span> ошибка: {responseStatus}</span>
      </div>
    </div>
  );
};

export default PageNotFound;
