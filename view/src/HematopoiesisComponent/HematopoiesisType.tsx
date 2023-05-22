import React,{useState,useEffect} from 'react';
import { IBloodCell } from '../displayBloodCells/DisplayBloodCells';
import Accordion from '../accordionComponent/Accordion';
import {useParams,useNavigate} from 'react-router-dom';

const HematopoiesisType = () => {
    const { type } = useParams();
    const navigate = useNavigate()
    const [data,setData]= useState<IBloodCell[]>([])
  const getData = async ()=>{
    try {
            const fetching = await fetch(`http://localhost:5000/hematopoiesis/${type}`)
            const data:IBloodCell[] = await fetching.json()
            setData(data.sort((a,b)=>a.id - b.id))
            console.log(data);
            } catch (err) {
                console.log(err)
            }
    }

    useEffect(() => {
        getData()
      },[type]);

    return (
        <>
      <button onClick={() => navigate(-1)}>go back</button>
            {data.length > 0 && data?.map(item =>{
       return (
         <Accordion key={item.id} data={item}/>
       )
        })}
        </>
    );
};

export default HematopoiesisType;