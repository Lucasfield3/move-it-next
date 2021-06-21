import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'


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
    resetChallenge:()=> void
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
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    return(
        <ChallengesContext.Provider value={{
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToTheNextLevel
        }}>
            {children}
        </ChallengesContext.Provider>
    )

}   