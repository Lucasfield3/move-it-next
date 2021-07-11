import { useState } from "react";
import { createContext, ReactNode } from "react";


interface MenuButtonContextData{
    isActive:boolean;
    handleIsActive:()=>void;
    handleIsActiveForBodyClick:()=>void;
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


       
    function handleIsActiveForBodyClick(){
        if(isActive === true){
            setIsActive(!isActive)
        }
    }



    return(
        <MenuButtonContext.Provider value={{isActive, handleIsActive, handleIsActiveForBodyClick}}>
            {children}
        </MenuButtonContext.Provider>
    )

}