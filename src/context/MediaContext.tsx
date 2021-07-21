import { useState } from "react";
import { ReactNode, useEffect } from "react";
import { createContext } from "react";

interface MediaContextData{
    match:boolean
}

interface MediaContextProviderProps{
    children: ReactNode;
}

export const MediaContext = createContext({} as MediaContextData)

export function MediaContextProvider(props:MediaContextProviderProps){

   const [match, setMatch] = useState<boolean>(undefined)


   function handleMedia(){
       if(window !== undefined){
        const checkMatches = window.matchMedia('(max-width:700px)')
        if(match == undefined){
            if(process.browser){
                if(checkMatches.matches){
                    setMatch(checkMatches.matches)
                }else{
                    setMatch(checkMatches.matches)
                }
            }
        }else{
            checkMatches.addEventListener('change', ()=>{
                if(process.browser){
                    if(checkMatches.matches){
                        setMatch(checkMatches.matches)
                    }else{
                        setMatch(checkMatches.matches)
                    }
                }
            })
        }
    }
   }
  
   
  
     useEffect(()=>{
       handleMedia()
    }, [match])


    return(
        <MediaContext.Provider  value={{match}}>
            {props.children}
        </MediaContext.Provider>
    )

}