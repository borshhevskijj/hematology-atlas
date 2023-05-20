import { useState } from "react";
import {AutoComplete} from './AutoComplete'

interface Props {
    sendData:()=> Promise<void>
    setInputText:React.Dispatch<React.SetStateAction<string>>
    inputText: string
}
 
export const Input :React.FC<Props> = ({
    sendData,
    inputText,
    setInputText
}) => {

    return (
        <>
            <input 
            type="text"
            value={inputText}
            list="auto_complete"
            onChange={(e) => setInputText(e.target.value)}
             />
             <button onClick={()=> sendData()}>отправить</button>
             <AutoComplete/>
        </>
        
        
    );
}
 