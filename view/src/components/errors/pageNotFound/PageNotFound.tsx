import React from "react";
import cl from "./pageNotFound.module.css";
import img from "../../../assets/aboutBloodCells/descriptionImg1.png";
import { error } from "../../../views/search/SearchPage";
import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";

const PageNotFound: React.FC<error> = ({ errorMessage, responseStatus }) => {
  const navigate = useNavigate();
  const responseStatusChars = responseStatus.toString().split("");
  return (
    <div className={cl.wrapper}>
      <div className={cl.content}>
        <span className={cl.left}>{responseStatusChars[0]}</span>
        <span>
          <img src={img} alt="error" />
        </span>
        <span className={cl.right}>{responseStatusChars[2]}</span>
      </div>
      <div className={cl.children}>
        <span>{errorMessage}</span>
        <span> ошибка: {responseStatus}</span>
      </div>
      <Button children={"на главную"} onClick={() => navigate("/")} />
    </div>
  );
};

export default PageNotFound;
