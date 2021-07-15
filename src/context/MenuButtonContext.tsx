import { useState } from "react";
import { createContext, ReactNode } from "react";


interface MenuButtonContextData{
    isSideActive:boolean;
    handleIsActive:()=>void;
    handleIsActiveForBodyClick:()=>void;
}

export const MenuButtonContext = createContext({} as MenuButtonContextData)

interface MenuButtonProviderProps {
    children:ReactNode
}

export function MenuButtonProvider({children}: MenuButtonProviderProps){

    const [ isSideActive, setIsSideActive ] = useState(false)

    
    function handleIsActive(){
        setIsSideActive(!isSideActive)
    }


       
    function handleIsActiveForBodyClick(){
        if(isSideActive === true){
            setIsSideActive(!isSideActive)
        }
    }



    return(
        <MenuButtonContext.Provider value={{isSideActive, handleIsActive, handleIsActiveForBodyClick}}>
            {children}
        </MenuButtonContext.Provider>
    )

}