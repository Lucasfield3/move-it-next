import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { SettingsModal } from "../components/SettingsModal";



interface SettingsContextPrviderProps{
    children:ReactNode;
    theme?:string;
    minutes?:string;
    seconds?:string
}

interface SettingsContextData{
    theme:string;
    changeToogle:()=>void;
    openCloseSettingsModal:()=>void;
    minutesEdit:string;
    secondsEdit:string;
    setMinutesInput:(min:string)=>void;
    setSecondsInput:(sec:string)=>void;
    hasClickedSettings:boolean
}



export const SettingsContext = createContext({} as SettingsContextData)

export function SettingsProvider({children,...rest}: SettingsContextPrviderProps){

    const [cookies, setCookie] = useCookies(['theme']);

    console.log(rest.theme)
    console.log(typeof(cookies.theme))

    const [ theme, setTheme ] = useState<string>(rest.theme === 'undefined' && 'light' || rest.theme)

    const [ hasClickedSettings, setHasClickedSettings ] = useState(false)

   const [ minutesEdit, setMinutes] = useState<string>(rest.minutes)
   const [ secondsEdit, setSeconds] = useState<string>(rest.seconds)

    function setMinutesInput(min:string){
        setMinutes(min)
    }

    console.log(theme)


    function setSecondsInput(sec:string){
        setSeconds(sec)
    }

    function changeToogle(){
        setTheme(theme === 'light' && 'dark' || 'light')
    }

    function openCloseSettingsModal(){
        setHasClickedSettings(!hasClickedSettings)
    }

    useEffect(()=> {
        setCookie('theme', theme)
    }, [theme])

    useEffect(()=> {
        setCookie('minutes', minutesEdit)
        setCookie('seconds', secondsEdit)
        console.log(cookies.minutes)
        console.log(cookies.seconds)
    }, [hasClickedSettings])

    return(
        <SettingsContext.Provider value={{
            theme, 
            changeToogle, 
            openCloseSettingsModal, 
            minutesEdit, 
            secondsEdit, 
            setMinutesInput, 
            setSecondsInput,
            hasClickedSettings
            }}>
            {children}
            {hasClickedSettings && <SettingsModal/>}
        </SettingsContext.Provider>
    )
}