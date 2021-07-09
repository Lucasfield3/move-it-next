import { useState } from "react";
import { createContext, ReactNode } from "react";


interface MenuButtonContextData{
    isActive:boolean;
    handleIsActive:()=>void;
}

export const MenuButtonContext = createContext({} as MenuButtonContextData)

interface MenuButtonProviderProps {
    children:ReactNode
}

export function MenuButtonProvider({children}: MenuButtonProviderProps){

    const [ isActive, setIsActive ] = useState(false)

    
    function handleIsActive(){
        setIsActive(!isActive)
    }


    return(
        <MenuButtonContext.Provider value={{isActive, handleIsActive}}>
            {children}
        </MenuButtonContext.Provider>
    )

}