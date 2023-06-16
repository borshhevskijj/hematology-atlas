import { useState, useEffect } from "react";
import { AutoComplete } from "./AutoComplete";
import searchIcon from "../../assets/icons/Search.svg";
import cl from "./input.module.css";
import { IBloodCell } from "../Hematopoiesis/HematopoiesisType";
import { useNavigate } from "react-router-dom";
interface Props {
  getData: () => Promise<void>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
}

export const Input: React.FC = () => {
  const [inputText, setInputText] = useState(sessionStorage.getItem("CellName") || "");
  const navigate = useNavigate();

  const onPressEnterOnInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${inputText}`);
    }
  };
  return (
    <div className={cl.inputContainer}>
      <div className={cl.inputWrapper}>
        <input
          onKeyDown={(e) => onPressEnterOnInput(e)}
          type="text"
          value={inputText}
          list="auto_complete"
          placeholder="Поиск"
          onChange={(e) => setInputText(e.target.value)}
        />
        <img src={searchIcon} alt="searchIcon" />
      </div>
      {/* <button onClick={() => navigate(`/search/${inputText}`)}>Поиск</button> */}
      <AutoComplete />
    </div>
  );
};
