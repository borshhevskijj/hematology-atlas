import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { IBloodCell } from "../Hematopoiesis/HematopoiesisType";
import Accordion from "../accordion/Accordion";
import DisplayCells from "../../components/DisplayCells";
import { useParams } from "react-router-dom";
import cl from "./searchPage.module.css";
import PageNotFound from "../../components/errors/pageNotFound/PageNotFound";

export type error = {
  responseStatus: number;
  errorMessage: string;
};

const SearchPage = () => {
  const { name } = useParams();
  const [data, setData] = useState<IBloodCell>();

  const [err, setError] = useState<error | null>(null);
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
        setError({
          responseStatus: fetching.status,
          errorMessage: "Такой клетки не существует!",
        });
      }
    } catch (err) {
      setError({
        responseStatus: 500,
        errorMessage: "Произошла ошибка при выполнении запроса!",
      });
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
    return <PageNotFound errorMessage={err.errorMessage} responseStatus={err.responseStatus} />;
  }

  return (
    <section className={`${cl.searchPage} container`}>
      {data && Object.keys(data).length && (
        <>
          <h2>{data.name}</h2>
          <DisplayCells data={data} />
        </>
      )}
    </section>
  );
};

export default SearchPage;
