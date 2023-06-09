import React, { useState, useEffect } from "react";
// import { IBloodCell } from '../displayBloodCells/DisplayBloodCells';
import Accordion from "../accordion/Accordion";
import { useParams, useNavigate } from "react-router-dom";

interface bloodCellImage {
  id: number;
  bloodCell_id: number;
  image: string;
}

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
  const navigate = useNavigate();
  const [data, setData] = useState<IBloodCell[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

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
        console.log("fetching.ok");
      }
      if (!fetching.ok) {
        console.log("!fetching.ok");
        setData([]);
        setLoading(false);
        clearTimeout(timerId);
        setError("Произошла ошибка при выполнении запроса");
      }
    } catch (err) {
      console.log("catch", err);
      setError("Произошла ошибка при выполнении запроса");
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <section style={{ paddingBottom: 250, paddingTop: 50 }}>
      {data.length > 0 &&
        data.map((item: any) => {
          return <Accordion key={item.id} data={item} />;
        })}
    </section>
  );
};

export default HematopoiesisType;
