import React from "react";
import Main from "./MainScreen/Main";
import AboutProject from "./aboutProject/AboutProject";
import AboutBloodCells from "./aboutBloodCells/AboutBloodCells";
import BackgroundLines from "../../components/backgroundLines/BackgroundLines";
const HomePage = () => {
  return (
    <>
      <Main />
      <AboutProject />
      <AboutBloodCells />
    </>
  );
};

export default HomePage;
