import {useState,useEffect} from 'react'
export interface IBloodCell {
    id:number
    name: string
    morphology:string
    functions:string
    markers:string
    quantity:string
    diseases:string
}

interface Props {
data: IBloodCell[]
isLoading:boolean
}

export const DisplayBloodCells :React.FC<Props> = ({
    data,
    isLoading
}) => {
    if (isLoading) {
            return <>загрузка...</>
    }

    return (
        <>
               {data && data.map(item =>{
                    return (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.functions}</li>
                        <li>{item.morphology}</li>
                        <li>{item.markers}</li>
                        <li>{item.quantity}</li>
                        <li>{item.diseases}</li>
                    </ul>
                    )
                })
            }
        </>
    );
};