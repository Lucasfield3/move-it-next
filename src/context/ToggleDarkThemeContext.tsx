import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";


interface ToggleDarkThemeContextPrviderProps{
    children:ReactNode
}

interface ToggleDarkThemeContextData{
    hasClickedToggle:boolean;
    changeToogle:()=>void
}



export const ToggleDarkThemeContext = createContext({} as ToggleDarkThemeContextData)

export function ToggleDarkThemeProvider({children}: ToggleDarkThemeContextPrviderProps){

    const [ hasClickedToggle, setHasClickedToggle ] = useState(false)

    function changeToogle(){
        setHasClickedToggle(!hasClickedToggle)
    }

    useEffect(()=> {
        Cookies.set('hasClickedToggle', String(hasClickedToggle))
    }, [hasClickedToggle])


    return(
        <ToggleDarkThemeContext.Provider value={{hasClickedToggle, changeToogle}}>
            {children}
        </ToggleDarkThemeContext.Provider>
    )
}