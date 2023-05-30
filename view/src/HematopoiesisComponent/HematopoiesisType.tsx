import React,{useState,useEffect} from 'react';
// import { IBloodCell } from '../displayBloodCells/DisplayBloodCells';
import Accordion from '../accordionComponent/Accordion';
import {useParams,useNavigate} from 'react-router-dom';


interface bloodCellImage {
  id: number
  bloodCell_id: number
  image: string
}


export interface IBloodCell {
  id:number
  name: string
  morphology:string
  functions:string
  markers:string
  quantity:string
  diseases:string
  img: string[]
}



const HematopoiesisType = () => {
    const { type } = useParams();
    const navigate = useNavigate()
    const [data,setData]= useState<IBloodCell[]>([])

    // const filterData = async(data:any)=>{
    //   const [images,description]:[bloodCellImage[],IBloodCell[]]= data
    //   const sortedDescription = description.sort((a,b)=>a.id - b.id)

    //   const results:IBloodCell[]= []
    //   sortedDescription.map(bloodCell => {
    //     const img = images
    //       .filter(image => image.bloodCell_id === bloodCell.id)
    //       .map(image => image.image);
    //     results.push({
    //       ...bloodCell,
    //       img,
    //     })
    //   });
    //   return results
    // }
    
  const getData = async ()=>{
    try {
            const fetching = await fetch(`http://localhost:5000/hematopoiesis/${type}`)
            const data:IBloodCell[] = await fetching.json()
            setData(data)
          } catch (err) {
            console.error(err)
          }
        }

        
    useEffect(() => {
        getData()
      },[type]);

    return (
        <>
      <button onClick={() => navigate(-1)}>go back</button>
            {data.length > 0 && data?.map((item:any) =>{
       return (
         <Accordion key={item.id} data={item}/>
       )
        })}
        </>
    );
};

export default HematopoiesisType;