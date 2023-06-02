import { useState, useEffect } from "react";
import { AutoComplete } from "./AutoComplete";
import searchIcon from "./Search.svg";
import cl from "./input.module.css";
import { IBloodCell } from "../HematopoiesisComponent/HematopoiesisType";
import { useNavigate } from "react-router-dom";
interface Props {
  getData: () => Promise<void>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
}

// export const Input: React.FC<Props> = ({ getData, inputText, setInputText }) => {
export const Input: React.FC = () => {
  const [inputText, setInputText] = useState(sessionStorage.getItem("CellName") || "");
  const navigate = useNavigate();

  // useEffect(()=>{
  // },[setInputText])

  return (
    <div className={cl.inputContainer}>
      <div className={cl.inputWrapper}>
        <input
          type="text"
          value={inputText}
          list="auto_complete"
          placeholder="Поиск, например: Моноцит"
          onChange={(e) => setInputText(e.target.value)}
        />
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <button onClick={() => navigate(`/search/${inputText}`)}>Поиск</button>
      <AutoComplete />
    </div>
  );
};
