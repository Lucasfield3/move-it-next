import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountDown:() => void;
    resetCountDown:() => void;
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({children}:CountDownProviderProps) {

    let countDownTimeOut: NodeJS.Timeout;

    const {startNewChallenge} = useContext(ChallengesContext)

    const [hasFinished, setHasFinished] = useState(false)
    const [time, setTime] = useState(0.1 * 60) 
    const [isActive, setIsActive] = useState(false)
    const minutes = Math.floor( time / 60 ) 
    const seconds = time % 60


    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeOut)
        setHasFinished(false)
        setIsActive(false)
        setTime(0.1 * 60)
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


    return(
        <CountDownContext.Provider 
        value={{
            minutes,
            seconds,
            isActive,
            startCountDown,
            resetCountDown,
            hasFinished
        }}
        >
            {children}
        </CountDownContext.Provider>
    )

}


