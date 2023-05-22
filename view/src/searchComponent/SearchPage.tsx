import React,{useState} from 'react';
import { DisplayBloodCells } from '../displayBloodCells/DisplayBloodCells';
import {Input} from './Input';
import {IBloodCell} from "../displayBloodCells/DisplayBloodCells";



const SearchPage = () => {
    const [data,setData] = useState<IBloodCell[]>([])
    const [inputText,setInputText] = useState('')
    const [isLoading,setLoading] = useState<boolean>(false)

    const sendData = async ()=>{
        try {
            const setTimeoutId= setTimeout(() => { //задержка перед показам лоадера
                    setLoading(true);
                }, 350);

                const fetching = await fetch(`http://localhost:5000/search/${inputText}`)
                const data = await fetching.json()
                setData(data)
                console.log(data);
                clearTimeout(setTimeoutId)// сброс таймаута если фетч быстрее задержки таймаута
                setLoading(false);                    
                } catch (err) {
                    console.log(err)
                }
        }

       

    return (
        <>
        <Input
        inputText={inputText}
        setInputText={setInputText}
        sendData={sendData}
        />
        <DisplayBloodCells isLoading={isLoading} data={data}/>
        </>
    );
};

export default SearchPage;