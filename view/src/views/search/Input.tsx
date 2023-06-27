import { useState, useEffect } from "react";
import { AutoComplete } from "./AutoComplete";
import searchIcon from "../../assets/icons/Search.svg";
import cl from "./input.module.css";
import { IBloodCell } from "../Hematopoiesis/HematopoiesisType";
import { useNavigate } from "react-router-dom";
// interface Props {
//   getData: () => Promise<void>;
//   setInputText: React.Dispatch<React.SetStateAction<string>>;
//   inputText: string;
// }
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type props = {
  toggleMenuStates: () => void;
};
type errors = {
  errorMessage: string | undefined;
  errorClassName: string | undefined;
};

export const Input: React.FC<props> = ({ toggleMenuStates }) => {
  const [inputText, setInputText] = useState(sessionStorage.getItem("CellName") || "");
  const [error, setError] = useState<errors>({
    errorMessage: undefined,
    errorClassName: undefined,
  });
  const navigate = useNavigate();

  const inputValidation = (text: string) => {
    if (text.trim() === "") {
      setError({
        errorMessage: "поле ввода должно содержать название клетки",
        errorClassName: cl.emptyInput,
      });
      setTimeout(() => {
        setError({
          errorMessage: undefined,
          errorClassName: undefined,
        });
      }, 3000);
      return false;
    }
    return true;
  };

  const search = () => {
    if (inputValidation(inputText)) {
      navigate(`/search/${inputText}`);
      toggleMenuStates();
    }
  };

  const onPressEnterOnInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
    }
    return;
  };
  return (
    <div className={cl.inputContainer}>
      {/* <div className={cl.inputWrapper}> */}
      <div className={error.errorClassName ? error.errorClassName : cl.inputWrapper}>
        <input
          onKeyDown={(e) => onPressEnterOnInput(e)}
          type="text"
          value={inputText}
          list="auto_complete"
          placeholder={error.errorMessage ? error.errorMessage : "Найти клетку"}
          onChange={(e) => setInputText(e.target.value)}
        />
        <img onClick={() => search()} src={searchIcon} alt="searchIcon" />
      </div>
      <AutoComplete />
    </div>
  );
};
