import React, {useEffect} from 'react';
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage('darkMode');

    useEffect(()=>{
        const body =  Document.getElementByTagName('body');
        if(darkMode === true){
           body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode');
        }
    },[darmMode]);

    return [darkMode, setDarkMode];
}