import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";


interface ToggleDarkThemeContextPrviderProps{
    children:ReactNode
}

interface ToggleDarkThemeContextData{
    theme:string;
    changeToogle:()=>void;
}



export const ToggleDarkThemeContext = createContext({} as ToggleDarkThemeContextData)

export function ToggleDarkThemeProvider({children}: ToggleDarkThemeContextPrviderProps){
   
    //const [cookies, setCookie] = useCookies(['theme']);
    let cookie = Cookies.get('theme')
    const [ theme, setTheme ] = useState(cookie ?? 'light')
    const [hasClicked, setHasClicked] = useState(false)
    console.log(theme)
    function changeToogle(){
        setHasClicked(!hasClicked)
        setTheme(hasClicked  && 'dark' || 'light')
    }

    useEffect(()=> {
        Cookies.set('theme', theme)
    }, [hasClicked])


    return(
        <ToggleDarkThemeContext.Provider value={{theme, changeToogle}}>
            {children}
        </ToggleDarkThemeContext.Provider>
    )
}