
import Cookies from "js-cookie";
import { useCallback } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useStateCallBack from 'use-state-callback'

interface ToggleDarkThemeContextPrviderProps{
    children:ReactNode
}

interface ToggleDarkThemeContextData{
    theme:string;
    changeToogle:()=>void;
}



export const ToggleDarkThemeContext = createContext({} as ToggleDarkThemeContextData)

export function ToggleDarkThemeProvider({children}: ToggleDarkThemeContextPrviderProps){
   
  
  const [cookies, setCookie] = useCookies(['theme']);

   
    //let cookie = Cookies.get('theme')

    const [ theme, setTheme ] = useState('')
    console.log(cookies.theme)

    const changeToogle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(cookies)
    };

    
    console.log(theme)

    useEffect(()=>{
       if(cookies){
           setTheme(cookies.theme)
       }else{
           setTheme('light')
       }
    }, [])

    useEffect(()=>{
        setCookie('theme', theme)
    },[theme])
    // useEffect(()=> {
        //updateState()
    // }, [])

    //setCookie('theme', theme)

   

    return(
        <ToggleDarkThemeContext.Provider value={{theme, changeToogle}}>
            {children}
        </ToggleDarkThemeContext.Provider>
    )
}