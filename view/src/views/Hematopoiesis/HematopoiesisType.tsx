import React, { useState, useEffect } from "react";
// import { IBloodCell } from '../displayBloodCells/DisplayBloodCells';
import Accordion from "../accordion/Accordion";
import { useParams } from "react-router-dom";
import PageNotFound from "../../components/errors/pageNotFound/PageNotFound";
import { error } from "../search/SearchPage";
import cl from "./hematopoiesisType.module.css";
import Spinner from "../../components/spinner/Spinner";
import BackgroundLines from "../../components/backgroundLines/BackgroundLines";
export interface IBloodCell {
  id: number;
  name: string;
  morphology: string;
  functions: string;
  markers: string;
  quantity: string;
  diseases: string;
  img: string[];
}

const HematopoiesisType = () => {
  const { type } = useParams();
  const [data, setData] = useState<IBloodCell[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<error | null>(null);

  const getData = async () => {
    try {
      let timerId = setTimeout(() => {
        setLoading(true);
      }, 450);
      const fetching = await fetch(`http://localhost:5000/hematopoiesis/${type}`);
      if (fetching.ok) {
        const data: IBloodCell[] = await fetching.json();
        setData(data);
        clearTimeout(timerId);
        setLoading(false);
        setError(null);
      }
      if (!fetching.ok) {
        setData([]);
        setLoading(false);
        clearTimeout(timerId);
        setError({
          errorMessage: "Произошла ошибка при выполнении запроса",
          responseStatus: fetching.status,
        });
      }
    } catch (err) {
      setError({
        errorMessage: "Произошла ошибка при выполнении запроса",
        responseStatus: 500,
      });
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <PageNotFound errorMessage={error.errorMessage} responseStatus={error.responseStatus} />;
  }
  return (
    <section className={`container ${cl.content}`}>
      {/* <BackgroundLines /> */}
      {data.length > 0 &&
        data.map((item: any) => {
          return <Accordion key={item.id} data={item} />;
        })}
    </section>
  );
};

export default HematopoiesisType;
