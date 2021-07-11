import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { SettingsModal } from "../components/SettingsModal";
import LeaderBoards from "../pages/LeaderBoards";


interface SettingsContextPrviderProps{
    children:ReactNode;
    theme?:string
}

interface SettingsContextData{
    theme:string;
    changeToogle:()=>void;
    openCloseSettingsModal:()=>void;
}



export const SettingsContext = createContext({} as SettingsContextData)

export function SettingsProvider({children,...rest}: SettingsContextPrviderProps){
   
  
  const [cookies, setCookie] = useCookies(['theme']);

    const [ theme, setTheme ] = useState<string>(rest.theme)
    const [hasClickedToggle, setHasClickedToggle] = useState(false)

    const [ hasClickedSettings, setHasClickedSettings ] = useState(false)

    function changeToogle(){
        setHasClickedToggle(!hasClickedToggle)
        setTheme(hasClickedToggle && 'dark' || 'light')
    }

    function openCloseSettingsModal(){
        setHasClickedSettings(!hasClickedSettings)
    }

    useEffect(()=> {
        setCookie('theme', theme)
    }, [hasClickedToggle])

    return(
        <SettingsContext.Provider value={{theme, changeToogle, openCloseSettingsModal}}>
            {children}
            {hasClickedSettings && <SettingsModal/>}
        </SettingsContext.Provider>
    )
}