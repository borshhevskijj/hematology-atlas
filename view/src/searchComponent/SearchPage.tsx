import React,{useState,useEffect} from 'react';
import { DisplayBloodCells } from '../displayBloodCells/DisplayBloodCells';
import {Input} from './Input';
import {IBloodCell} from '../HematopoiesisComponent/HematopoiesisType'
import Accordion from '../accordionComponent/Accordion'


const SearchPage = () => {
    const [data,setData] = useState<IBloodCell>()
    const [inputText,setInputText] = useState('')
    const [isLoading,setLoading] = useState(false)

    const sendData = async ()=>{
        try {
            const setTimeoutId= setTimeout(() => { //задержка перед показам лоадера
                    setLoading(true);
                }, 350)
                const fetching = await fetch(`http://localhost:5000/search/${inputText}`)
                const data = await fetching.json()
                setData(data)
                clearTimeout(setTimeoutId)// сброс таймаута если фетч быстрее задержки таймаута
                console.log(data,'searchPage');
                
                setLoading(false);                    
                } catch (err) {
                    console.log(err)
                }
        }
        useEffect(() => {
            if (!inputText) {
                return
            }
            sendData()
          },[setInputText]);
    
       

    return (
        <>
        <Input
        inputText={inputText}
        setInputText={setInputText}
        sendData={sendData}
        />
        {data && Object.keys(data).length > 0 && <Accordion data={data}/>}
        
        {/* <DisplayBloodCells isLoading={isLoading} data={data}/> */}
        {/* {data?.length && <Accordion data={data}/>} */}
        </>
    );
};

export default SearchPage;