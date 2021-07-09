import { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";


interface ToggleDarkThemeContextPrviderProps{
    children:ReactNode;
    theme?:string
}

interface ToggleDarkThemeContextData{
    theme:string;
    changeToogle:()=>void;
}



export const ToggleDarkThemeContext = createContext({} as ToggleDarkThemeContextData)

export function ToggleDarkThemeProvider({children,...rest}: ToggleDarkThemeContextPrviderProps){
   
  
  const [cookies, setCookie] = useCookies(['theme']);

    const [ theme, setTheme ] = useState<string>(rest.theme)
    const [hasClicked, setHasClicked] = useState(false)

    function changeToogle(){
        setHasClicked(!hasClicked)
        setTheme(hasClicked && 'dark' || 'light')
    }

    useEffect(()=> {
        setCookie('theme', theme)
    }, [hasClicked])

    return(
        <ToggleDarkThemeContext.Provider value={{theme, changeToogle}}>
            {children}
        </ToggleDarkThemeContext.Provider>
    )
}