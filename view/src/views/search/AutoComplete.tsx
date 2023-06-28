import { useState, useEffect } from "react";
interface ICellName {
  name: string;
}

export const AutoComplete: React.FC = () => {
  const BCnames: ICellName[] | null = JSON.parse(localStorage.getItem("BCnames")!);
  const [names, setNames] = useState<ICellName[]>(BCnames || []);
  const [isNameLoaded, setIsNameLoaded] = useState(!!localStorage.getItem("BCnames"));

  const getAllCellsNames = async () => {
    const fetching = await fetch(`http://localhost:5000/allCells`);
    const data = await fetching.json();
    setNames(data);
    localStorage.setItem("BCnames", JSON.stringify(data));
  };

  useEffect(() => {
    if (!isNameLoaded) {
      getAllCellsNames();
      setIsNameLoaded(true);
    }
  }, []);
  return (
    <>
      <datalist id="auto_complete">
        {names &&
          names.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
      </datalist>
    </>
  );
};
