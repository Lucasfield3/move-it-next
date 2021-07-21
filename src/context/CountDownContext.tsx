import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";
import { SettingsContext } from "./SettingsContext";

interface CountDownContextData {
    hasFinished:boolean;
    isActive:boolean;
    startCountDown:() => void;
    resetCountDown:() => void;
    minutes:number;
    seconds:number;
    time:number;
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({children }:CountDownProviderProps) {

    let countDownTimeOut: NodeJS.Timeout;

    const { startNewChallenge } = useContext(ChallengesContext)
    const { minutesEdit, secondsEdit, hasClickedSettings } = useContext(SettingsContext)

    const [hasFinished, setHasFinished] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const timeInseconds = ((Number(minutesEdit) * 60) + Number(secondsEdit))
    const [time, setTime] = useState(isNaN(timeInseconds ) === true && (25 * 60) || timeInseconds) 
    const minutes =  Math.floor( time / 60 ) 
    const seconds = time % 60 
  
    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeOut)
        setHasFinished(false)
        setIsActive(false)
        setTime(isNaN(timeInseconds ) === true && (25 * 60) || timeInseconds)
    }



    useEffect(()=>{
        if(isActive && time > 0){
            countDownTimeOut  = setTimeout(()=>{
                setTime( time - 1)
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    useEffect(()=> {
        if(!isActive) setTime(isNaN(timeInseconds ) === true && (25 * 60) || timeInseconds)
    }, [hasClickedSettings])




    return(
        <CountDownContext.Provider 
        value={{
            isActive,
            startCountDown,
            resetCountDown,
            hasFinished,
            minutes,
            seconds,
            time
        }}
        >
            {children}
        </CountDownContext.Provider>
    )

}


