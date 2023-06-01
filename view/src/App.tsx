import React, { useState } from "react";
import SearchPage from "./searchComponent/SearchPage";
import Accordion from "./accordionComponent/Accordion";
import { Link } from "react-router-dom";
import "./App.css";
import NavBar from "./navBarComponent/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SearchPage /> */}
    </div>
  );
}

export default App;
