import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { IBloodCell } from "../Hematopoiesis/HematopoiesisType";
import Accordion from "../accordion/Accordion";
import DisplayCells from "../../components/DisplayCells";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { name } = useParams();
  const [data, setData] = useState<IBloodCell>();

  const [err, setError] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    if (!name) {
      return;
    }
    try {
      let timerId = setTimeout(() => {
        setLoading(true);
      }, 350);

      const fetching = await fetch(`http://localhost:5000/search/${name}`);

      if (fetching.ok) {
        const data = await fetching.json();
        setData(data);
        setError(null);
        setLoading(false);
        clearTimeout(timerId);
      }
      if (!fetching.ok) {
        setData(undefined);
        setLoading(false);
        clearTimeout(timerId);
        setError("Такой клетки не существует!");
      }
    } catch (err) {
      setError("Произошла ошибка при выполнении запроса");
      setData(undefined);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    name && sessionStorage.setItem("CellName", name);
  }, [name]);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }

  return <div>{data && Object.keys(data).length && <DisplayCells data={data} />}</div>;
};

export default SearchPage;