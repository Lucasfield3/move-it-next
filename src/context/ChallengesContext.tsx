import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount:number
}

interface ChallengesContextData { 
    level:number;
    currentExperience:number, 
    challengesCompleted:number,
    activeChallenge: Challenge,
    experienceToTheNextLevel:number, 
    levelUp:()=> void,
    startNewChallenge: ()=> void,
    resetChallenge:()=> void,
    challengeCompleted:()=> void
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider ({children}:ChallengesProviderProps){
    
    const [level, setLevel]  = useState(1)
    const [currentExperience, setCurrenteExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToTheNextLevel = Math.pow((level + 1 ) * 4, 2)

    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge(){
       const randomChallengesBox = Math.floor(Math.random() * challenges.length)
       const challenge = challenges[randomChallengesBox]

       setActiveChallenge(challenge)

       new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio!!', {
                body:`Valendo ${challenge.amount}xp!.`
            })
        }

    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function challengeCompleted(){

        if(!activeChallenge) return null;

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToTheNextLevel){
            finalExperience = finalExperience - experienceToTheNextLevel;
            levelUp()
        }
        setCurrenteExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)

    }

    useEffect(()=> {
        Notification.requestPermission()
    }, [])

    return(
        <ChallengesContext.Provider value={{
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToTheNextLevel,
        challengeCompleted 
        }}>
            {children}
        </ChallengesContext.Provider>
    )

}   