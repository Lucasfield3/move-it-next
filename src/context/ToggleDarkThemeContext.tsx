import { createContext, ReactNode, useState } from "react";


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

    return(
        <ToggleDarkThemeContext.Provider value={{hasClickedToggle, changeToogle}}>
            {children}
        </ToggleDarkThemeContext.Provider>
    )
}