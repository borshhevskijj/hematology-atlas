import React,{useState,useEffect} from 'react';
import { DisplayBloodCells } from '../displayBloodCells/DisplayBloodCells';
import {Input} from './Input';
import {IBloodCell} from '../HematopoiesisComponent/HematopoiesisType'
import Accordion from '../accordionComponent/Accordion'


const SearchPage = () => {
    const [data,setData] = useState<IBloodCell>()
    const [inputText,setInputText] = useState('')
    const [isLoading,setLoading] = useState(false)
    const [err,setError]= useState<any>(null)


    const getData = async ()=>{
        if (!inputText) {
            return
        }
        try {
            const setTimeoutId= setTimeout(() => {                             setLoading(true);
                }, 350)
                const fetching = await fetch(`http://localhost:5000/search/${inputText}`)
                if (fetching.ok) {
                    const data = await fetching.json()
                    setData(data)
                    clearTimeout(setTimeoutId)
                    setLoading(false);    
                    setError(null)    
                    return  
                }
                if (!fetching.ok) {
                    setError('Ошибка, не удается найти клетку')
                    setData(undefined)
                    setLoading(false);  
                    return  
                }
                setError('Неизвестная ошибка')
                setData(undefined)
            } catch (err) {
                setError("Произошла ошибка при выполнении запроса");
                setData(undefined)
                setLoading(false);    
                }
        }
        
    
        useEffect(() => {
            getData()
        },[setInputText]);
        
    

    return (
        <>
        <Input
        inputText={inputText}
        setInputText={setInputText}
        getData={getData}
        />
        {err && <div>{err}</div> }
        {
         !err && <Accordion data={data!} isLoading={isLoading} err={err}/>
        }
        </>
    );
};

export default SearchPage;