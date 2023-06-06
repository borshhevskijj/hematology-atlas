import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { IBloodCell } from "../HematopoiesisComponent/HematopoiesisType";
import Accordion from "../accordionComponent/Accordion";
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

  return (
    <div>
      {data && Object.keys(data).length && (
        <>
          <div>{data.name}</div>
          <hr />
          <div>{data.morphology}</div>
          <hr />
          <div>{data.functions}</div>
          <hr />
          <div>{data.markers}</div>
          <hr />
          <div>{data.quantity}</div>
          <hr />
          <div>{data.diseases}</div>
          <hr />
          <ul>
            {data.img.map((img) => {
              return (
                <li key={img}>
                  <img src={img} alt="" />
                </li>
              );
            })}
          </ul>
        </>
      )}

      {/* {data && Object.keys(data).length && (
        <>
        <div>{data.name}</div>
        <div>{data.diseases}</div>
        <div>{data.functions}</div>
        <div>{data.markers}</div>
        <div>{data.morphology}</div>
        <div>{data.quantity}</div>
        <ul>
        {data.img.map((img) => {
              return (
                <li key={img}>
                  <img src={img} alt="" />
                </li>
              );
            })}
            </ul>
            </>
            )} */}
    </div>
  );
};

export default SearchPage;
