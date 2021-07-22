import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal'
import { LanguageContext } from './LanguageContext'
import { MediaContext } from './MediaContext'

export interface Challenge {
    type: 'body' | 'eye';
    descriptionPortuguese:string;
    descriptionEnglish:string;
    descriptionSpanish: string;
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
    challengeCompleted:()=> void,
    closeLevelUpModal:()=> void, 
    isLevelUpModalOpen:boolean
}

interface ChallengesProviderProps {
    children: ReactNode;
    level:number;
    currentExperience:number;
    challengesCompleted:number;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider ({children, ...rest}:ChallengesProviderProps){ //rest = todas as props menos a children
    
    const [level, setLevel]  = useState(rest.level ?? 0)
    const [currentExperience, setCurrenteExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const { handleLanguage} = useContext(LanguageContext)
    const { match } = useContext(MediaContext)

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    const experienceToTheNextLevel = Math.pow((level + 1 ) * 4, 2)

    function levelUp(){
        setLevel(level + 1)
        setIsLevelUpModalOpen(true)
    }

    function closeLevelUpModal (){
        setIsLevelUpModalOpen(false)
    } 

    function startNewChallenge(){
       const randomChallengesBox = Math.floor(Math.random() * challenges.length)
       const challenge = challenges[randomChallengesBox]
       setActiveChallenge(challenge)
       
        if(match){
            new Audio('/notification.mp3').play()
            Notification.requestPermission(function(result) {
                if (result === 'granted') {
                    new Notification(`${handleLanguage().notificationHeader}`, {
                        body:`${handleLanguage().notificationText} ${challenge.amount}xp!.`
                    })
                }
              });
        }else{
            new Audio('/notification.mp3').play()
            navigator.serviceWorker.register('sw.js');
            Notification.requestPermission(function(result) {
            if (result === 'granted') {
                new Notification(`${handleLanguage().notificationHeader}`, {
                    body:`${handleLanguage().notificationText} ${challenge.amount}xp!.`
                })
            }
            });
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
    
    useEffect(()=> {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [level, currentExperience, challengesCompleted])

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
        challengeCompleted, 
        closeLevelUpModal,
        isLevelUpModalOpen 
        }}>
            {children}

            {isLevelUpModalOpen == true && <LevelUpModal/>}
        </ChallengesContext.Provider>
    )

}   